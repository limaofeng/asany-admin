export interface SetDataOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rotate?: number;
  scaleX?: number;
  scaleY?: number;
}

export type ViewMode = 0 | 1 | 2 | 3;

interface ReactCropperDefaultOptions {
  scaleX?: number;
  scaleY?: number;
  enable?: boolean;
  zoomTo?: number;
  rotateTo?: number;
}

export type CropOptions = {
  aspectRatio?: number;
  autoCrop?: boolean;
  autoCropArea?: number;
  background?: boolean;
  center?: boolean;
  checkCrossOrigin?: boolean;
  checkOrientation?: boolean;
  cropBoxMovable?: boolean;
  cropBoxResizable?: boolean;
  data?: SetDataOptions;
  dragMode?: 'crop' | 'move' | 'none';
  guides?: boolean;
  highlight?: boolean;
  initialAspectRatio?: number;
  minCanvasHeight?: number;
  minCanvasWidth?: number;
  minContainerHeight?: number;
  minContainerWidth?: number;
  minCropBoxHeight?: number;
  minCropBoxWidth?: number;
  modal?: boolean;
  movable?: boolean;
  preview?: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | string;
  responsive?: boolean;
  restore?: boolean;
  rotatable?: boolean;
  scalable?: boolean;
  toggleDragModeOnDblclick?: boolean;
  viewMode?: ViewMode;
  wheelZoomRatio?: number;
  zoomOnTouch?: boolean;
  zoomOnWheel?: boolean;
  zoomable?: boolean;
} & ReactCropperDefaultOptions;
