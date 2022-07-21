import type { CSSProperties, RefObject } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import type { DragElementWrapper, DragSourceOptions } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

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
  RefObject<RT>,
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
  const events = useEventManager();
  const sortableId = useSelector((state) => state.id);
  const preview = useSelector((state) => state.preview);
  const layout = useSelector((state) => state.layout.find((item) => item.id === data.id));
  const dragging = useSelector((state) => state.dragging);
  const resizing = useSelector((state) => state.resizing);
  const dataRef = useRef<IGridItem>(data);

  const ref = useRef<RT>(null);
  const style = useGridItemPositionStyle(data, layout!);

  console.log('layout to style', data.id, layout, style);

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
    const timer = setInterval(() => {
      if (!ref.current) {
        return;
      }
      clearInterval(timer);
      ref.current.addEventListener('dragend', handleDragend);
    }, 100);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // console.log('useSortItem register', data.id);
    dispatch({
      type: SortableActionType.register,
      payload: {
        id: data.id,
        get _rect() {
          return ref.current?.getBoundingClientRect();
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [{ isDragging }, drag, connectDrag] = useDrag<IGridItemInternalData, any, any>({
    item: () => {
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
      return sortable;
    },
    type: data.type,
    end: (_item, _monitor) => {
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

  const handleResize = useCallback((type: GridItemResizeType, e: any) => {
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

  if (!!resizing && resizing.id === data.id && ref.current) {
    _style = ref.current.style.cssText
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
    ref,
    drag,
  ];
}

export default useGridItem;
