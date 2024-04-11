import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { useDropzone } from 'react-dropzone';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import ImageUpload from './ImageUpload';
import QueueUpload from './QueueUpload';
import UploadAvatar from './UploadAvatar';
import { useLoadFile } from './utils/load';
import type { UploadFileData, UploadState } from './utils/upload';
import { useUpload } from './utils/upload';

import CirclePlayer from '../MediaPlayer/CirclePlayer';
import { Progress } from '../Progress';
import Tooltip from '../Tooltip';

import './style/Upload.scss';

type PreviewComponentProps = {
  uploadFile: UploadFileData;
  uploading?: boolean;
  status: UploadState;
  progress?: number;
};

export function PreviewComponent(props: PreviewComponentProps) {
  const { uploadFile, progress = 0, status } = props;

  const [title, suffix] = useMemo(() => {
    const index = uploadFile.name.lastIndexOf('.');
    if (index === -1) {
      return [uploadFile.name, undefined];
    }
    return [
      uploadFile.name.substring(0, index),
      uploadFile.name.substring(index + 1),
    ];
  }, [uploadFile.name]);

  return (
    <>
      {status === 'completed' && uploadFile.mimeType.startsWith('audio/') && (
        <CirclePlayer
          size={22}
          src={process.env.STORAGE_URL + `/preview/${uploadFile.id}`}
        />
      )}
      {status === 'error' && (
        <Tooltip title={<span className="text-danger">上传失败,请重试</span>}>
          <Icon
            className="svg-icon-3 text-danger svg-icon-danger"
            name="Bootstrap/exclamation-triangle-fill"
          />
        </Tooltip>
      )}
      {status !== 'completed' && status !== 'error' && (
        <Progress.Circle width={22} strokeWidth={10} percent={progress} />
      )}
      <div className="file-name-container ps-2">
        <div
          className={classnames({ 'tw-truncate': !suffix, 'd-flex': suffix })}
        >
          {suffix ? (
            <>
              <span className="file-title shrink tw-truncate">{title}</span>
              <span className="file-suffix">.{suffix}</span>
            </>
          ) : (
            title
          )}
        </div>
      </div>
    </>
  );
}

type UploadProps = {
  value?: string;
  onChange?: (value?: string, fileData?: UploadFileData) => void;
  preview?: React.ComponentType<PreviewComponentProps>;
  className?: string;
  size?: 'xs' | 'sm' | 'lg';
  accept?: string;
  space?: string;
  placeholder?: string;
  solid?: boolean;
  transparent?: boolean;
  bordered?: boolean;
};
function Upload(props: UploadProps) {
  const {
    className,
    accept = {},
    placeholder = '选择上传文件',
    size,
    solid,
    space,
    transparent,
    bordered,
    preview = PreviewComponent,
    onChange,
  } = props;

  const state = useRef<{
    value?: string;
    uploadFile?: UploadFileData;
    status: UploadState;
  }>({
    value: props.value,
    status: 'waiting',
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [loadFile, { loading }] = useLoadFile();
  const [upload, { uploading, state: uploadState, reset, progress, abort }] =
    useUpload({ space });

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
      // state.current.preview = process.env.STORAGE_URL + `/preview/${fileData.id}`;
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

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const status = state.current.status;

      if (status === 'completed' || status === 'error') {
        reset();
        onChange && onChange(undefined);
      } else {
        abort();
      }

      state.current.uploadFile = undefined;
      forceRender();
    },
    [abort, onChange, reset],
  );

  useEffect(() => {
    if (state.current.status === uploadState) {
      return;
    }
    state.current.status = uploadState;
    forceRender();
  }, [uploadState]);

  useEffect(() => {
    if (!props.value) {
      if (state.current.uploadFile) {
        handleClear(new MouseEvent('click') as any);
      }
      return;
    }
    if (props.value === state.current.value && state.current.uploadFile) {
      return;
    }
    loadFile(props.value).then((data: UploadFileData) => {
      state.current.uploadFile = data;
      state.current.value = props.value;
      state.current.status = 'completed';
      forceRender();
    });
  }, [handleClear, loadFile, props.value]);

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    role,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tabIndex,
    onClick: browseLocalFiles,
    ...rootProps
  } = getRootProps();

  const { status, uploadFile } = state.current;

  return (
    <div
      {...rootProps}
      className={classnames('file-input-upload form-control', className, {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
        'form-control-transparent': transparent,
        'form-control-borderless': !bordered,
        'file-input-empty': !uploadFile,
        'file-input-loading': loading,
      })}
      onClick={!uploadFile ? browseLocalFiles : undefined}
    >
      {!uploadFile &&
        (loading ? (
          <span className="spinner-border spinner-border align-middle" />
        ) : (
          <Icon
            className="indicator svg-icon-2"
            name="Bootstrap/cloud-arrow-up"
          />
        ))}
      <div
        className="preview-content"
        data-placeholder={loading ? '加载文件中...' : placeholder}
      >
        {uploadFile &&
          React.createElement(preview, {
            uploadFile,
            uploading,
            status,
            progress,
          })}
      </div>
      {status !== 'waiting' && (
        <a className="input-clear" onClick={handleClear}>
          <Icon className="svg-icon-3" name="Bootstrap/x" />
        </a>
      )}
      <input {...getInputProps()} value="" />
    </div>
  );
}

Upload.NewImage = UploadAvatar;
Upload.Image = ImageUpload;
Upload.Queue = QueueUpload;

export default Upload;
