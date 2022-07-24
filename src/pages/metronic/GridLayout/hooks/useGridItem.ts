import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import type { OnResize } from 'react-moveable';
import type { DragElementWrapper, DragSourceOptions } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { ActionType, useEditorDispatch, useEditorSelector } from '@asany/sunmao';

import { assign, dispatchWindowResize, sleep } from '../utils';
import useSelector, { useEventManager, useSortableDispatch } from '../GridLayoutProvider';
import type { GridItemResizeFunc, IGridItem, IGridItemInternalData } from '../typings';
import { GridItemResizeType, SortableActionType } from '../typings';

import useGridItemPositionStyle from './useGridItemPositionStyle';

type SortItemState<RT extends HTMLElement> = [
  {
    isDragging: boolean;
    className?: string;
    style: CSSProperties;
    resize: GridItemResizeFunc;
    update: (data: IGridItem) => void;
    remove: () => void;
  },
  (ref: RT) => void,
  DragElementWrapper<DragSourceOptions>,
];

export type SortItemDragStartEvent = {
  target: IGridItem;
  update: (data: IGridItem) => void;
};

interface SortItemOptions {
  sortable?: boolean;
  onDragStart?: (event: SortItemDragStartEvent) => void;
  onDragEnd?: () => void;
}

function useGridItem<T extends IGridItem, RT extends HTMLElement>(
  data: T,
  options?: SortItemOptions,
): SortItemState<RT> {
  const { sortable = true } = options || {};

  const dispatch = useSortableDispatch();
  const editorDispatch = useEditorDispatch();
  const events = useEventManager();
  const sortableId = useSelector((state) => state.id);
  const draggable = useSelector((state) => state.draggable);
  const preview = useSelector((state) => state.preview);
  const layout = useSelector((state) => state.layout.find((item) => item.id === data.id));
  const dragging = useSelector((state) => state.dragging);
  const resizing = useSelector((state) => state.resizing);
  const dataRef = useRef<IGridItem>(data);

  const ref = useRef<RT>(null);
  const style = useGridItemPositionStyle(data, layout!);

  const moveable = useEditorSelector((state) => state.ui.scena.moveable?.ref);

  const container = ref.current;

  const handleDragend = useCallback(async () => {
    const evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent(
      'mousemove',
      true,
      true,
      window,
      1,
      12,
      345,
      7,
      220,
      false,
      false,
      true,
      false,
      0,
      null,
    );
    for (let i = 0; i < 10; i++) {
      await sleep(50);
      document.dispatchEvent(evObj);
    }
  }, []);

  // TODO 修复 useDrag end 函数触发问题
  useEffect(() => {
    if (!container) {
      return;
    }
    container.addEventListener('dragend', handleDragend);
    return () => {
      container.removeEventListener('dragend', handleDragend);
    };
  }, [container, handleDragend]);

  useEffect(() => {
    if (!container) {
      return;
    }
    // console.log('useSortItem register', data.id);
    dispatch({
      type: SortableActionType.register,
      payload: {
        id: data.id,
        get _rect() {
          return container.getBoundingClientRect();
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  const [{ isDragging }, drag, connectDrag] = useDrag<IGridItemInternalData, any, any>({
    item: () => {
      editorDispatch({ type: ActionType.MoveableDisable });
      return (dataRef.current = {
        ...data,
        layout,
        deleteable: typeof data.deleteable === 'boolean' ? data.deleteable : true,
        _originalSortable: sortableId,
        _sortable: sortableId,
        get _rect() {
          return ref?.current?.getBoundingClientRect();
        },
      });
    },
    collect: (monitor) => {
      const item = monitor.getItem();
      const result = {
        isDragging: monitor.isDragging() || item?.id === data.id,
      };
      return result;
    },
    canDrag() {
      return draggable && sortable;
    },
    type: data.type,
    end: (_item, _monitor) => {
      editorDispatch({ type: ActionType.MoveableEnable });
      setTimeout(() => {
        moveable?.current?.updateRect();
      }, 60);
      const result = _monitor.getDropResult();
      if (result?.type === 'sort') {
        return;
      }
      if (result?.type === 'dustbin') {
        events.emit(SortableActionType.remove, {
          _item,
          target: _item!._sortable,
          source: _item!._originalSortable,
        });
      } else {
        events.emit(SortableActionType.reset, {
          item: _item,
          target: _item!._sortable,
          source: _item!._originalSortable,
        });
      }
    },
  });

  useEffect(() => {
    console.log('preview', !!preview);
    if (preview) {
      connectDrag(getEmptyImage(), { captureDraggingState: true });
    } else {
      connectDrag(ref);
    }
  }, [connectDrag, preview]);

  // const opacity = isDragging ? 1 : 1;
  // const containerStyle = useMemo(() => ({ opacity }), [opacity]);

  useEffect(() => {
    if (!isDragging || !!dragging) {
      return;
    }
    console.log('handleReset isDragging', data.id);
    events.emit(SortableActionType.dragging, dataRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  const handleUpdate = useCallback((_data: IGridItem) => {
    const { _rect, _sortable, _originalSortable, ...item } = _data as IGridItemInternalData;
    assign(dataRef.current, item);
  }, []);

  const handleResize = useCallback((type: GridItemResizeType, e?: any) => {
    const item = {
      ...data,
      _originalSortable: sortableId,
      _sortable: sortableId,
    };
    events.emit(SortableActionType.resize, { type, item, ...e });
    if (type === GridItemResizeType.stop) {
      dispatchWindowResize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRef = useCallback((_ref: any) => {
    (ref as any).current = _ref;
  }, []);

  useEffect(() => {
    if (!container) {
      return;
    }
    const onResizeStart: any = (/*e: CustomEvent<OnResizeStart>*/) => {
      handleResize(GridItemResizeType.start);
    };
    const onResize: any = (e: CustomEvent<OnResize>) => {
      handleResize(GridItemResizeType.resizing, { width: e.detail.width, height: e.detail.height });
      setTimeout(() => {
        moveable?.current?.updateRect();
      }, 60);
    };
    const onResizeStop: any = (/*e: CustomEvent<OnResizeEnd>*/) => {
      handleResize(GridItemResizeType.stop);
      setTimeout(() => {
        moveable?.current?.updateRect();
      }, 60);
    };
    container.addEventListener('moveable.resizeStart', onResizeStart);
    container.addEventListener('moveable.resize', onResize);
    container.addEventListener('moveable.resizeStop', onResizeStop);
    return () => {
      container.removeEventListener('moveable.resizeStart', onResizeStart);
      container.removeEventListener('moveable.resize', onResize);
      container.removeEventListener('moveable.resizeStop', onResizeStop);
    };
  }, [handleResize, container, moveable]);

  const handleRemove = useCallback(() => {
    const item = {
      ...data,
      _originalSortable: sortableId,
      _sortable: sortableId,
    };
    events.emit(SortableActionType.remove, { item, target: sortableId, source: sortableId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortableId]);

  let _style: any = { ...style };

  if (!!resizing && resizing.id === data.id && container) {
    _style = container.style.cssText
      .split(';')
      .filter((item) => !!item.trim())
      .map((item) => {
        const [key, value] = item.trim().split(': ');
        return {
          [key.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          })]: value.endsWith('px;') ? parseInt(value) : value,
        };
      })
      .reduce((l, f) => ({ ...l, ...f }), {});
  }

  return [
    {
      isDragging,
      resize: handleResize,
      update: handleUpdate,
      remove: handleRemove,
      style: _style,
      className: isDragging ? 'grid-item grid-item-dragging' : 'grid-item',
    },
    handleRef,
    drag,
  ];
}

export default useGridItem;
