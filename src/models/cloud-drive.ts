import { useCallback, useEffect, useReducer, useRef } from 'react';

import Dexie from 'dexie';

import { useUpload } from '@/pages/Metronic/components';
import { uuid } from '@/pages/Metronic/components/utils';

type DownloadFile = {
  id: string;
};

type UploadFile = {
  id: string;
  file?: File;
  state: 'waiting' | 'uploading' | 'paused' | 'canceled' | 'completed';
  name: string;
  extension?: string;
  mimeType: string;
  progress: number;
  uploadSpeed: string;
  folder: string;
};

type CloudDriveState = {
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
      uploadFiles: '++id,name,state,extension,progress,uploadSpeed',
      downloadFiles: '++id,name',
    });
    this.uploadFiles = db.table('uploadFiles');
    this.downloadFiles = db.table('downloadFiles');

    this.transaction = db.transaction.bind(db);
  }
}

const database = new TransferDatabase();

const initialState = {
  currentCloudDrive: '',
  uploadFiles: [],
  downloadFiles: [],
};

export default function useCloudDriveModel() {
  const state = useRef<CloudDriveState>(initialState);
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleSetCloudDrive = useCallback((driveId) => {
    if (state.current.currentCloudDrive == driveId) {
      return;
    }
    state.current.currentCloudDrive = driveId;
    forceRender();
  }, []);

  useEffect(() => {
    database.uploadFiles.toArray().then((value) => {
      state.current.uploadFiles = value;
      const reader = new FileReader();
      reader.onload = function fileReadCompleted() {
        // 当读取完成时，内容只在`reader.result`中
        debugger;
        console.log(reader.result);
      };
      reader.readAsText(value[0].file!);
    });
  }, []);

  const [upload, , progress] = useUpload('292eb203e6444c2287b545d8afbc7cee', {
    folder: 'uUw7hWtFvpx-vNSeMNpueccrRWGr8VF6tQJzCH9wgYc2QrAsBrOaBzAuuIiVTwdk',
  });

  console.log(upload, progress);

  const handleUploadFile = useCallback(async (files: File[]) => {
    console.log('upload files', files);

    const folder = 'uUw7hWtFvpx-vNSeMNpueccrRWGr8VF6tQJzCH9wgYc2QrAsBrOaBzAuuIiVTwdk';

    const _uploadFiles = files.map((file) => {
      const lastIndex = file.name.lastIndexOf('.');
      const uploadFile: UploadFile = {
        id: uuid(),
        file,
        state: 'waiting',
        name: file.name,
        extension: lastIndex == -1 ? undefined : file.name.substring(lastIndex + 1),
        mimeType: file.type,
        progress: 0,
        uploadSpeed: '',
        folder,
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

    // 添加到队列

    // 触发上传
    // upload(files[0]);
  }, []);

  return {
    state: state.current,
    setCloudDrive: handleSetCloudDrive,
    upload: handleUploadFile,
  };
}
