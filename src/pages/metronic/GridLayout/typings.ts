import type {
  CSSProperties,
  FunctionComponent,
  MutableRefObject,
  ReactElement,
  ReactNode,
} from 'react';

import type { EventEmitter } from 'events';

import type { DragElementWrapper, DragSourceOptions, DropTargetMonitor } from 'react-dnd';

export type SortableLayoutDirection = 'horizontal' | 'vertical';

export type SortableDispatchEvent = (type: SortableEventType, payload?: any) => void;

export type SortableTag = 'ul' | 'div' | FunctionComponent<any>;

export enum SortableEventType {
  CHANGE = 'change',
  RESET = 'reset',
  DROP = 'drop',
  BUILD_REF = 'build_ref',
  UNBUILD_REF = 'unbuild_ref',
  OVER = 'OVER',
  DRAGGING = 'DRAGGING',
}

export enum SortableChangeEventType {
  /**
   * 移入
   */
  DROP = 'drop',
  /**
   * 删除
   */
  REMOVE = 'remove',
  /**
   * 排序
   */
  SORT = 'sort',
  /**
   * 移出
   */
  DRAG = 'drag',
}

export type IGridItemLayout = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  minH?: number;
  maxW?: number;
  maxH?: number;
  isDraggable?: boolean;
  static?: boolean;
  moved?: boolean;
};

export type AnimatedProps = {
  key: string;
  ['data-flip-config']: string;
  ['data-flip-id']: string;
  [key: string]: string;
};

export interface IGridLayoutPositionParams {
  cols: number;
  containerWidth: number;
  containerPadding: [number, number];
  margin: [number, number];
  maxRows: number;
  rowHeight: number;
}

export interface IGridItem {
  id: string;
  type: string;
  deleteable?: boolean;
}

export interface IGridItemInternalData extends IGridItem {
  layout?: IGridItemLayout;
  _originalSortable: string;
  _sortable?: string;
  _rect?: DOMRect;
}

export type SortableChangeEvent = {
  type: SortableChangeEventType;
  item: IGridItem;
};

export type SortableDropResult = {
  id: string;
  sortable: string;
};

export interface SortableDropCollectedProps {
  item: IGridItemInternalData;
  isOver: boolean;
  canDrop: boolean;
  isOverCurrent: boolean;
  monitor: DropTargetMonitor;
}

export interface SortableMoveOutEvent {
  item: IGridItemInternalData;
}

export interface SortableRemoveEvent {
  item: IGridItemInternalData;
}

export interface SortableMoveInEvent {
  /**
   * 插入到 target 中的位置
   */
  layout: IGridItemLayout;
  /**
   * 拖入数据
   */
  item: IGridItemInternalData;
  /**
   * 移入的 sortable 对象 ID
   */
  target: string;
  /**
   * 原 sortable 对象 ID
   */
  source: string;
}

export interface SortableResetEvent {
  /**
   * 拖入数据
   */
  item: IGridItemInternalData;
  /**
   * 移入的 sortable 对象 ID
   */
  target: string;
  /**
   * 原 sortable 对象 ID
   */
  source: string;
}

export enum GridItemResizeType {
  resizing = 'resizing',
  start = 'start',
  stop = 'stop',
}

export interface GridItemResizeEvent {
  type: GridItemResizeType;
  item: IGridItemInternalData;
  width: number;
  height: number;
}

export interface SortableDropEvent {
  /**
   * 拖入数据
   */
  item: IGridItemInternalData;
  /**
   * 移入的 sortable 对象 ID
   */
  target: string;
  /**
   * 原 sortable 对象 ID
   */
  source: string;
}

export enum SortableActionType {
  init = 'init',
  register = 'register',
  UPDATE_ID = 'UPDATE_ID',
  drop = 'drop',
  move = 'move',
  moveIn = 'moveIn',
  moveOut = 'moveOut',
  remove = 'remove',
  resize = 'resize',
  reset = 'reset',
  resizing = 'resizing',
  dragging = 'dragging',
  moving = 'moving',
  containerWidth = 'containerWidth',
  resizeStop = 'resizeStop',
  // 自定拖拽预览
  UPDATE_PREVIEW = 'UPDATE_PREVIEW',
}

export interface SortableAction {
  type: SortableActionType;
  payload?: any;
}

export type SortableUnsubscribeFunc = () => void;

export type SortableSubscribeCallback = () => void;

export type SortableDispatchWithoutAction = (action: SortableAction) => void;

export type SortableSubscribeFunc = (
  callback: SortableSubscribeCallback,
) => SortableUnsubscribeFunc;

export interface ISortableContext {
  eventEmitter: EventEmitter;
  getState: () => IGridLayoutState;
  subscribe: SortableSubscribeFunc;
  dispatch: SortableDispatchWithoutAction;
}

export type SortableChange = (
  value: IGridItem[],
  layout: IGridItemLayout[],
  event: SortableChangeEvent,
) => void;

export type GridLayoutChange = (layout: IGridItemLayout[]) => void;

export type GridItemResizeFunc = (
  type: GridItemResizeType,
  e?: { width: number; height: number },
) => void;

export interface GridItemContentProps<T extends IGridItem = IGridItem> {
  data: T;
  animated: AnimatedProps;
  remove: () => void;
  resize: GridItemResizeFunc;
  update: (data: T & Record<string, any>) => void;
  className?: string;
  style?: CSSProperties;
  drag: DragElementWrapper<DragSourceOptions>;
}

export type GridItemContentRenderFunc = (
  props: GridItemContentProps,
  ref: MutableRefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void) | null,
) => React.ReactElement;

export type GridItemContentRender = React.ForwardRefExoticComponent<
  GridItemContentProps & React.RefAttributes<HTMLElement>
>;

export type GridItemRender<T extends IGridItem> =
  | GridItemContentRender
  | React.ReactElement<GridItemContentProps<T>>
  | GridItemContentRenderFunc;

export interface SortLog {
  source: string;
  sourceIndex: number;
  target: string;
  targetIndex: number;
}

export interface IGridLayoutState {
  containerWidth: number;
  preventCollision: boolean;
  verticalCompact: boolean;
  compactType: CompactType;
  id: string;
  resizing?: IGridItemInternalData;
  dragging?: IGridItemInternalData;
  backup?: {
    layout: IGridItemLayout[];
    items: IGridItemInternalData[];
  };
  layout: IGridItemLayout[];
  items: IGridItemInternalData[];
  logs: SortLog[];
  emitter: EventEmitter;
  moving: boolean;
  accept: string[];
  margin: [number, number];
  cols: number;
  rowHeight: number;
  maxRows: number;
  containerPadding: [number, number];
  preview: boolean;
}

export type Relation = 'before' | 'after' | 'none';

// export type LayoutItem = {
//   w: number;
//   h: number;
//   x: number;
//   y: number;
//   i: string;
//   minW?: number;
//   minH?: number;
//   maxW?: number;
//   maxH?: number;
//   moved?: boolean;
//   static?: boolean;
//   isDraggable?: boolean;
//   isResizable?: boolean;
// };
export type Layout = IGridItemLayout[];
export type Position = {
  left: number;
  top: number;
  width: number;
  height: number;
};
export type ReactDraggableCallbackData = {
  node: HTMLElement;
  x?: number;
  y?: number;
  deltaX: number;
  deltaY: number;
  lastX?: number;
  lastY?: number;
};

export type PartialPosition = { left: number; top: number };
export type DroppingPosition = { x: number; y: number; e: Event };
export type Size = { width: number; height: number };
export type GridDragEvent = {
  e: Event;
  node: HTMLElement;
  newPosition: PartialPosition;
};
export type GridResizeEvent = { e: Event; node: HTMLElement; size: Size };
export type DragOverEvent = MouseEvent & {
  nativeEvent: {
    layerX: number;
    layerY: number;
    target: {
      className: string;
    };
  };
};

type REl = ReactElement<any>;
export type ReactChildren = REl[];

// All callbacks are of the signature (layout, oldItem, newItem, placeholder, e).
export type EventCallback = (
  laylout: Layout,
  oldItem: IGridItemLayout,
  newItem: IGridItemLayout,
  placeholder: IGridItemLayout,
  e: Event,
  html: HTMLElement,
) => void;

export type CompactType = 'horizontal' | 'vertical';

export interface ICoord {
  top: number;
  height: number;
  left: number;
  width: number;
  direction: ({
    y,
    x,
    h,
    w,
  }: {
    y: number;
    x: number;
    h: number;
    w: number;
  }) => // layout: SortableLayout,
  // detection: SortableDirection
  Relation;
  compare: (other: ICoord) => Relation;
}

export type SortableDirection = 'horizontal' | 'vertical';

export type SortableLayout = 'list' | 'grid';

export type DragPreviewRenderer = (
  data: IGridItem & Record<string, any>,
  options: {
    style: CSSProperties;
    sortableId: string;
    type: string;
    rect: DOMRect;
  },
) => ReactNode;

export type DragPreviewOptions =
  | DragPreviewRenderer
  | {
      render: DragPreviewRenderer;
      axisLocked?: boolean;
      snapToGrid?: boolean;
      container?: Element | DocumentFragment;
    };
