/* eslint-disable graphql/template-strings */
import { useCallback, useMemo, useReducer, useRef } from 'react';

import CryptoJs from 'crypto-js';
import encHex from 'crypto-js/enc-hex';
import { gql, useMutation } from '@apollo/client';
import { debounce } from 'lodash';

import { networkSpeed } from '../../../utils';

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

const INITIATE_MULTIPART_UPLOAD = gql`
  mutation initiateMultipartUpload($input: MultipartUploadInput!) {
    multipartUpload: initiateMultipartUpload(input: $input) {
      id
      path
      hash
      space
      storage
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
      etag
      parentFolder {
        id
      }
    }
  }
`;

const COMPLETE_MULTIPART_UPLOAD = gql`
  mutation completeMultipartUpload($id: ID!, $name: String!, $folder: ID) {
    upload: completeMultipartUpload(id: $id, name: $name, folder: $folder) {
      id
      name
      path
      isDirectory
      size
      mimeType
      etag
      parentFolder {
        id
      }
    }
  }
`;

export type UploadFileData = {
  id: string;
  name: string;
  path: string;
  directory: boolean;
  size: number;
  mimeType: string;
  createdAt: string;
  parentFolder: {
    id: string;
  };
};

type UploadController = { abort: () => void };

type UploadResult = {
  data?: UploadFileData;
  error?: Error;
  state: UploadState;
  progress: number;
  uploadSpeed: string;
  uploading: boolean;
  abort: () => void;
};

type UseUploadResult = [
  (file: File, overwrites?: UploadOverwriteOptions) => Promise<UploadFileData>,
  UploadResult,
];

export type UploadState =
  | 'waiting'
  | 'uploading'
  | 'waitingForCompleted'
  | 'aborted'
  | 'completed'
  | 'error';

type UseUploadState = {
  data?: UploadFileData;
  error?: Error;
  state: UploadState;
  progress: number;
  uploadSpeed: string;
  options: UploadOptions;
};

type UploadOptions = {
  space?: string;
  partSize?: number;
  folder?: string;
};

type UploadOverwriteOptions = {
  space?: string;
  partSize?: number;
  folder?: string;
};

type UploadFileOptions = {
  space?: string;
  folder?: string;
  uploadId?: string;
  hash?: string;
};

const DEFAULT_PART_SIZE = 1024 * 1024 * 50; // 按每 50M 分割文件

const DEFAULT_OPTIONS = { partSize: DEFAULT_PART_SIZE, space: 'Default' };

function throwAbortError() {
  const _error = new Error('canceled');
  _error.name = 'AbortError';
  throw _error;
}

export const useUpload = (options: UploadOptions): UseUploadResult => {
  const abortController = useRef(new AbortController());
  const state = useRef<UseUploadState>({
    state: 'waiting',
    uploadSpeed: '0 KB',
    progress: 0,
    options: { ...DEFAULT_OPTIONS, ...options },
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.options = { ...DEFAULT_OPTIONS, ...options };

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
  const [completeMultipartUpload] = useMutation<{
    upload: UploadFileData;
  }>(COMPLETE_MULTIPART_UPLOAD);
  const [uploadFile] = useMutation(MUTATION_UPLOAD);

  const executeUploadFile = useCallback(
    async (file: File, _options: UploadFileOptions, onUploadProgress: OnUploadProgress) => {
      if (!_options.space) {
        throw new Error('存储空间为空');
      }
      if (abortController.current.signal.aborted) {
        throw new Error('canceled');
      }
      try {
        const { data } = await uploadFile({
          variables: {
            file,
            options: _options,
          },
          context: {
            fetchOptions: {
              signal: abortController.current.signal,
              onUploadProgress: debounce(onUploadProgress, 600, {
                leading: true,
                maxWait: 600,
              }),
            },
          },
        });
        return data.upload;
      } catch (e) {
        if ((e as Error).name != 'AbortError' && (e as Error).message == 'canceled') {
          (e as Error).name = 'AbortError';
        }
        throw e;
      }
    },
    [uploadFile],
  );

  const handleMultipartUpload = useCallback(
    async (file: File, _options: UploadOptions) => {
      const { space, folder } = _options;
      const partSize = _options.partSize!;

      const offset = partSize,
        size = file.size;

      abortController.current = new AbortController();

      const chunks = [file.slice(0, offset)];
      let cur = offset;
      while (cur < size) {
        if (abortController.current.signal.aborted) {
          throwAbortError();
        }
        chunks.push(file.slice(cur, cur + offset));
        cur += offset;
      }

      const hash = await hashFile(file);

      if (abortController.current.signal.aborted) {
        throwAbortError();
      }

      const { data: multipartUploadData } = await initiateMultipartUpload({
        variables: {
          input: {
            hash,
            space,
            chunkSize: offset,
            chunkLength: chunks.length,
            metadata: {
              size,
              mimeType: file.type,
            },
          },
        },
      });

      if (abortController.current.signal.aborted) {
        throwAbortError();
      }

      const multipartUpload = multipartUploadData!.multipartUpload!;

      const stat = { loaded: 0, oldTimestamp: Date.now(), oldLoadsize: 0 };

      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        if (multipartUpload.chunks.some((item) => item.index == i + 1)) {
          // console.log(file.name, '部分已经上传', i + 1);
          stat.loaded += chunk.size;
          continue;
        }

        const partHash = await hashFile(chunk);

        if (abortController.current.signal.aborted) {
          throwAbortError();
        }

        stat.oldLoadsize = 0;
        stat.oldTimestamp = Date.now();

        abortController.current = new AbortController();
        await executeUploadFile(
          new File([chunk], file.name + '.part' + addZeroLeft(String(i + 1), 5), {
            type: 'application/octet-stream',
            lastModified: new Date().getTime(),
          }),
          {
            space,
            uploadId: multipartUpload.id,
            hash: partHash,
          },
          (_progress) => {
            const _loaded = stat.loaded + _progress.loaded;
            const percent = ((_loaded / size) * 100) << 0;

            if (['completed', 'aborted', 'error'].includes(state.current.state)) {
              return;
            }

            state.current.progress = Math.max(percent, 1);
            state.current.uploadSpeed = networkSpeed(_progress, stat);

            if (percent == 100 && state.current.state == 'uploading') {
              state.current.state = 'waitingForCompleted';
              forceRender();
            } else if (percent != 100) {
              state.current.state = 'uploading';
              forceRender();
            }
          },
        );

        stat.loaded += chunk.size;
      }

      const { data: xdata } = await completeMultipartUpload({
        variables: {
          id: multipartUpload.id,
          name: file.name,
          folder,
        },
      });

      state.current.data = xdata!.upload;
      state.current.state = 'completed';

      forceRender();

      return state.current.data;
    },
    [completeMultipartUpload, executeUploadFile, initiateMultipartUpload],
  );

  const handleOrdinaryUpload = useCallback(
    async (file: File, _options: UploadOptions) => {
      const { space, folder } = _options;

      const stat = { oldTimestamp: Date.now(), oldLoadsize: 0 };
      abortController.current = new AbortController();
      const _upload = await executeUploadFile(
        file,
        {
          space,
          folder,
        },
        (e) => {
          const percent = ((e.loaded / e.total) * 100) << 0;

          if (['completed', 'aborted', 'error'].includes(state.current.state)) {
            return;
          }

          state.current.progress = Math.max(percent, 1);
          state.current.uploadSpeed = networkSpeed(e, stat);

          if (percent == 100 && state.current.state == 'uploading') {
            state.current.state = 'waitingForCompleted';
            forceRender();
          } else if (percent != 100) {
            state.current.state = 'uploading';
            forceRender();
          }
        },
      );

      state.current.data = _upload;
      state.current.state = 'completed';

      forceRender();

      return _upload;
    },
    [executeUploadFile],
  );

  const handleUpload = useCallback(
    async (file: File, overwrites?: UploadOverwriteOptions): Promise<UploadFileData> => {
      const _options = { ...state.current.options, ...overwrites };

      const { partSize } = _options;

      state.current.data = undefined;
      state.current.error = undefined;
      state.current.state = 'waiting';
      state.current.uploadSpeed = '';
      state.current.progress = 0;
      forceRender();
      await sleep(60);

      try {
        if (file.size > partSize!) {
          return await handleMultipartUpload(file, _options);
        } else {
          return await handleOrdinaryUpload(file, _options);
        }
      } catch (e) {
        if ((e as Error).name == 'AbortError') {
          state.current.state = 'aborted';
          forceRender();
        } else {
          state.current.state = 'error';
          state.current.error = e as Error;
          forceRender();
        }
        throw e;
      }
    },
    [handleMultipartUpload, handleOrdinaryUpload],
  );

  const uploadController = useMemo<UploadController>(
    () => ({
      abort: () => {
        abortController.current.abort();
        state.current.state = 'aborted';
      },
    }),
    [],
  );

  const { data: dataFile, progress, state: uploadState, uploadSpeed, error } = state.current;

  const result = useMemo<UploadResult>(
    () => ({
      data: dataFile,
      progress,
      uploadSpeed,
      error,
      uploading: uploadState == 'uploading' || uploadState == 'waitingForCompleted',
      state: uploadState,
      abort: uploadController.abort,
    }),
    [dataFile, progress, uploadSpeed, uploadController.abort, error, uploadState],
  );

  return [handleUpload, result];
};
