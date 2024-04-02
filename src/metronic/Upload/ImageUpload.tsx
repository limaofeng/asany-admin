import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import type { Accept } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import classnames from 'classnames';
import mime from 'mime-types';

import { ImageCropperModal } from './ImageCropper';
import type { CropOptions } from './typings';
import type { UploadFileData } from './utils/upload';
import { useUpload } from './utils/upload';

import Button from '../Button';
import Tooltip from '../Tooltip';
import { loadImage } from '../utils';

import './style/ImageUpload.scss';

type ImageUploadProps = {
  space?: string;
  className?: string;
  width?: number;
  height?: number;
  accept?: string | Accept;
  value?: string;
  background?: React.ReactNode;
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
    crop = false,
    space,
    background = DEFAULT_PREVIEW_URL,
    onChange,
  } = props;

  const state = useRef<{
    value?: string;
    image?: File;
    preview: React.ReactNode;
    imageCropperModalVisible: boolean;
  }>({
    value: props.value,
    preview: background,
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

  const handleUpload = useCallback(
    async (file: File) => {
      const fileData = await upload(file);
      state.current.value = fileData.id;
      state.current.imageCropperModalVisible = false;

      const data = await loadImage(
        process.env.STORAGE_URL + `/preview/${fileData.id}`,
      );
      state.current.preview = data;

      forceRender();
      onChange && onChange(fileData.id, fileData);
    },
    [onChange, upload],
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (crop) {
        state.current.image = acceptedFiles[0];
        state.current.imageCropperModalVisible = true;
        forceRender();
      } else {
        handleUpload(acceptedFiles[0]);
      }
    },
    [crop, handleUpload],
  );

  const handleCloseImageCropperModal = useCallback(() => {
    setImageCropperModalVisible(false);
  }, [setImageCropperModalVisible]);

  const accept = useMemo(() => {
    if (typeof props.accept === 'string') {
      return props.accept.split(',').reduce((_accept, item) => {
        let fileExtension = item.trim();
        fileExtension = fileExtension.startsWith('.')
          ? fileExtension
          : '.' + fileExtension;
        const key = mime.lookup(fileExtension);
        if (!key) {
          return _accept;
        }
        if (!_accept[key]) {
          _accept[key] = [];
        }
        _accept[key].push(fileExtension);
        return _accept;
      }, {} as Accept);
    }
    return props.accept;
  }, [props.accept]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
  });
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    role,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tabIndex,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: browseLocalFiles,
    ...rootProps
  } = getRootProps();

  useEffect(() => {
    if (props.value === state.current.value) {
      return;
    }
    state.current.value = props.value;
    loadImage(process.env.STORAGE_URL + `/preview/${props.value}`).then(
      (data) => {
        state.current.preview = data;
        forceRender();
      },
    );
  }, [props.value]);

  const handleCrop = useCallback(
    async (data: Blob) => {
      const [, ext] = data.type.split('/');
      const lastIndex = state.current.image?.name.lastIndexOf('.');
      const name =
        lastIndex === -1
          ? state.current.image?.name
          : state.current.image?.name.substring(0, lastIndex);
      const newFile = new File([data], `${name}.${ext}`, {
        type: data.type,
        lastModified: new Date().getTime(),
      });
      handleUpload(newFile);
    },
    [handleUpload],
  );

  const { value, preview, imageCropperModalVisible, image } = state.current;

  const handleRemove = useCallback(() => {
    state.current.value = undefined;
    state.current.image = undefined;
    state.current.preview = background;
    onChange && onChange();
    forceRender();
  }, [background, onChange]);

  return (
    <div
      className={classnames('image-input image-input-outline', className, {
        'image-input-empty': !value,
      })}
      data-kt-image-input="true"
      // style={{ backgroundImage: "url('/assets/media/svg/avatars/blank.svg')" }}
    >
      {typeof preview === 'string' ? (
        <div
          {...rootProps}
          className={'image-input-wrapper'}
          style={{ backgroundImage: `url('${preview}')`, width, height }}
        />
      ) : (
        <div
          {...rootProps}
          style={{ width, height }}
          className={'image-input-wrapper'}
        >
          {preview}
        </div>
      )}
      <Tooltip title="上传图片">
        <Button
          as="label"
          type="circle"
          variant={false}
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
          variant={false}
          onClick={handleRemove}
          data-kt-image-input-action="remove"
          className={
            'btn-icon btn-active-color-primary w-25px h-25px bg-body shadow'
          }
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
