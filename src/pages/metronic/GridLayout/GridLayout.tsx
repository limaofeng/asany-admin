import type { CSSProperties, MutableRefObject } from 'react';
import { useMemo } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import { isEqual } from 'lodash';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { isForwardRef } from 'react-is';

import type { SortItemProps } from './GridItem';
import GridItem from './GridItem';
import SortableContainer from './GridLayoutContainer';
import useSortableSelector, {
  GridLayoutProvider,
  useEventManager,
  useSortableDispatch,
} from './GridLayoutProvider';
import type {
  CompactType,
  DragPreviewOptions,
  GridItemContentRender,
  GridItemContentRenderFunc,
  GridItemResizeEvent,
  GridLayoutChange,
  IGridItem,
  IGridItemInternalData,
  IGridItemLayout,
  SortableChange,
  SortableChangeEvent,
  SortableDropEvent,
  SortableMoveInEvent,
  SortableMoveOutEvent,
  SortableRemoveEvent,
  SortableTag,
} from './typings';
import { GridItemResizeType, SortableActionType, SortableChangeEventType } from './typings';
import GridItemDragLayer from './GridItemDragLayer';

import './style/index.scss';

function buildItems(items: IGridItem[] | undefined, children: React.ReactNodeArray | undefined) {
  if (items) {
    return items;
  }
  const retItems: IGridItem[] = [];
  const nodes = React.Children.toArray(children) as React.ReactElement<SortItemProps>[];
  for (let i = 0; i < nodes.length; i += 1) {
    const props = nodes[i].props;
    retItems.push({ ...props.data });
  }
  return retItems;
}

function buildItemRender(
  itemRender: GridItemContentRender | GridItemContentRenderFunc | undefined,
  children: React.ReactNode[] | React.ReactNode | undefined,
): GridItemContentRender {
  if (!itemRender && (!children || !React.Children.count(children))) {
    throw new Error('GridLayout 的 itemRender 及 children 不能同时为 NULL');
  }
  if (!!itemRender) {
    if (isForwardRef(React.createElement(itemRender))) {
      return itemRender as GridItemContentRender;
    }
    return React.forwardRef((props, ref) => itemRender(props, ref));
  }
  const nodes = React.Children.toArray(children) as React.ReactElement<SortItemProps>[];
  const tempNode = nodes[0];
  return React.forwardRef((props, ref) => React.cloneElement(tempNode, { ...props, ref } as any));
}

const GridLayoutCore = React.forwardRef(function (
  {
    itemRender,
    onDragStart,
    onDragStop,
    onChange,
    onLayoutChange,
    layout: _prevLayout,
    preview,
    ...props
  }: SortableCoreProps,
  ref: MutableRefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void) | null,
) {
  const _items = useSortableSelector((state) => state.items);
  const _layout = useSortableSelector((state) => state.layout);
  const _id = useSortableSelector((state) => state.id);

  const temp = useRef({ id: _id, items: _items, layout: _layout, prevLayout: _prevLayout });

  const events = useEventManager();
  const dispatch = useSortableDispatch();

  temp.current.id = _id;
  temp.current.items = _items;
  temp.current.layout = _layout;
  temp.current.prevLayout = _prevLayout;

  useEffect(() => {
    const { layout, prevLayout } = temp.current;
    if (isEqual(prevLayout, layout)) {
      return;
    }
    onLayoutChange && onLayoutChange(layout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback((event: SortableChangeEvent) => {
    const { items, layout, prevLayout } = temp.current;
    onLayoutChange && !isEqual(prevLayout, layout) && onLayoutChange(layout);
    onChange &&
      onChange(
        items.map(({ _originalSortable, _sortable, _rect, ...item }) => item),
        layout,
        event,
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoveOut = useCallback((event: SortableMoveOutEvent) => {
    const { id } = temp.current;
    const { item } = event;
    if (item._sortable != id) {
      return;
    }
    item._sortable = item._originalSortable;
    dispatch({ type: SortableActionType.remove, payload: item });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoveIn = useCallback((event: SortableMoveInEvent) => {
    const { id } = temp.current;
    const { source, target } = event;
    if (source == id) {
      dispatch({ type: SortableActionType.remove, payload: event.item });
    } else if (target == id) {
      event.item._sortable = id;
      // console.log('isOverCurrent handleMoveIn', id, event);
      dispatch({
        type: SortableActionType.moveIn,
        payload: {
          layout: event.layout,
          item: event.item,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResize = useCallback((event: GridItemResizeEvent) => {
    if (event.type === GridItemResizeType.start) {
      dispatch({
        type: SortableActionType.resizing,
        payload: event.item,
      });
    } else if (event.type === GridItemResizeType.stop) {
      dispatch({
        type: SortableActionType.resizeStop,
        payload: event.item,
      });
    } else {
      dispatch({
        type: SortableActionType.resize,
        payload: { id: event.item.id, width: event.width, height: event.height },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrop = useCallback((event: SortableDropEvent) => {
    const { id } = temp.current;
    const { source, target } = event;
    if (source == target && source == id) {
      handleChange({ ...event, type: SortableChangeEventType.SORT });
    } else if (source == id) {
      handleChange({ ...event, type: SortableChangeEventType.DRAG });
    } else if (target == id) {
      handleChange({ ...event, type: SortableChangeEventType.DROP });
    }
    dispatch({ type: SortableActionType.drop });
    onDragStop && onDragStop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragging = useCallback((data: IGridItemInternalData) => {
    // console.log('handleReset handleDragging', id, data);
    dispatch({ type: SortableActionType.dragging, payload: data });
    onDragStart && onDragStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: SortableActionType.reset });
    onDragStop && onDragStop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = useCallback((event: SortableRemoveEvent) => {
    const { id } = temp.current;
    const { item } = event;
    if (item._originalSortable == id) {
      dispatch({ type: SortableActionType.remove, payload: item });
      handleChange({ ...event, type: SortableChangeEventType.REMOVE });
    }
    if (item._sortable == id && item._originalSortable !== item._sortable) {
      handleReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    events.on(SortableActionType.drop, handleDrop);
    events.on(SortableActionType.reset, handleReset);
    events.on(SortableActionType.remove, handleRemove);
    events.on(SortableActionType.moveIn, handleMoveIn);
    events.on(SortableActionType.moveOut, handleMoveOut);
    events.on(SortableActionType.dragging, handleDragging);
    events.on(SortableActionType.resize, handleResize);
    return () => {
      events.off(SortableActionType.drop, handleDrop);
      events.off(SortableActionType.reset, handleReset);
      events.off(SortableActionType.remove, handleRemove);
      events.off(SortableActionType.moveIn, handleMoveIn);
      events.off(SortableActionType.moveOut, handleMoveOut);
      events.off(SortableActionType.dragging, handleDragging);
      events.on(SortableActionType.resize, handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = useCallback(() => {
    dispatch({ type: SortableActionType.moving, payload: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleComplete = useCallback(() => {
    dispatch({ type: SortableActionType.moving, payload: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const previewOptions = useMemo(() => {
    if (!preview) {
      return undefined;
    }
    if (typeof preview == 'function') {
      return { render: preview };
    }
    return preview;
  }, [preview]);

  return (
    <SortableContainer {...props} ref={ref}>
      <Flipper
        className="grid-layout-container"
        spring={{ stiffness: 987, damping: 63 }}
        onStart={handleStart}
        onComplete={handleComplete}
        flipKey={_items.map((item) => item.id).join(',')}
      >
        {_items.map((item) => (
          <Flipped key={item.id} flipId={item.id}>
            <GridItem key={item.id} itemRender={itemRender} data={item} />
          </Flipped>
        ))}
        {previewOptions && <GridItemDragLayer {...previewOptions} />}
      </Flipper>
    </SortableContainer>
  );
});

export interface GridLayoutProps {
  /**
   * 支持拖入 React-Dnd 的 type
   */
  droppable?: boolean;
  /**
   * React-Dnd Drop 的 accept 默认为 sortable-card
   */
  accept?: string[];
  /**
   * Sortable 组件渲染的标签， 默认为： Div
   */
  tag?: SortableTag;
  /**
   * 子元素
   */
  children?: React.ReactNodeArray;
  /**
   * CSS ClassName
   */
  className?: string;
  /**
   * 没有数据时的， 默认显示组件
   */
  empty?: React.ReactElement;
  /**
   * 排序改变时触发，drop 及 remove 也会触发该函数
   */
  onChange: SortableChange;

  layout: IGridItemLayout[];

  onLayoutChange?: GridLayoutChange;

  items?: IGridItem[];

  itemRender?: GridItemContentRender | GridItemContentRenderFunc;

  onClick?: (e: React.MouseEvent) => void;
  /**
   * 元素移入
   * @experimental
   */
  onDragover?: (item: IGridItem) => void;
  /**
   * 元素移出
   * @experimental
   */
  onDragout?: (item: IGridItem) => void;
  autoSize?: boolean;
  style?: CSSProperties;
  preventCollision?: boolean;
  compactType?: CompactType;
  margin?: [number, number];
  cols?: number;
  rowHeight?: number;
  maxRows?: number;
  verticalCompact?: boolean;
  containerPadding?: [number, number];
  onDragStart?: () => void;
  onDragStop?: () => void;
  /**
   * 自定义预览
   */
  preview?: DragPreviewOptions;
}

const defaultAccept = ['gridlayout-card'];

function GridLayout(
  props: GridLayoutProps,
  ref: MutableRefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void) | null,
) {
  const {
    droppable = false,
    onChange,
    onClick,
    tag = 'div',
    className,
    layout,
    children,
    accept = defaultAccept,
    items: propsItems,
    itemRender,
    style,
    preventCollision = false,
    verticalCompact = true,
    compactType = 'vertical',
    margin = [10, 10],
    cols = 12,
    rowHeight = 30,
    maxRows = Infinity,
    containerPadding = margin,
    onLayoutChange,
    onDragStart,
    onDragStop,
    autoSize,
    preview,
  } = props;
  const items = buildItems(propsItems, children);
  const [innerItemRender] = useState<GridItemContentRender>(buildItemRender(itemRender, children));

  return (
    <GridLayoutProvider
      preview={!!preview}
      items={items}
      layout={layout}
      verticalCompact={verticalCompact}
      preventCollision={preventCollision}
      compactType={compactType}
      margin={margin}
      cols={cols}
      rowHeight={rowHeight}
      maxRows={maxRows}
      containerPadding={containerPadding}
      deps={[className, layout, autoSize]}
    >
      <GridLayoutCore
        droppable={droppable}
        tag={tag}
        ref={ref}
        onClick={onClick}
        className={classnames('grid-layout', className)}
        style={style}
        accept={accept}
        autoSize={!!autoSize}
        layout={layout}
        onChange={onChange}
        onLayoutChange={onLayoutChange}
        itemRender={innerItemRender}
        onDragStart={onDragStart}
        onDragStop={onDragStop}
        preview={preview}
      />
    </GridLayoutProvider>
  );
}

interface SortableCoreProps {
  itemRender: GridItemContentRender;
  droppable: boolean;
  accept: string[];
  tag: SortableTag;
  className?: string;
  style?: CSSProperties;
  layout: IGridItemLayout[];
  onChange?: SortableChange;
  onLayoutChange?: GridLayoutChange;
  onClick?: (e: React.MouseEvent) => void;
  onDragStart?: () => void;
  onDragStop?: () => void;
  autoSize: boolean;
  preview?: DragPreviewOptions;
}

export default React.forwardRef(GridLayout);
