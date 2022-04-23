import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import EventEmitter from 'events';

import saveAs from 'file-saver';

import database from './TransferDatabase';
import type { CloudDriveState, DownloadFile, UploadFile } from './typings';
import type { DownloadFileData, DownloadState } from './download';
import { useDownload } from './download';

import { useUpload } from '@/components/Metronic/hooks';
import type {
  UploadFileData,
  UploadState,
} from '@/components/Metronic/components/forms/Upload/utils/upload';
import type { CloudDrive, FileObject } from '@/types';

const initialState = {
  visibleTransfers: false,
  driveId: '',
  uploadFiles: [],
  downloadFiles: [],
};

const EVENT_NAME_OF_UPLOADFILE_CHANGE = 'UPLOADFILE_CHANGE';
const EVENT_NAME_OF_DOWNLOADFILE_CHANGE = 'DOWNLOADFILE_CHANGE';

const EVENT_NAME_OF_UPLOADFILE_DATA_RELOADED = 'UPLOADFILE_DATA_RELOADED';
const EVENT_NAME_OF_DOWNLOADFILE_DATA_RELOADED = 'DOWNLOADFILE_DATA_RELOADED';

const FILEOBJECT_DOWNLOAD_URL = process.env.STORAGE_URL + '/download';

export * from './typings';

export default function useCloudDriveModel() {
  const [emitter] = useState(new EventEmitter());

  const internalState = useRef<{
    uploadFileId?: string;
    uploading: boolean;
    downloadFileId?: string;
    downloading: boolean;
  }>({
    uploading: false,
    downloading: false,
  });

  const state = useRef<CloudDriveState>(initialState);
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleSetCloudDrive = useCallback((cloudDrive: CloudDrive) => {
    state.current.driveId = cloudDrive.id;
    state.current.cloudDrive = cloudDrive;
    forceRender();
  }, []);

  const reloadUploadFiles = useCallback(async () => {
    const value = await database.uploadFiles();
    state.current.uploadFiles = value;
    forceRender();

    emitter.emit(EVENT_NAME_OF_UPLOADFILE_DATA_RELOADED);
  }, [emitter]);

  const reloadDownloadFiles = useCallback(async () => {
    const value = await database.downloadFiles();
    state.current.downloadFiles = value;
    forceRender();

    emitter.emit(EVENT_NAME_OF_DOWNLOADFILE_DATA_RELOADED);
  }, [emitter]);

  useEffect(() => {
    emitter.on(EVENT_NAME_OF_UPLOADFILE_CHANGE, reloadUploadFiles);
    emitter.on(EVENT_NAME_OF_DOWNLOADFILE_CHANGE, reloadDownloadFiles);

    const timer = setTimeout(() => {
      reloadUploadFiles();
      reloadDownloadFiles();
    }, 5000);

    return () => {
      clearTimeout(timer);
      emitter.off(EVENT_NAME_OF_UPLOADFILE_CHANGE, reloadUploadFiles);
      emitter.off(EVENT_NAME_OF_DOWNLOADFILE_CHANGE, reloadDownloadFiles);
    };
  }, [emitter, reloadDownloadFiles, reloadUploadFiles]);

  const updateUploadFile = useCallback(
    async (
      file: UploadFile,
      {
        progress,
        uploadState,
        uploadSpeed,
        result,
        error,
      }: {
        progress?: number;
        uploadSpeed?: string;
        uploadState: UploadState;
        result?: UploadFileData;
        error?: Error;
      },
    ) => {
      console.log('upload 上传进度', progress, uploadState, uploadSpeed);

      const newFile = { ...file };

      uploadSpeed && (newFile.uploadSpeed = uploadSpeed);
      progress && (newFile.progress = progress);

      let newState = newFile.state;
      if (['waiting', 'uploading', 'waitingForCompleted'].includes(uploadState)) {
        newState = 'uploading';
        newFile.error = undefined;
      } else if (uploadState == 'completed') {
        newState = 'completed';
        newFile.progress = 100;
      } else if (uploadState == 'error') {
        newState = 'error';
        newFile.error = error;
      } else if (uploadState == 'aborted') {
        newFile.error = undefined;
      }

      if (newState != newFile.state) {
        newFile.state = newState;
        result && (newFile.result = result);
        database.updateUploadFile(newFile.id!, newFile);
      }

      state.current.uploadFiles = state.current.uploadFiles.map((item) =>
        item.id == newFile.id ? newFile : item,
      );
      forceRender();
    },
    [],
  );

  const updateDownloadFile = useCallback(
    (
      id: string,
      {
        downloadState,
        downloadSpeed,
        size,
        progress,
        result,
        error,
      }: {
        downloadState: DownloadState;
        downloadSpeed?: string;
        size?: number;
        result?: DownloadFileData;
        progress?: number;
        error?: Error;
      },
    ) => {
      const file = state.current.downloadFiles.find((item) => item.id == id)!;
      // console.log(downloadState, result, file, error);

      const newFile = { ...file };

      downloadSpeed && (newFile.downloadSpeed = downloadSpeed);
      progress && (newFile.progress = progress);
      size && (newFile.size = size);

      let newState = newFile.state;
      if (['waiting', 'downloading', 'waitingForCompleted'].includes(downloadState)) {
        newState = 'downloading';
        newFile.error = undefined;
      } else if (downloadState == 'completed') {
        newState = 'completed';
        newFile.progress = 100;
      } else if (downloadState == 'error') {
        newState = 'error';
        newFile.error = error;
      } else if (downloadState == 'aborted') {
        newFile.error = undefined;
      }

      if (newState != newFile.state) {
        newFile.state = newState;
        result && (newFile.result = result);
        database.updateDownloadFile(newFile.id!, newFile);
      }

      state.current.downloadFiles = state.current.downloadFiles.map((item) =>
        item.id == newFile.id ? newFile : item,
      );
      forceRender();
    },
    [],
  );

  const [
    download,
    {
      progress: downloadProgress,
      state: downloadState,
      downloading,
      size: downloadFileSize,
      downloadSpeed,
      error: downloadError,
      abort: downloadAbort,
    },
  ] = useDownload();
  const [
    upload,
    {
      progress: uploadProgress,
      state: uploadState,
      uploading,
      uploadSpeed,
      error: uploadError,
      abort: uploadAbort,
    },
  ] = useUpload({
    space: state.current.cloudDrive?.space,
  });

  internalState.current.uploading = uploading;
  internalState.current.downloading = downloading;

  // console.log('upload uploading ->', uploading, progress, uploadState, uploadSpeed);
  // console.log('download info ->', downloadData, downloading, downloadProgress, downloadState, downloadSpeed, uploadError);

  useEffect(() => {
    const file = state.current.uploadFiles.find(
      (item) => item.id == internalState.current.uploadFileId,
    );
    if (file == null) {
      return;
    }
    updateUploadFile(file, {
      progress: uploadProgress,
      uploadState,
      uploadSpeed,
      error: uploadError,
    });
  }, [uploadProgress, uploadState, uploadSpeed, updateUploadFile, uploadError]);

  const autoUpload = useCallback(async () => {
    if (internalState.current.uploading) {
      return;
    }

    let file = state.current.uploadFiles.find((item) =>
      ['waiting', 'uploading'].includes(item.state),
    );

    while (!!file) {
      internalState.current.uploadFileId = file.id;

      const fileId = file?.id;

      await updateUploadFile(file, { uploadState: 'uploading' });

      try {
        const uploadFile = await upload(file.source, file.uploadOptions);

        await updateUploadFile(file, {
          uploadState: 'completed',
          result: uploadFile,
        });
      } catch (e) {
        const _error = e as Error;

        console.log('上传出现异常', e);

        await updateUploadFile(state.current.uploadFiles.find((item) => item.id == fileId)!, {
          uploadState: _error.name == 'AbortError' ? 'aborted' : 'error',
          error: _error,
        });
      }

      file = state.current.uploadFiles
        .filter((item) => item.id != fileId)
        .find((item) => ['waiting', 'uploading'].includes(item.state));
    }

    internalState.current.uploadFileId = undefined;
  }, [updateUploadFile, upload]);

  useEffect(() => {
    emitter.on(EVENT_NAME_OF_UPLOADFILE_DATA_RELOADED, autoUpload);
    return () => {
      emitter.off(EVENT_NAME_OF_UPLOADFILE_DATA_RELOADED, autoUpload);
    };
  }, [autoUpload, emitter]);

  const handleUploadFile = useCallback(
    async (
      files: File[],
      options: {
        space: string;
        folder: string;
      },
    ) => {
      console.log('upload files', files);

      const space = '292eb203e6444c2287b545d8afbc7cee';
      const folder = options.folder;

      const _uploadFiles = files.map((file) => {
        const lastIndex = file.name.lastIndexOf('.');
        const uploadFile: UploadFile = {
          source: file,
          size: file.size,
          state: 'waiting',
          name: file.name,
          extension: lastIndex == -1 ? undefined : file.name.substring(lastIndex + 1),
          mimeType: file.type,
          progress: 0,
          uploadSpeed: '',
          uploadOptions: {
            space,
            folder,
          },
        };
        return uploadFile;
      });

      await database.addUploadFiles(_uploadFiles);

      emitter.emit(EVENT_NAME_OF_UPLOADFILE_CHANGE);

      state.current.visibleTransfers = true;
      forceRender();
    },
    [emitter],
  );

  useEffect(() => {
    const file = state.current.downloadFiles.find(
      (item) => item.id == internalState.current.downloadFileId,
    );
    if (file == null) {
      return;
    }
    updateDownloadFile(file.id!, {
      progress: downloadProgress,
      downloadState,
      size: downloadFileSize,
      downloadSpeed,
      error: downloadError,
    });
  }, [
    downloadProgress,
    downloadState,
    downloadSpeed,
    updateDownloadFile,
    downloadError,
    downloadFileSize,
  ]);

  const autoDownload = useCallback(async () => {
    if (internalState.current.downloading) {
      return;
    }

    let file = state.current.downloadFiles.find((item) =>
      ['waiting', 'downloading'].includes(item.state),
    );

    while (!!file) {
      internalState.current.downloadFileId = file.id;

      const fileId = file?.id;

      await updateDownloadFile(fileId!, { downloadState: 'downloading' });

      try {
        const url = FILEOBJECT_DOWNLOAD_URL + '?fidlist=' + file.chunks.map((f) => f.id).join(',');

        const _downloadFileData = await download(url, { saveAs: file.name });

        await updateDownloadFile(fileId!, {
          downloadState: 'completed',
          result: _downloadFileData,
        });
      } catch (e) {
        const _error = e as Error;

        console.log('下载出现异常', e);

        await updateDownloadFile(fileId!, {
          downloadState: _error.name == 'AbortError' ? 'aborted' : 'error',
          error: _error,
        });
      }

      file = state.current.downloadFiles
        .filter((item) => item.id != fileId)
        .find((item) => ['waiting', 'uploading'].includes(item.state));
    }

    internalState.current.uploadFileId = undefined;
  }, [updateDownloadFile, download]);

  useEffect(() => {
    emitter.on(EVENT_NAME_OF_DOWNLOADFILE_DATA_RELOADED, autoDownload);
    return () => {
      emitter.off(EVENT_NAME_OF_DOWNLOADFILE_DATA_RELOADED, autoDownload);
    };
  }, [autoDownload, emitter]);

  const handleDownloadFile = useCallback(
    async (files: FileObject[], name: string) => {
      console.log('download files', files);

      const size = files.reduce((sum, file) => sum + file.size, 0);

      const _downloadFile: DownloadFile = {
        name: name,
        size: files.length == 1 ? size : 0,
        state: 'waiting',
        extension: files.length == 1 ? files[0].extension! : 'zip',
        mimeType: files.length == 1 ? files[0].mimeType! : 'application/zip',
        progress: 0,
        downloadSpeed: '',
        chunks: files,
      };

      await database.addDownloadFile(_downloadFile);

      emitter.emit(EVENT_NAME_OF_DOWNLOADFILE_CHANGE);

      forceRender();
    },
    [emitter],
  );

  const uploadApi = useMemo(() => {
    return {
      cancel: (id: string) => {
        const xfile = state.current.uploadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        if (internalState.current.uploadFileId == xfile.id) {
          uploadAbort();
        }
        const newFile: UploadFile = { ...xfile, state: 'canceled' };
        database.updateUploadFile(id, newFile);
        state.current.uploadFiles = state.current.uploadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
      },

      pause: async (id: string) => {
        const xfile = state.current.uploadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        if (internalState.current.uploadFileId == xfile.id) {
          uploadAbort();
        }
        const newFile: UploadFile = { ...xfile, state: 'paused' };
        database.updateUploadFile(id, newFile);
        state.current.uploadFiles = state.current.uploadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
      },

      start: async (id: string) => {
        const xfile = state.current.uploadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        const newFile: UploadFile = { ...xfile, state: 'waiting' };
        database.updateUploadFile(id, newFile);
        state.current.uploadFiles = state.current.uploadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
        autoUpload();
      },

      restore: async (id: string) => {
        const xfile = state.current.uploadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        const newFile: UploadFile = { ...xfile, state: 'waiting' };
        database.updateUploadFile(id, newFile);
        state.current.uploadFiles = state.current.uploadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
        autoUpload();
      },

      delete: async (id: string) => {
        const xfile = state.current.uploadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        database.deleteUploadFile(id);
        state.current.uploadFiles = state.current.uploadFiles.filter((item) => item.id != id);
        forceRender();
      },
    };
  }, [autoUpload, uploadAbort]);

  const downloadApi = useMemo(() => {
    return {
      cancel: (id: string) => {
        const xfile = state.current.downloadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        if (internalState.current.downloadFileId == xfile.id) {
          downloadAbort();
        }
        const newFile: DownloadFile = { ...xfile, state: 'canceled' };
        database.updateDownloadFile(id, newFile);
        state.current.downloadFiles = state.current.downloadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
      },

      pause: async (id: string) => {
        const xfile = state.current.downloadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        if (internalState.current.downloadFileId == xfile.id) {
          downloadAbort();
        }
        const newFile: DownloadFile = { ...xfile, state: 'paused' };
        database.updateDownloadFile(id, newFile);
        state.current.downloadFiles = state.current.downloadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
      },

      start: async (id: string) => {
        const xfile = state.current.downloadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        const newFile: DownloadFile = { ...xfile, state: 'waiting' };
        database.updateDownloadFile(id, newFile);
        state.current.downloadFiles = state.current.downloadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
        autoDownload();
      },

      restore: async (id: string) => {
        const xfile = state.current.downloadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        const newFile: DownloadFile = { ...xfile, state: 'waiting' };
        database.updateDownloadFile(id, newFile);
        state.current.downloadFiles = state.current.downloadFiles.map((item) =>
          item.id == id ? newFile : item,
        );
        forceRender();
        autoDownload();
      },

      delete: async (id: string) => {
        const xfile = state.current.downloadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        database.deleteDownloadFile(id);
        state.current.downloadFiles = state.current.downloadFiles.filter((item) => item.id != id);
        forceRender();
      },

      save: async (id: string) => {
        const xfile = state.current.downloadFiles.find((item) => item.id == id);
        if (!xfile) {
          return;
        }
        saveAs(xfile.result!.data, xfile.name);
      },
    };
  }, [autoDownload, downloadAbort]);

  const baseApi = useMemo(() => {
    return {
      openTransfers: () => {
        state.current.visibleTransfers = true;
        forceRender();
      },

      closeTransfers: () => {
        state.current.visibleTransfers = false;
        forceRender();
      },
    };
  }, []);

  const api = useMemo(() => {
    return {
      base: baseApi,
      upload: uploadApi,
      download: downloadApi,
    };
  }, [baseApi, uploadApi, downloadApi]);

  return {
    state: { ...state.current },
    setCloudDrive: handleSetCloudDrive,
    upload: handleUploadFile,
    download: handleDownloadFile,
    api,
  };
}
