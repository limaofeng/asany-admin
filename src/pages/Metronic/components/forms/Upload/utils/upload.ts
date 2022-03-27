/* eslint-disable graphql/template-strings */
import { useCallback, useReducer, useRef } from 'react';

import CryptoJs from 'crypto-js';
import encHex from 'crypto-js/enc-hex';
import { gql, useMutation } from '@apollo/client';

import { fileSize } from '../../../utils/format';

import { sleep } from '@/utils';

type UploadProgressEvent = {
  loaded: number;
  total: number;
};

type OnUploadProgress = (e: UploadProgressEvent) => void;

const addZeroLeft = function (text: string, length: number) {
  let result = text;
  if (result.length < length) {
    let i = result.length;
    while (i++ < length) {
      result = '0' + result;
      if (result.length == length) break;
    }
  }
  return result;
};

/**
 * 用于计算文件的hash值，包括sha256值和md5值
 */
async function hashFile(file: Blob) {
  const size = file.size;
  const offset = 2 * 1024 * 1024;

  const chunks = [file.slice(0, offset)];
  let cur = offset;

  while (cur < size) {
    if (cur + offset >= size) {
      chunks.push(file.slice(cur, cur + offset));
    } else {
      const mid = cur + offset / 2,
        end = cur + offset;
      chunks.push(file.slice(cur, cur + 2));
      chunks.push(file.slice(mid, mid + 2));
      chunks.push(file.slice(end - 2, end));
    }
    cur += offset;
  }

  const alog = CryptoJs.algo.MD5.create();

  function hashBlob(blob: Blob): Promise<void> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = ({ target }) => {
        const wordArray = CryptoJs.lib.WordArray.create((target as any).result);
        alog.update(wordArray);
        resolve();
      };
      reader.readAsArrayBuffer(blob);
    });
  }

  for (const chunk of chunks) {
    await hashBlob(chunk);
  }

  return encHex.stringify(alog.finalize());
}

function calculateUploadSpeed(
  e: UploadProgressEvent,
  stat: { oldTimestamp: number; oldLoadsize: number },
) {
  const timestamp = Date.now();
  const duration = timestamp - stat.oldTimestamp; // 间隔时间（毫秒）
  let bitrate = 0;
  if (duration > 0) {
    const _size = e.loaded - stat.oldLoadsize;
    bitrate = (_size / duration) * 1000; // kb
    stat.oldTimestamp = timestamp;
    stat.oldLoadsize = e.loaded;
  }
  return fileSize(bitrate);
}

const INITIATE_MULTIPART_UPLOAD = gql`
  mutation initiateMultipartUpload($input: MultipartUploadInput!) {
    multipartUpload: initiateMultipartUpload(input: $input) {
      id
      name
      path
      storage
      hash
      chunks {
        id
        hash
        etag
        size
        index
      }
    }
  }
`;

const MUTATION_UPLOAD = gql`
  mutation upload($file: Upload!, $options: UploadOptions) {
    upload(file: $file, options: $options) {
      id
      name
      path
      isDirectory
      size
      mimeType
      md5
    }
  }
`;

type UploadResult = {
  id: string;
  name: string;
  path: string;
  directory: boolean;
  size: number;
  mimeType: string;
  createdAt: string;
};

type UseUploadResult = [(file: File) => Promise<UploadResult>, UploadResult | undefined, number];

type UseUploadState = {
  data?: UploadResult;
  state: 'waiting' | 'uploading' | 'waitingForCompleted' | 'aborted' | 'Completed';
  progress: number;
  uploadSpeed: string;
};

type UploadOptions = {
  partSize?: number;
  folder?: string;
};

type UploadFileOptions = {
  space: string;
  folder?: string;
  uploadId?: string;
  hash?: string;
};

const DEFAULT_PART_SIZE = 1024 * 1024 * 50; // 按每 50M 分割文件

export const useUpload = (
  namespace: string = 'Default',
  options?: UploadOptions,
): UseUploadResult => {
  const { partSize = DEFAULT_PART_SIZE, folder } = options || ({} as UploadOptions);

  const abortController = useRef(new AbortController());
  const state = useRef<UseUploadState>({
    state: 'waiting',
    uploadSpeed: '0 KB',
    progress: 0,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [initiateMultipartUpload] = useMutation<{
    multipartUpload: {
      id: string;
      chunks: {
        hash: string;
        etag: string;
        size: number;
        index: number;
      }[];
    };
  }>(INITIATE_MULTIPART_UPLOAD);
  const [uploadFile] = useMutation(MUTATION_UPLOAD, {
    context: {
      fetchOptions: {
        signal: abortController.current.signal,
        onUploadProgress: (_progress: any) => {
          const percent = ((_progress.loaded / _progress.total) * 100) << 0;
          if (percent == 100) {
            state.current.progress = Math.max(state.current.progress, 85);
            return forceRender();
          }
          state.current.progress = percent;
          forceRender();
        },
      },
    },
  });

  const executeUploadFile = useCallback(
    async (file: File, _options: UploadFileOptions, onUploadProgress: OnUploadProgress) => {
      const { data } = await uploadFile({
        variables: {
          file,
          options: _options,
        },
        context: {
          fetchOptions: {
            signal: abortController.current.signal,
            onUploadProgress,
          },
        },
      });
      return data.upload;
    },
    [uploadFile],
  );

  const handleMultipartUpload = useCallback(
    async (file: File) => {
      const partLength = Math.ceil(file.size / partSize) + (file.size % partSize == 0 ? 0 : 1);

      console.log('文件分为:' + partLength + '段上传');

      const offset = partSize,
        size = file.size;

      const chunks = [file.slice(0, offset)];
      let cur = offset;
      while (cur < size) {
        console.log('xxx', cur, cur + offset);
        chunks.push(file.slice(cur, cur + offset));
        cur += offset;
      }

      const hash = await hashFile(file);

      const { data: multipartUploadData } = await initiateMultipartUpload({
        variables: {
          input: {
            name: file.name,
            hash,
            folder,
            space: namespace,
            chunkSize: offset,
            chunkLength: chunks.length,
          },
        },
      });

      const multipartUpload = multipartUploadData!.multipartUpload!;

      console.log('initiateMultipartUpload', multipartUpload);

      const stat = { loaded: 0, oldTimestamp: 0, oldLoadsize: 0 };

      let _upload;

      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        if (multipartUpload.chunks.some((item) => item.index == i + 1)) {
          console.log(file.name, '部分已经上传', i + 1);
          stat.loaded += chunk.size;
          continue;
        }

        const partHash = await hashFile(chunk);

        stat.oldLoadsize = 0;
        stat.oldTimestamp = Date.now();

        _upload = await executeUploadFile(
          new File([chunk], file.name + '.part' + addZeroLeft(String(i + 1), 5), {
            type: 'application/octet-stream',
            lastModified: new Date().getTime(),
          }),
          {
            space: namespace,
            uploadId: multipartUpload.id,
            hash: partHash,
          },
          (_progress) => {
            const _loaded = stat.loaded + _progress.loaded;
            const percent = ((_loaded / size) * 100) << 0;

            state.current.progress = percent;
            state.current.uploadSpeed = calculateUploadSpeed(_progress, stat);

            if (percent == 100) {
              state.current.state = 'waitingForCompleted';
            }

            forceRender();
          },
        );

        stat.loaded += chunk.size;

        console.log('hashFile', partHash);
        console.timeEnd('开始MD5' + i);
      }

      state.current.data = _upload;
      state.current.state = 'Completed';

      forceRender();

      return _upload;
    },
    [executeUploadFile, folder, initiateMultipartUpload, namespace, partSize],
  );

  const handleOrdinaryUpload = useCallback(
    async (file: File) => {
      const stat = { oldTimestamp: 0, oldLoadsize: 0 };
      const _upload = await executeUploadFile(
        file,
        {
          space: namespace,
          folder,
        },
        (e) => {
          const percent = ((e.loaded / e.total) * 100) << 0;

          state.current.progress = percent;
          state.current.uploadSpeed = calculateUploadSpeed(e, stat);

          if (percent == 100) {
            state.current.state = 'waitingForCompleted';
          }

          forceRender();
        },
      );

      state.current.data = _upload;
      state.current.state = 'Completed';

      forceRender();

      return _upload;
    },
    [executeUploadFile, folder, namespace],
  );

  const handleUpload = useCallback(
    async (file: File, overwrites?: UploadOptions): Promise<UploadResult> => {
      // TODO:  支持通过 overwrites 覆盖默认选项

      console.log(overwrites);

      state.current.data = undefined;
      state.current.state = 'waiting';
      state.current.progress = 0;
      await sleep(60);

      if (file.size > partSize) {
        return await handleMultipartUpload(file);
      } else {
        return await handleOrdinaryUpload(file);
      }
    },
    [partSize, handleMultipartUpload, handleOrdinaryUpload],
  );

  return [handleUpload, state.current.data, state.current.progress];
};
