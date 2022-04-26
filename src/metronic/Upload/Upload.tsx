import { useCallback, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { Icon } from '@asany/icons';
import { useDropzone } from 'react-dropzone';

import CirclePlayer from '../MediaPlayer/CirclePlayer';

import UploadAvatar from './UploadAvatar';
import ImageUpload from './ImageUpload';
import QueueUpload from './QueueUpload';
import type { UploadFileData } from './utils/upload';
import { useUpload } from './utils/upload';

import './style/Upload.scss';

type UploadProps = {
  value?: string;
  onChange?: (value?: string, fileData?: UploadFileData) => void;
  preview?: (file: UploadFileData) => React.ReactNode;
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
    accept,
    placeholder = '选择上传文件',
    size,
    solid,
    space,
    transparent,
    bordered,
    onChange,
  } = props;

  const state = useRef<{
    value?: string;
  }>({
    value: props.value,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [upload, { uploading }] = useUpload({ space });

  console.log(uploading);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const fileData = await upload(acceptedFiles[0]);
      state.current.value = fileData.id;
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
      onChange && onChange(undefined);
    },
    [onChange],
  );

  const { role, tabIndex, onClick: browseLocalFiles, ...rootProps } = getRootProps();

  const { value } = state.current;

  return (
    <div
      {...rootProps}
      className={classnames('file-input-upload form-control', className, {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
        'form-control-transparent': transparent,
        'form-control-borderless': !bordered,
        'file-input-empty': !value,
      })}
      onClick={!value ? browseLocalFiles : undefined}
    >
      <Icon className="indicator svg-icon-2" name="Bootstrap/cloud-arrow-up" />
      <div className="preview-content" placeholder={placeholder}>
        <CirclePlayer
          size={22}
          src="https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8"
        />
        <div className="ps-2">werwerwerwersdff</div>
      </div>
      <a className="input-clear" onClick={handleClear}>
        <Icon className="svg-icon-3" name="Bootstrap/x" />
      </a>
      <input {...getInputProps()} value="" />
    </div>
  );
}

Upload.UploadAvatar = UploadAvatar;
Upload.Image = ImageUpload;
Upload.Queue = QueueUpload;

export default Upload;
