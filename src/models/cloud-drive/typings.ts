import type { DownloadFileData } from './download';

import type { UploadFileData } from '@/components/Metronic/components/forms/Upload/utils/upload';
import type { CloudDrive, FileObject } from '@/types';

export type DownloadFile = {
  id?: string;
  size: number;
  name: string;
  extension?: string;
  state: 'waiting' | 'downloading' | 'paused' | 'canceled' | 'completed' | 'error';
  progress: number;
  mimeType: string;
  downloadSpeed: string;
  chunks: FileObject[];
  error?: Error;
  result?: DownloadFileData;
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
    space: string;
    folder: string;
  };
};

export type DownloadOptions = {
  name: string;
  fids?: string[];
  url?: string;
};

export type CloudDriveState = {
  visibleTransfers: boolean;
  cloudDrive?: CloudDrive;
  driveId?: string;
  uploadFiles: UploadFile[];
  downloadFiles: DownloadFile[];
};
