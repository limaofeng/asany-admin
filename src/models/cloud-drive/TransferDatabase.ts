import Dexie from 'dexie';

import type { BrokenFile, DownloadCache } from './download';
import type { DownloadFile, UploadFile } from './typings';

type DownloadFileCache = BrokenFile & {
  id?: string;
};

class TransferDatabase {
  public uploadFiles: Dexie.Table<UploadFile, string>;
  public downloadFiles: Dexie.Table<DownloadFile, string>;
  public downloadCaches: Dexie.Table<DownloadFileCache, string>;
  transaction: any;

  public constructor() {
    const db = new Dexie('TransferDatabase');
    db.version(1).stores({
      uploadFiles:
        '++id,name,state,size,extension,progress,uploadSpeed,source,uploadOptions,error,result',
      downloadFiles:
        '++id,name,state,size,progress,downloadSpeed,chunks,downloadOptions,error,result',
      downloadCaches:
        '++id,url,name,size,loaded,chunks,expires,lastModified,etag',
    });
    this.uploadFiles = db.table('uploadFiles');
    this.downloadFiles = db.table('downloadFiles');
    this.downloadCaches = db.table('downloadCaches');

    this.transaction = db.transaction.bind(db);
  }
}

const database = new TransferDatabase();

export const downloadCache: DownloadCache = {
  async get(url: string) {
    return await database.transaction(
      'r',
      database.downloadCaches,
      async () => {
        return await database.downloadCaches.get(url);
      },
    );
  },
  async put(url: string, file: BrokenFile) {
    await database.transaction('rw', database.downloadCaches, async () => {
      await database.downloadCaches.put({ ...file, id: url }, url);
    });
  },
  async delete(url: string) {
    await database.transaction('rw', database.downloadCaches, async () => {
      await database.downloadCaches.delete(url);
    });
    return true;
  },
};

export default {
  downloadFiles() {
    return database.transaction('r', database.downloadFiles, async () => {
      return database.downloadFiles.toArray();
    });
  },
  addDownloadFile(file: DownloadFile) {
    return database.transaction('rw', database.downloadFiles, async () => {
      return database.downloadFiles.add(file);
    });
  },
  updateDownloadFile(id: string, file: DownloadFile) {
    return database.transaction('rw', database.downloadFiles, async () => {
      return database.downloadFiles.update(id, file);
    });
  },
  deleteDownloadFile(id: string) {
    return database.transaction('rw', database.downloadFiles, async () => {
      return database.downloadFiles.delete(id);
    });
  },
  uploadFiles() {
    return database.transaction('r', database.uploadFiles, async () =>
      database.uploadFiles.toArray(),
    );
  },
  async addUploadFiles(files: UploadFile[]) {
    return await database.transaction('rw', database.uploadFiles, async () => {
      for (const item of files) {
        await database.uploadFiles.add(item);
      }
    });
  },
  updateUploadFile(id: string, file: UploadFile) {
    return database.transaction('rw', database.uploadFiles, async () => {
      return database.uploadFiles.update(id, file);
    });
  },
  deleteUploadFile(id: string) {
    return database.transaction('rw', database.uploadFiles, async () => {
      return database.uploadFiles.delete(id);
    });
  },
};
