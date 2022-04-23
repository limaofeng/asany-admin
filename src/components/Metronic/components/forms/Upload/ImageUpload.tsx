import { useCallback, useState } from 'react';

import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

import { Button } from '../../base/Button';
import { Tooltip } from '../../feedback';

import type { UploadFileData } from './utils/upload';
import { useUpload } from './utils/upload';
import { ImageCropperModal } from './ImageCropper';
import type { CropOptions } from './typings';

type ImageUploadProps = {
  className?: string;
  width?: number;
  height?: number;
  accept?: string;
  value?: string;
  onChange?: (path: string, file: UploadFileData) => void;
  crop?:
    | false
    | ({
        title?: string;
        saveBtnTxt?: string;
        height?: number;
        width?: number;
      } & CropOptions);
};

const DEFAULT_PREVIEW_URL = '/assets/media/avatars/300-1.jpg';

function ImageUpload(props: ImageUploadProps) {
  const {
    className,
    width,
    height,
    crop = {},
    value,
    accept = '.png, .jpg, .jpeg',
    onChange,
  } = props;

  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState(DEFAULT_PREVIEW_URL);
  const [imageCropperModalVisible, setImageCropperModalVisible] = useState(false);

  const [upload, { uploading }] = useUpload({});

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
    setImageCropperModalVisible(true);
  }, []);

  const handleCloseImageCropperModal = useCallback(() => {
    setImageCropperModalVisible(false);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
  });
  const { role, tabIndex, onClick: browseLocalFiles, ...rootProps } = getRootProps();

  const handleCrop = useCallback(
    async (data: Blob) => {
      const [, ext] = data.type.split('/');
      const lastIndex = image?.name.lastIndexOf('.');
      const name = lastIndex == -1 ? image?.name : image?.name.substring(0, lastIndex);
      const fileData = await upload(
        new File([data], `${name}.${ext}`, {
          type: data.type,
          lastModified: new Date().getTime(),
        }),
      );
      onChange && onChange(fileData.id, fileData);
      setPreview(process.env.STORAGE_URL + fileData.path);
      setImageCropperModalVisible(false);
    },
    [image?.name, onChange, upload],
  );

  const handleRemove = useCallback(() => {}, []);

  return (
    <div
      className={classnames('image-input image-input-outline', className, {
        'image-input-empty': !value,
      })}
      data-kt-image-input="true"
      style={{ backgroundImage: "url('/assets/media/svg/avatars/blank.svg')" }}
    >
      <div
        {...rootProps}
        className={'image-input-wrapper'}
        style={{ backgroundImage: `url('${preview}')`, width, height }}
      />
      <Tooltip title="上传图片">
        <Button
          as="label"
          type="circle"
          data-kt-image-input-action="change"
          className="btn-icon btn-active-color-primary w-25px h-25px bg-body shadow"
        >
          <i className="bi bi-pencil-fill fs-7" />
          <input {...getInputProps()} value="" />
          <input type="hidden" name="avatar_remove" />
        </Button>
      </Tooltip>
      <Tooltip title="移除图片">
        <Button
          as="span"
          type="circle"
          onClick={handleRemove}
          data-kt-image-input-action="remove"
          className={'btn-icon btn-active-color-primary w-25px h-25px bg-body shadow'}
        >
          <i className="bi bi-x fs-2" />
        </Button>
      </Tooltip>
      {crop && (
        <ImageCropperModal
          {...crop}
          onCrop={handleCrop}
          submiting={uploading}
          visible={imageCropperModalVisible}
          image={image}
          onCancel={handleCloseImageCropperModal}
        />
      )}
    </div>
  );
}

export default ImageUpload;
