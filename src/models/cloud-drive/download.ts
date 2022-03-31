import { useCallback, useMemo, useReducer, useRef } from 'react';

import { buildAxiosFetch } from '@lifeomic/axios-fetch';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import saveAs from 'file-saver';
import { debounce, merge } from 'lodash';

import { networkSpeed } from '@/pages/Metronic/components/utils';

const fetch = buildAxiosFetch(axios, (config, input, init) => ({
  ...config,
  signal: init.signal,
  onUploadProgress: init.onUploadProgress,
  onDownloadProgress: init.onDownloadProgress,
}));

type DownloadProgressEvent = {
  loaded: number;
  total: number;
};

type DownloadFetchOptions = {
  saveAs: string | boolean;
  fetchOptions?: AxiosRequestConfig;
};

const DEFAULT_DOWNLOAD_FETCH_OPTIONS: DownloadFetchOptions = {
  saveAs: true,
};

export async function download(url: string, options?: DownloadFetchOptions) {
  const _options = merge({ ...DEFAULT_DOWNLOAD_FETCH_OPTIONS }, options);
  console.log('download', url, _options);

  const onDownloadProgress = _options.fetchOptions?.onDownloadProgress;

  if (_options.fetchOptions && onDownloadProgress) {
    _options.fetchOptions.onDownloadProgress = debounce(onDownloadProgress, 600, {
      leading: true,
      maxWait: 600,
    });
  }

  try {
    const response = await fetch(url, _options.fetchOptions);

    console.log('response', response.headers);

    const content = (await response.blob()) as Blob;

    console.log('content', response.headers);

    if (options?.saveAs) {
      if (options?.saveAs === true) {
        //  TODO: 通过响应头中的信息，设置 saveAs 信息
        debugger;
      } else {
        saveAs(content, options.saveAs);
      }
    }

    return {
      name: 'xx',
      size: 0,
      mimeType: '',
      content,
    };
  } catch (e) {
    console.log((e as any).response);
    debugger;
    console.log(e);
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
  name: string;
  mimeType: string;
  content: Blob;
  size: number;
};

type DownloadResult = {
  data?: DownloadFileData;
  error?: Error;
  state: DownloadState;
  progress: number;
  downloadSpeed: string;
  downloading: boolean;
  abort: () => void;
};

type DownloadOverwriteOptions = DownloadFetchOptions;

type UseDownloadResult = [
  (url: string | string[], overwrites?: DownloadOverwriteOptions) => Promise<DownloadFileData>,
  DownloadResult,
];

type UseDownloadState = {
  data?: DownloadFileData;
  error?: Error;
  state: DownloadState;
  progress: number;
  downloadSpeed: string;
};

export const useDownload = (): UseDownloadResult => {
  const abortController = useRef(new AbortController());
  const state = useRef<UseDownloadState>({
    state: 'waiting',
    downloadSpeed: '0 KB',
    progress: 0,
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

  const executeDownloadFile = useCallback((url: string, options: DownloadFetchOptions) => {
    try {
      if (abortController.current.signal.aborted) {
        throw new Error('canceled');
      }
      return download(url, options);
    } catch (e) {
      if ((e as Error).name == 'AbortError') {
        state.current.state = 'aborted';
        (e as Error).name = 'AbortError';
        forceRender();
      } else {
        state.current.state = 'error';
        state.current.error = e as Error;
        forceRender();
      }
      throw e;
    }
  }, []);

  const handleDownload = useCallback(
    async (urls: string | string[], overwrites?: DownloadOverwriteOptions) => {
      let url;
      if (Array.isArray(urls)) {
        if (urls.length > 1) {
          throw new Error('暂不支持多文件合并');
        }
        url = urls[0];
      } else {
        url = urls;
      }
      abortController.current = new AbortController();
      const stat = { oldTimestamp: Date.now(), oldLoadsize: 0 };
      const options = merge(
        {
          fetchOptions: {
            signal: abortController.current.signal,
            onDownloadProgress: (e: DownloadProgressEvent) => {
              const percentage = Math.round((e.loaded * 100) / e.total);

              state.current.progress = Math.max(percentage, 1);
              state.current.downloadSpeed = networkSpeed(e, stat);

              forceRender();
            },
          },
        },
        overwrites,
      );
      return executeDownloadFile(url, options);
    },
    [executeDownloadFile],
  );

  const { data: dataFile, progress, state: downloadState, downloadSpeed, error } = state.current;

  const result = useMemo<DownloadResult>(
    () => ({
      data: dataFile,
      progress,
      downloadSpeed,
      error,
      downloading: downloadState == 'downloading' || downloadState == 'waitingForCompleted',
      state: downloadState,
      abort: downloadController.abort,
    }),
    [dataFile, progress, downloadSpeed, error, downloadState, downloadController.abort],
  );

  return [handleDownload, result];
};
