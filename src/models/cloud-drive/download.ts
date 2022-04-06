import { useCallback, useMemo, useReducer, useRef } from 'react';

import saveAs from 'file-saver';
import { debounce, merge } from 'lodash';

import { networkSpeed } from '@/pages/Metronic/components/utils';
import { sleep } from '@/utils';

type OnDownloadProgress = (e: DownloadProgressEvent) => void;

export type BrokenFile = {
  url: string;
  /**
   * 文件名称
   */
  name?: string;
  /**
   * 总大小
   */
  size: number;
  /**
   * 已下载的长度
   */
  loaded: number;
  /**
   * 已下载的内容
   */
  chunks: Uint8Array[];
  /**
   * 过期
   */
  expires: string | null;
  /**
   * 最后编辑日期
   */
  lastModified: string | null;
  /**
   * 资源标识符
   */
  etag: string | null;
};

// type ResourceURL = {
//   url: string;
//   path: string;
// };

export interface DownloadCache {
  put: (url: string, file: BrokenFile) => Promise<void>;
  get: (url: string) => Promise<BrokenFile | undefined>;
  delete: (url: string) => Promise<boolean>;
}

class DownloadCacheInMemory implements DownloadCache {
  private files = new Map<string, BrokenFile>();

  async put(url: string, file: BrokenFile) {
    console.log('断点下载 - 缓存:', url);
    this.files.set(url, file);
  }

  async get(url: string) {
    console.log('断点下载 - 获取缓存:', url);
    return this.files.get(url);
  }

  async delete(url: string) {
    console.log('断点下载 - 删除缓存:', url);
    return this.files.delete(url);
  }
}

const FILENAME_REGEX_DISPOSITION = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;

const DEFAULT_DOWNLOAD_CACHE = new DownloadCacheInMemory();

type DownloadFetchOptions = RequestInit & {
  cache?: DownloadCache;
  onDownloadProgress?: OnDownloadProgress;
};

const getFilename = (disposition: string) => {
  const matches = FILENAME_REGEX_DISPOSITION.exec(disposition);
  if (matches != null && matches[1]) {
    return matches[1].replace(/['"]/g, '');
  }
  return undefined;
};

const getRange = (contentRange: string) => {
  const matches = /^([^ ]+) ([\d]+)-([\d]+)\/([\S]+)$/.exec(contentRange);
  if (matches != null) {
    return {
      unit: matches[1],
      start: parseInt(matches[2]),
      end: parseInt(matches[3]),
      size: matches[4],
    };
  }
  return undefined;
};

async function downloadFetch(url: string, options?: DownloadFetchOptions) {
  const {
    cache = DEFAULT_DOWNLOAD_CACHE,
    onDownloadProgress,
    ..._options
  } = options || { headers: {} as any };

  const brokenFile = cache && (await cache.get(url));
  const chunks: Uint8Array[] = [];
  let receivedLength = 0; // 当前接收到了这么多字节
  let size;

  if (brokenFile) {
    receivedLength = brokenFile.loaded;
    size = brokenFile.size;
    _options.headers = _options.headers || {};
    _options.headers.Range = `bytes=${receivedLength}-`;
    brokenFile.etag && (_options.headers['If-None-Match'] = brokenFile.etag);
    brokenFile.lastModified && (_options.headers['If-Modified-Since'] = brokenFile.lastModified);
    chunks.push(...brokenFile.chunks);
  }

  const response = await fetch(url, _options);

  const disposition = response.headers.get('Content-Disposition');

  const contentLength = size || parseInt(response.headers.get('Content-Length')!, 10);
  const contentRange = response.headers.get('Content-Range')!;
  const contentType = response.headers.get('Content-Type')!;
  const acceptRanges = response.headers.get('Accept-Ranges');
  const lastModified = response.headers.get('Last-Modified');
  const expires = response.headers.get('Expires');
  const etag = response.headers.get('ETag');

  // 虽然使用了分段下载，但如果响应数据依然从 0 开始，表示数据发送变化，需要重新下载
  const range = getRange(contentRange);
  if (range && receivedLength && receivedLength != range.start) {
    chunks.length = 0;
    receivedLength = range.start;
  }

  const isAcceptRanges = acceptRanges == 'bytes';

  const downloadFile = async () => {
    try {
      const reader = response.body!.getReader();

      onDownloadProgress &&
        onDownloadProgress({ loaded: Math.max(receivedLength, 1), total: contentLength });

      let percent = 0;
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        chunks.push(value);
        receivedLength += value.length;

        const nextPercent = Math.round((receivedLength * 100) / contentLength);

        if (isAcceptRanges && cache && percent != nextPercent) {
          percent = nextPercent;

          cache.put(url, {
            url,
            name: disposition ? getFilename(disposition) : '',
            loaded: receivedLength,
            size: contentLength,
            chunks,
            expires,
            lastModified,
            etag,
          });
        }

        onDownloadProgress && onDownloadProgress({ total: contentLength, loaded: receivedLength });
      }

      const index = contentType.indexOf(';');
      const mimeType = index == -1 ? contentType : contentType.substring(0, index);

      if (isAcceptRanges && cache) {
        cache.delete(url);
      }

      return {
        url,
        name: disposition ? getFilename(disposition) : '',
        mimeType,
        size: contentLength,
        data: new Blob(chunks),
      };
    } catch (e) {
      if (isAcceptRanges && cache) {
        cache.put(url, {
          url,
          name: disposition ? getFilename(disposition) : '',
          loaded: receivedLength,
          size: contentLength,
          chunks,
          expires,
          lastModified,
          etag,
        });
      }
      throw e;
    }
  };

  const responseWrapper = new Proxy(response, {
    get(targetObj, property) {
      if (property == 'file') {
        return downloadFile;
      }
      if (property == 'chunks') {
        return chunks;
      }
      if (property == 'chunks') {
        return chunks;
      }
      return targetObj[property];
    },
  });

  return responseWrapper;
}

type DownloadProgressEvent = {
  loaded: number;
  total: number;
};

type DownloadOptions = {
  saveAs: string | boolean;
  fetchOptions?: DownloadFetchOptions;
};

const DEFAULT_DOWNLOAD_FETCH_OPTIONS: DownloadOptions = {
  saveAs: true,
  fetchOptions: {
    headers: {},
  },
};

export async function download(url: string, options?: DownloadOptions) {
  const _options = merge({ ...DEFAULT_DOWNLOAD_FETCH_OPTIONS }, options);
  // console.log('download', url, _options);

  const onDownloadProgress = _options.fetchOptions?.onDownloadProgress;

  if (_options.fetchOptions && onDownloadProgress) {
    _options.fetchOptions.onDownloadProgress = debounce(onDownloadProgress, 600, {
      leading: true,
      maxWait: 600,
    });
  }

  let response;
  try {
    response = await downloadFetch(url, _options.fetchOptions);

    const file: DownloadFileData = await (response as any).file();

    if (options?.saveAs) {
      if (options.saveAs === true) {
        saveAs(file.data, file.name || 'download.bin');
      } else {
        saveAs(file.data, options.saveAs);
      }
    }

    return file;
  } catch (e) {
    if (response) {
      (e as any).response = response;
    }
    if ((e as Error).name != 'AbortError' && (e as Error).message == 'canceled') {
      (e as Error).name = 'AbortError';
    }
    throw e;
  }
}

export type DownloadState =
  | 'waiting'
  | 'downloading'
  | 'waitingForCompleted'
  | 'aborted'
  | 'completed'
  | 'error';

type DownloadController = { abort: () => void };

export type DownloadFileData = {
  url: string;
  name: string;
  mimeType: string;
  size: number;
  data: Blob;
};

type DownloadResult = {
  data?: DownloadFileData;
  error?: Error;
  state: DownloadState;
  size: number;
  progress: number;
  downloadSpeed: string;
  downloading: boolean;
  abort: () => void;
};

type DownloadOverwriteOptions = DownloadOptions;

type UseDownloadResult = [
  (url: string, overwrites?: DownloadOverwriteOptions) => Promise<DownloadFileData>,
  DownloadResult,
];

type UseDownloadState = {
  data?: DownloadFileData;
  error?: Error;
  size: number;
  state: DownloadState;
  progress: number;
  downloadSpeed: string;
};

type UseDownloadOptions = {
  cache?: DownloadCache;
};

export const useDownload = ({
  cache = DEFAULT_DOWNLOAD_CACHE,
}: UseDownloadOptions = {}): UseDownloadResult => {
  const abortController = useRef(new AbortController());
  const state = useRef<UseDownloadState>({
    state: 'waiting',
    downloadSpeed: '0 KB',
    progress: 0,
    size: 0,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const downloadController = useMemo<DownloadController>(
    () => ({
      abort: () => {
        abortController.current.abort();
        state.current.state = 'aborted';
      },
    }),
    [],
  );

  const executeDownloadFile = useCallback((url: string, options: DownloadOptions) => {
    if (abortController.current.signal.aborted) {
      throw new Error('canceled');
    }
    return download(url, options);
  }, []);

  // TODO: 多个文件下载后压缩 - 1.合并在一个目录 2.多个目录
  // const handleZipDownload = useCallback(async (resources: ResourceURL[]) => {
  //   console.log(resources);
  //   throw new Error('暂不支持');
  //   return {} as DownloadFileData;
  // }, []);

  const handleOrdinaryDownload = useCallback(
    async (url: string, options: DownloadOptions) => {
      const stat = { oldTimestamp: Date.now(), oldLoadsize: 0 };

      abortController.current = new AbortController();

      options.fetchOptions!.signal = abortController.current.signal;
      options.fetchOptions!.onDownloadProgress = (e: DownloadProgressEvent) => {
        const percentage = Math.round((e.loaded * 100) / e.total);

        if (['completed', 'aborted', 'error'].includes(state.current.state)) {
          return;
        }

        state.current.progress = Math.max(percentage, 1);
        state.current.downloadSpeed = networkSpeed(e, stat);
        state.current.size = e.total;

        if (percentage == 100 && state.current.state == 'downloading') {
          state.current.state = 'waitingForCompleted';
          forceRender();
        } else if (percentage != 100) {
          state.current.state = 'downloading';
          forceRender();
        }
      };

      const _download = await executeDownloadFile(url, options);

      state.current.data = _download;
      state.current.state = 'completed';

      forceRender();

      return _download;
    },
    [executeDownloadFile],
  );

  const handleDownload = useCallback(
    async (url: string, overwrites?: DownloadOverwriteOptions) => {
      const options = merge(
        {
          fetchOptions: {
            cache,
          },
        },
        overwrites,
      );

      const cacheItem = await cache.get(url);

      state.current.data = undefined;
      state.current.error = undefined;
      state.current.state = 'waiting';
      state.current.downloadSpeed = '';
      state.current.progress = cacheItem
        ? Math.round((cacheItem.loaded * 100) / cacheItem.size)
        : 0;
      state.current.size = cacheItem ? cacheItem.size : 0;
      forceRender();
      await sleep(60);

      try {
        // if (!Array.isArray(urls)) {
        return handleOrdinaryDownload(url, options);
        // } else {
        //   const resources: ResourceURL[] = urls.map((url) => {
        //     if (typeof url == 'string') {
        //       return { url, path: '/' };
        //     }
        //     return url;
        //   });
        //   return handleZipDownload(resources);
        // }
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
    [cache, handleOrdinaryDownload],
  );

  const {
    data: dataFile,
    progress,
    state: downloadState,
    downloadSpeed,
    error,
    size,
  } = state.current;

  const result = useMemo<DownloadResult>(
    () => ({
      data: dataFile,
      progress,
      downloadSpeed,
      error,
      size,
      downloading: downloadState == 'downloading' || downloadState == 'waitingForCompleted',
      state: downloadState,
      abort: downloadController.abort,
    }),
    [dataFile, progress, downloadSpeed, error, size, downloadState, downloadController.abort],
  );

  return [handleDownload, result];
};
