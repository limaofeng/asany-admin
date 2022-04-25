import { useCallback, useEffect, useImperativeHandle, useReducer, useRef } from 'react';
import React from 'react';

import { useDropzone } from 'react-dropzone';
import SparkMD5 from 'spark-md5';
import { isEqual } from 'lodash';
import classnames from 'classnames';

import { uuid } from '../utils';
import { fileSize } from '../utils/format';

import { useUpload } from './utils/upload';

import type { FileObject } from '@/types';
import { sleep } from '@/utils';

import './style/QueueUpload.scss';

type QueueUploadProps = {
  auto?: boolean;
  namespace?: string;
  value?: FileObject[];
  onChange?: (files: FileObject[]) => void;
};

export type QueueUploadRef = {
  browse: (e: React.MouseEvent<HTMLElement>) => void;
  uploadAll: () => void;
  removeAll: () => void;
};

type FileUploadObject = FileObject & {
  status: 'waiting' | 'uploading' | 'failure' | 'success';
  source?: File;
  error?: string;
};

function getMD5(file: File): Promise<string> {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      const md5 = SparkMD5.hashBinary(e!.target!.result as any);
      resolve(md5);
    };
  });
}

function QueueUpload(props: QueueUploadProps, ref: React.ForwardedRef<QueueUploadRef | null>) {
  const { namespace, auto, value, onChange } = props;

  const state = useRef<{
    value?: FileObject[];
    attachments: FileUploadObject[];
    uploading?: FileUploadObject;
    onChange?: (files: FileObject[]) => void;
  }>({
    value,
    attachments: [],
    onChange,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.value = props.value;
  state.current.onChange = props.onChange;

  const setAttachments = useCallback(
    async (files: FileUploadObject[] | ((files: FileUploadObject[]) => FileUploadObject[])) => {
      if (typeof files === 'function') {
        state.current.attachments = await files(state.current.attachments);
      } else {
        state.current.attachments = files;
      }
      forceRender();
    },
    [],
  );

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newFiles: FileUploadObject[] = await Promise.all(
        acceptedFiles.map(async (item) => ({
          id: uuid(),
          path: item.name,
          name: item.name,
          isDirectory: false,
          size: item.size,
          type: item.type,
          md5: await getMD5(item),
          status: 'waiting',
          source: item,
          isRootFolder: false,
        })),
      );
      setAttachments((_attachments) => {
        return [
          ..._attachments,
          ...newFiles.filter((item) => !_attachments.some((f) => f.etag == item.etag)),
        ];
      });
    },
    [setAttachments],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [upload, { progress }] = useUpload({ space: namespace });

  const handleUpload = useCallback(
    async (file: FileUploadObject) => {
      file.status = 'uploading';
      state.current.uploading = file;
      // console.log('上传文件', file);
      const result = await upload(file.source!);
      // await sleep(120);
      // state.current.uploading = undefined;
      file.status = 'success';
      // console.log('上传文件成功', result);
      return result;
    },
    [upload],
  );

  const handleChange = useCallback(() => {
    const { attachments } = state.current;
    const newValue = attachments.filter((item) => item.status == 'success');
    if (isEqual(newValue, state.current.value)) {
      return;
    }
    state.current.onChange && state.current.onChange(newValue);
  }, []);

  const buildHandleUpload = useCallback(
    (id: string) => async () => {
      console.log('buildHandleUpload', id);
      const { attachments: files } = state.current;
      const index = files.findIndex((item) => item.id == id);
      const file = files[index];
      const result = await handleUpload(file);
      files[index] = {
        ...result,
        status: 'success',
        isDirectory: false,
        isRootFolder: false,
      } as any;
      handleChange();
      forceRender();
    },
    [handleUpload, handleChange],
  );

  const handleUploadAll = useCallback(async () => {
    const { attachments: files } = state.current;
    let updated = false;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      while (file.status == 'uploading') {
        await sleep(60);
      }
      if (file.status == 'success') {
        continue;
      }
      file.status = 'uploading';
      forceRender();
      try {
        const result = await handleUpload(file);
        files[i] = { ...result, status: 'success', isDirectory: false, isRootFolder: false } as any;
        updated = true;
      } catch (e: any) {
        files[i].status = 'failure';
        files[i].error = e.message;
      }
      forceRender();
    }
    if (updated) {
      handleChange();
    }
  }, [handleUpload, handleChange]);

  const buildHandleDelete = useCallback(
    (id: string) => () => {
      state.current.attachments = state.current.attachments.filter((item) => item.id != id);
      handleChange();
    },
    [handleChange],
  );

  const { onClick, ...rootProps } = getRootProps();

  useImperativeHandle(ref, () => ({
    browse(e: React.MouseEvent<HTMLElement>) {
      onClick!(e);
    },
    async uploadAll() {
      await handleUploadAll();
    },
    removeAll() {
      state.current.attachments = [];
      forceRender();
    },
  }));

  const { attachments, uploading } = state.current;

  useEffect(() => {
    if (!auto) {
      return;
    }
    handleUploadAll();
  }, [auto, handleUploadAll]);

  return (
    <div
      {...rootProps}
      className={classnames('dropzone dropzone-queue px-8', {
        'py-4': attachments.length != 0,
      })}
    >
      <input {...getInputProps()} />
      <div className="dropzone-items">
        {attachments.map((item) => (
          <div key={item.id} className="dropzone-item">
            <div className="dropzone-file">
              <div className="dropzone-filename" title={item.name}>
                {/* <Icon className="svg-icon-2" name="Material/pdf" /> */}
                <span>{item.name}</span>
                <strong>
                  (<span>{fileSize(item.size)}</span>)
                </strong>
              </div>
              <div className="dropzone-error" />
            </div>
            <div className="dropzone-progress">
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{
                    opacity: uploading?.id == item.id ? 1 : 0,
                    width: uploading?.id == item.id ? `${progress}%` : undefined,
                  }}
                />
              </div>
            </div>
            <div className="dropzone-toolbar">
              {item.status == 'waiting' && (
                <span onClick={buildHandleUpload(item.id)} className="dropzone-start">
                  <i className="bi bi-play-fill fs-3" />
                </span>
              )}
              <span onClick={buildHandleDelete(item.id)} className="dropzone-delete">
                <i className="bi bi-x fs-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const QueueUploadForwardRef = React.forwardRef(QueueUpload);

export default QueueUploadForwardRef;
