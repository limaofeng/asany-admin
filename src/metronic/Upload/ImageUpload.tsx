import { useCallback, useEffect, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

import Button from '../Button';
import Tooltip from '../Tooltip';

import type { UploadFileData } from './utils/upload';
import { useUpload } from './utils/upload';
import { ImageCropperModal } from './ImageCropper';
import type { CropOptions } from './typings';

import './style/ImageUpload.scss';

type ImageUploadProps = {
  space?: string;
  className?: string;
  width?: number;
  height?: number;
  accept?: string;
  value?: string;
  backgroundImage?: string;
  onChange?: (id?: string, file?: UploadFileData) => void;
  crop?:
    | false
    | ({
        title?: string;
        saveBtnTxt?: string;
        height?: number;
        width?: number;
      } & CropOptions);
};

const DEFAULT_PREVIEW_URL = '/assets/media/background/mage_icon.png';

function ImageUpload(props: ImageUploadProps) {
  const {
    className,
    width,
    height,
    crop = {},
    space,
    backgroundImage = DEFAULT_PREVIEW_URL,
    accept = '.png, .jpg, .jpeg',
    onChange,
  } = props;

  const state = useRef<{
    value?: string;
    image?: File;
    preview: string;
    imageCropperModalVisible: boolean;
  }>({
    value: props.value,
    preview: backgroundImage,
    imageCropperModalVisible: false,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const setImageCropperModalVisible = useCallback((visible: boolean) => {
    state.current.imageCropperModalVisible = visible;
    forceRender();
  }, []);

  // const [value, setValue] = useState(props.value);
  // const [image, setImage] = useState<File>();
  // const [preview, setPreview] = useState(DEFAULT_PREVIEW_URL);
  // const [imageCropperModalVisible, setImageCropperModalVisible] = useState(false);

  const [upload, { uploading }] = useUpload({ space });

  const onDrop = useCallback((acceptedFiles) => {
    state.current.image = acceptedFiles[0];
    state.current.imageCropperModalVisible = true;
    forceRender();
  }, []);

  const handleCloseImageCropperModal = useCallback(() => {
    setImageCropperModalVisible(false);
  }, [setImageCropperModalVisible]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
  });
  const { role, tabIndex, onClick: browseLocalFiles, ...rootProps } = getRootProps();

  useEffect(() => {
    if (props.value == state.current.value) {
      return;
    }
    state.current.value = props.value;
    state.current.preview = process.env.STORAGE_URL + `/preview/${props.value}`;
    forceRender();
  }, [props.value]);

  const handleCrop = useCallback(
    async (data: Blob) => {
      const [, ext] = data.type.split('/');
      const lastIndex = state.current.image?.name.lastIndexOf('.');
      const name =
        lastIndex == -1
          ? state.current.image?.name
          : state.current.image?.name.substring(0, lastIndex);
      const fileData = await upload(
        new File([data], `${name}.${ext}`, {
          type: data.type,
          lastModified: new Date().getTime(),
        }),
      );
      state.current.value = fileData.id;
      state.current.preview = process.env.STORAGE_URL + `/preview/${fileData.id}`;
      state.current.imageCropperModalVisible = false;
      forceRender();
      onChange && onChange(fileData.id, fileData);
    },
    [onChange, upload],
  );

  const { value, preview, imageCropperModalVisible, image } = state.current;

  const handleRemove = useCallback(() => {
    state.current.value = undefined;
    state.current.image = undefined;
    state.current.preview = backgroundImage;
    onChange && onChange();
    forceRender();
  }, [backgroundImage, onChange]);

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
