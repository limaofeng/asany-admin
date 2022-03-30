import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import EventEmitter from 'events';

import Dexie from 'dexie';

import { useUpload } from '@/pages/Metronic/components';
import type {
  UploadFileData,
  UploadState,
} from '@/pages/Metronic/components/forms/Upload/utils/upload';

export type DownloadFile = {
  id: string;
  size: number;
  progress: number;
  downloadSpeed: string;
};

export type UploadFile = {
  id?: string;
  source: File;
  size: number;
  state: 'waiting' | 'uploading' | 'paused' | 'canceled' | 'completed' | 'error';
  name: string;
  extension?: string;
  mimeType: string;
  progress: number;
  uploadSpeed: string;
  error?: Error;
  result?: UploadFileData;
  uploadOptions: {
    namespace: string;
    folder: string;
  };
};

type CloudDriveState = {
  visibleTransfers: boolean;
  currentCloudDrive?: string;
  uploadFiles: UploadFile[];
  downloadFiles: DownloadFile[];
};

class TransferDatabase {
  public uploadFiles: Dexie.Table<UploadFile, string>;
  public downloadFiles: Dexie.Table<DownloadFile, string>;
  transaction: any;

  public constructor() {
    const db = new Dexie('TransferDatabase');
    db.version(1).stores({
      uploadFiles:
        '++id,name,state,size,extension,progress,uploadSpeed,source,uploadOptions,error,result',
      downloadFiles: '++id,name',
    });
    this.uploadFiles = db.table('uploadFiles');
    this.downloadFiles = db.table('downloadFiles');

    this.transaction = db.transaction.bind(db);
  }
}

const database = new TransferDatabase();

const initialState = {
  visibleTransfers: false,
  currentCloudDrive: '',
  uploadFiles: [],
  downloadFiles: [],
};

const EVENT_NAME_OF_UPLOADFILE_CHANGE = 'UPLOADFILE_CHANGE';
const EVENT_NAME_OF_DOWNLOADFILE_CHANGE = 'DOWNLOADFILE_CHANGE';

const EVENT_NAME_OF_UPLOADFILE_DATA_RELOADED = 'UPLOADFILE_DATA_RELOADED';

export default function useCloudDriveModel() {
  const [emitter] = useState(new EventEmitter());

  const internalState = useRef<{
    uploadFileId?: string;
    uploading: boolean;
  }>({
    uploading: false,
  });

  const state = useRef<CloudDriveState>(initialState);
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleSetCloudDrive = useCallback((driveId) => {
    if (state.current.currentCloudDrive == driveId) {
      return;
    }
    state.current.currentCloudDrive = driveId;
    forceRender();
  }, []);

  const reloadUploadFiles = useCallback(async () => {
    const value = await database.uploadFiles.toArray();
    state.current.uploadFiles = value;
    forceRender();

    emitter.emit(EVENT_NAME_OF_UPLOADFILE_DATA_RELOADED);

    //  TODO: 测试读取 IndexedDB 中的文件信息
    // const reader = new FileReader();
    // reader.onload = function fileReadCompleted() {
    //   // 当读取完成时，内容只在`reader.result`中
    //   console.log(reader.result);
    // };
    // reader.readAsText(value[0].file!);
  }, [emitter]);

  const reloadDownloadFiles = useCallback(async () => {
    const value = await database.downloadFiles.toArray();
    state.current.downloadFiles = value;
    forceRender();
  }, []);

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
      // console.log('upload 上传进度', progress, uploadState, uploadSpeed);

      const newFile = { ...file };

      uploadSpeed && (newFile.uploadSpeed = uploadSpeed);
      progress != null && (newFile.progress = progress);

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
        console.log('xxx', state.current.uploadFiles);
        newFile.error = undefined;
      }

      if (newState != newFile.state) {
        newFile.state = newState;
        result && (newFile.result = result);
        database.uploadFiles.update(newFile.id!, newFile);
      }

      state.current.uploadFiles = state.current.uploadFiles.map((item) =>
        item.id == newFile.id ? newFile : item,
      );
      forceRender();
    },
    [],
  );

  const [upload, { progress, state: uploadState, uploading, uploadSpeed, error, abort }] =
    useUpload({
      space: '292eb203e6444c2287b545d8afbc7cee',
      folder: 'uUw7hWtFvpx-vNSeMNpueccrRWGr8VF6tQJzCH9wgYc2QrAsBrOaBzAuuIiVTwdk',
    });

  internalState.current.uploading = uploading;

  // console.log('upload uploading ->', uploading, progress, uploadState, uploadSpeed);

  useEffect(() => {
    const file = state.current.uploadFiles.find(
      (item) => item.id == internalState.current.uploadFileId,
    );
    if (file == null) {
      return;
    }
    updateUploadFile(file, { progress, uploadState, uploadSpeed, error });
  }, [progress, uploadState, uploadSpeed, updateUploadFile, error]);

  const autoUpload = useCallback(async () => {
    if (internalState.current.uploading) {
      return;
    }

    let file = state.current.uploadFiles.find((item) =>
      ['waiting', 'uploading'].includes(item.state),
    );

    if (!file) {
      console.log('没有需要上传的文件');
    }

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
    async (files: File[]) => {
      console.log('upload files', files);

      const namespace = '292eb203e6444c2287b545d8afbc7cee';
      const folder = 'uUw7hWtFvpx-vNSeMNpueccrRWGr8VF6tQJzCH9wgYc2QrAsBrOaBzAuuIiVTwdk';

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
            namespace,
            folder,
          },
        };
        return uploadFile;
      });

      await database.transaction('rw', database.uploadFiles, async () => {
        for (const item of _uploadFiles) {
          console.time('保存文件耗时');
          await database.uploadFiles.add(item);
          console.timeEnd('保存文件耗时');
        }
      });

      emitter.emit(EVENT_NAME_OF_UPLOADFILE_CHANGE);

      state.current.visibleTransfers = true;
      forceRender();
    },
    [emitter],
  );

  const openTransfers = useCallback(() => {
    state.current.visibleTransfers = true;
    forceRender();
  }, []);

  const closeTransfers = useCallback(() => {
    state.current.visibleTransfers = false;
    forceRender();
  }, []);

  const cancelUploadFile = useCallback(
    (id: string) => {
      const xfile = state.current.uploadFiles.find((item) => item.id == id);
      if (!xfile) {
        return;
      }
      if (internalState.current.uploadFileId == xfile.id) {
        abort();
      }
      const newFile: UploadFile = { ...xfile, state: 'canceled' };
      database.uploadFiles.update(id, newFile);
      state.current.uploadFiles = state.current.uploadFiles.map((item) =>
        item.id == id ? newFile : item,
      );
      forceRender();
    },
    [abort],
  );

  const pauseUploadFile = useCallback(
    async (id: string) => {
      const xfile = state.current.uploadFiles.find((item) => item.id == id);
      if (!xfile) {
        return;
      }
      if (internalState.current.uploadFileId == xfile.id) {
        abort();
      }
      const newFile: UploadFile = { ...xfile, state: 'paused' };
      database.uploadFiles.update(id, newFile);
      state.current.uploadFiles = state.current.uploadFiles.map((item) =>
        item.id == id ? newFile : item,
      );
      forceRender();
    },
    [abort],
  );

  const startUploadFile = useCallback(
    async (id: string) => {
      const xfile = state.current.uploadFiles.find((item) => item.id == id);
      if (!xfile) {
        return;
      }
      const newFile: UploadFile = { ...xfile, state: 'waiting' };
      database.uploadFiles.update(id, newFile);
      state.current.uploadFiles = state.current.uploadFiles.map((item) =>
        item.id == id ? newFile : item,
      );
      forceRender();
      autoUpload();
    },
    [autoUpload],
  );

  const restoreUploadFile = useCallback(
    async (id: string) => {
      const xfile = state.current.uploadFiles.find((item) => item.id == id);
      if (!xfile) {
        return;
      }
      const newFile: UploadFile = { ...xfile, state: 'waiting' };
      database.uploadFiles.update(id, newFile);
      state.current.uploadFiles = state.current.uploadFiles.map((item) =>
        item.id == id ? newFile : item,
      );
      forceRender();
      autoUpload();
    },
    [autoUpload],
  );

  const deleteUploadFile = useCallback(async (id: string) => {
    const xfile = state.current.uploadFiles.find((item) => item.id == id);
    if (!xfile) {
      return;
    }
    await database.uploadFiles.delete(id);
    state.current.uploadFiles = state.current.uploadFiles.filter((item) => item.id != id);
    forceRender();
  }, []);

  return {
    state: { ...state.current },
    setCloudDrive: handleSetCloudDrive,
    upload: handleUploadFile,
    openTransfers,
    closeTransfers,
    cancelUploadFile,
    pauseUploadFile,
    startUploadFile,
    restoreUploadFile,
    deleteUploadFile,
  };
}
