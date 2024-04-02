import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';

import Button from '../Button';
import Modal from '../Modal';

import type { CropOptions } from './typings';

type ImageCropperProps = {
  image?: string | File;
  width?: number | string;
  height?: number | string;
} & CropOptions;

export function imageToBase64(img: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = function (e) {
      resolve(e.target!.result! as string);
    };
  });
}

export function dataURItoBlob(base64Data: string) {
  const [, mimeType, encoding, body] = base64Data.split(/:|;|,/g);
  const bodyBuffer = Buffer.from(body, encoding as 'base64');
  return new Blob([bodyBuffer], {
    type: mimeType,
  });
}

export type ImageCropperRef = {
  instance: Cropper | undefined;
  getCropData: () => string;
};

function ImageCropper(
  props: ImageCropperProps,
  ref: React.ForwardedRef<ImageCropperRef | null>,
) {
  const {
    width = '100%',
    height,
    zoomable,
    aspectRatio,
    preview,
    viewMode = 1,
    initialAspectRatio = 1,
    zoomTo = 0.5,
    minCropBoxHeight = 10,
    minCropBoxWidth = 10,
    background = false,
    responsive = true,
    autoCropArea = 1,
    checkOrientation = false,
  } = props;

  const [cropper, setCropper] = useState<Cropper>();
  const [image, setImage] = useState<string>();

  const handleCropData = useCallback(() => {
    if (!cropper) {
      throw new Error(' cropper not init');
    }
    return cropper.getCroppedCanvas().toDataURL();
  }, [cropper]);

  useEffect(() => {
    if (props.image instanceof File) {
      imageToBase64(props.image).then(setImage);
    } else {
      setImage(props.image);
    }
  }, [props.image]);

  useImperativeHandle(ref, () => ({
    get instance() {
      return cropper;
    },
    getCropData() {
      return handleCropData();
    },
  }));

  return (
    <div className="crop-container">
      <Cropper
        style={{ height, width }}
        zoomTo={zoomTo}
        initialAspectRatio={initialAspectRatio}
        preview={preview}
        src={image}
        viewMode={viewMode}
        zoomable={zoomable}
        aspectRatio={aspectRatio}
        minCropBoxHeight={minCropBoxHeight}
        minCropBoxWidth={minCropBoxWidth}
        background={background}
        responsive={responsive}
        autoCropArea={autoCropArea}
        checkOrientation={checkOrientation}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
        guides={true}
      />
    </div>
  );
}

const ImageCropperMemo = React.memo(React.forwardRef(ImageCropper));

type ImageCropperModalProps = {
  title?: string;
  saveBtnTxt?: string;
  height?: number;
  width?: number;
  visible: boolean;
  submiting: boolean;
  onCrop: (data: Blob) => void;
  onCancel: () => void;
} & ImageCropperProps;

export function ImageCropperModal(props: ImageCropperModalProps) {
  const {
    title = '裁剪图片',
    saveBtnTxt = '保存图像',
    visible,
    onCancel,
    width,
    height,
    onCrop,
    submiting,
    ...cropperProps
  } = props;

  const imageCropper = useRef<ImageCropperRef>(null);

  const handleCrop = useCallback(() => {
    const data = imageCropper.current!.getCropData();
    const blob = dataURItoBlob(data);
    onCrop(blob);
  }, [onCrop]);

  return (
    <Modal
      dialogStyle={{
        maxWidth: width ? `calc(${width}px + 3.5rem)` : undefined,
      }}
      title={title}
      visible={visible}
      onCancel={onCancel}
    >
      <Modal.Body>
        <ImageCropperMemo
          ref={imageCropper}
          width={width}
          height={height}
          {...cropperProps}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button loading={submiting} className="w-100" onClick={handleCrop}>
          {saveBtnTxt}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageCropperMemo;
