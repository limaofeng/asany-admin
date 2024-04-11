import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { Accept, useDropzone } from 'react-dropzone';

import classnames from 'classnames';

import { useLoadFile } from './utils/load';
import { UploadFileData, UploadState, useUpload } from './utils/upload';

import { Progress } from '../Progress';
type SingleUploadProps = {
  className?: string;
  value?: string | UploadFileData;
  accept?: Accept;
  onChange?: (value: string, uploadFile: UploadFileData) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

function SingleUpload(props: SingleUploadProps) {
  const { className, onChange, accept, title, description } = props;

  const [loadFile, {}] = useLoadFile();

  const state = useRef<{
    value?: string;
    uploadFile?: UploadFileData;
    status: UploadState;
  }>({
    status: 'waiting',
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  useEffect(() => {
    if (!props.value) {
      state.current = {
        status: 'waiting',
      };
      forceRender();
    } else if (typeof props.value === 'string') {
      if (
        state.current.value === props.value &&
        state.current.uploadFile?.id === props.value
      ) {
        return;
      }
      loadFile(props.value).then((file) => {
        state.current.value = props.value as string;
        state.current.uploadFile = file;
        forceRender();
      });
    } else {
      state.current.value = props.value.id;
      state.current.uploadFile = props.value;
      forceRender();
    }
  }, [props.value]);

  const [upload, { uploading, progress, uploadSpeed }] = useUpload({
    space: 'XXTIeJCp',
  });

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file: File = acceptedFiles[0];
      state.current.uploadFile = {
        id: 'upload',
        path: '',
        directory: false,
        mimeType: file.type,
        name: file.name,
        size: file.size,
      } as any;
      const fileData = await upload(acceptedFiles[0]);
      state.current.value = fileData.id;
      state.current.uploadFile = fileData;
      forceRender();
      onChange && onChange(fileData.id, fileData);
    },
    [onChange, upload],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
  });

  return (
    <div className={classnames('dropzone', className)}>
      <div {...getRootProps()} className="dz-message needsclick">
        <i className="ki-duotone ki-file-up fs-3x text-primary">
          <span className="path1"></span>
          <span className="path2"></span>
        </i>
        <div className="ms-4">
          <h3 className="fs-5 fw-bold text-gray-900 mb-1">
            {title || '将文件拖拽至此处、点击上传'}
          </h3>
          <span className="fs-7 fw-semibold text-gray-500">{description}</span>
        </div>
      </div>
      {!!uploading && (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              right: 30,
              bottom: 6,
            }}
          >
            {uploadSpeed}
          </div>
          <Progress className="h-2px" color="primary" percent={progress} />
        </div>
      )}
      <input {...getInputProps()} value="" />
    </div>
  );
}

export default SingleUpload;
