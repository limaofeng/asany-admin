import type { CSSProperties } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import type { DropTargetMonitor, XYCoord } from 'react-dnd';
import { useDrop } from 'react-dnd';

import useSortableSelector, {
  useEventManager,
  useSortableDispatch,
} from './GridLayoutProvider';
import useHTMLElementResize from './hooks/useHTMLElementResize';
import type {
  IGridItemInternalData,
  IGridItemLayout,
  PartialPosition,
  SortLog,
  SortableAction,
  SortableDropCollectedProps,
  SortableDropResult,
  SortableTag,
} from './typings';
import { SortableActionType } from './typings';
import { bottom, getMonitorCoord } from './utils';

interface GridLayoutContainerTemp {
  lastLog?: SortLog;
  items: IGridItemInternalData[];
  moving?: boolean;
  item?: IGridItemInternalData;
  monitor?: DropTargetMonitor;
  id: string;
}

interface GridLayoutContainerProps {
  droppable: boolean;
  accept: string[];
  style?: CSSProperties;
  tag: SortableTag;
  children: React.ReactNode;
  autoSize: boolean;
  className?: string;
  removable?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

function GridLayoutContainer(
  props: GridLayoutContainerProps,
  externalRef: any,
) {
  const { tag, className, style, autoSize, children, accept, onClick } = props;

  const dispatch = useSortableDispatch();
  const events = useEventManager();

  const id = useSortableSelector((state) => state.id);
  const items = useSortableSelector((state) => state.items);
  const gridlayout = useSortableSelector((state) => state.layout);
  const containerPadding = useSortableSelector(
    (state) => state.containerPadding,
  );
  const rowHeight = useSortableSelector((state) => state.rowHeight);
  const margin = useSortableSelector((state) => state.margin);
  const moving = useSortableSelector((state) => state.moving);
  const [lastLog] = useSortableSelector((state) => state.logs.slice(-1));
  const [containerHeight, setContainerHeight] = useState<string | undefined>();

  const temp = useRef<GridLayoutContainerTemp>({ id, items, lastLog });

  temp.current.lastLog = lastLog;

  const pendingUpdateFn = useRef<SortableAction>();
  const requestedFrame = useRef<any>();

  useEffect(
    () => () => {
      if (requestedFrame.current !== undefined) {
        cancelAnimationFrame(requestedFrame.current);
      }
    },
    [],
  );

  const drawFrame = useCallback((): void => {
    dispatch(pendingUpdateFn.current!);
    pendingUpdateFn.current = undefined;
    requestedFrame.current = undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scheduleUpdate = useCallback(
    async (updateFn: SortableAction) => {
      pendingUpdateFn.current = updateFn;
      if (!requestedFrame.current) {
        requestedFrame.current = requestAnimationFrame(drawFrame);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const move = useCallback(
    function (_id: string, position: PartialPosition) {
      const action = {
        type: SortableActionType.move,
        payload: { id: _id, position },
      };
      scheduleUpdate(action);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const moveOut = useCallback(
    (item: IGridItemInternalData) => {
      events.emit(SortableActionType.moveOut, { item });
    },
    [events],
  );

  const moveIn = useCallback(
    (layout: IGridItemLayout, item: IGridItemInternalData) => {
      const { id: _id } = temp.current;
      events.emit(SortableActionType.moveIn, {
        layout,
        item,
        target: _id,
        source: item._sortable,
      });
    },
    [events],
  );

  const buildExternalRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (typeof externalRef === 'function') {
      return externalRef(ref);
    }
    return ref;
  };

  const ref = useRef<HTMLDivElement>(null);

  const [{ item, isOverCurrent, canDrop, monitor }, drop] = useDrop<
    IGridItemInternalData,
    SortableDropResult,
    SortableDropCollectedProps
  >({
    accept,
    drop(_item) {
      if (!isOverCurrent) {
        return;
      }
      events.emit(SortableActionType.drop, {
        item: _item,
        target: id,
        source: _item._originalSortable,
      });
      return { type: 'sort', sortable: id, id: _item.id };
    },
    collect: (_monitor) => {
      const data: SortableDropCollectedProps = {
        item: _monitor.getItem(),
        isOver: _monitor.isOver(),
        isOverCurrent: _monitor.isOver({ shallow: true }),
        canDrop: _monitor.canDrop(),
        monitor: _monitor,
      };
      return data;
    },
    hover: async (_item, _monitor) => {
      // console.log('hover isOverCurrent', isOverCurrent);
      if (!isOverCurrent) {
        return;
      }
      const clientOffset = _monitor.getSourceClientOffset() as XYCoord;
      if (!clientOffset) {
        return;
      }
      const _moveItem = items.find((data) => data.id === _item.id);
      if (!_moveItem?._rect) {
        return;
      }
      const itemRect = _moveItem._rect;
      const moveItem = getMonitorCoord(ref, itemRect, clientOffset);
      const newPosition: PartialPosition = {
        top: moveItem.top,
        left: moveItem.left,
      };
      move(item.id, newPosition);
    },
  });

  temp.current.id = id;
  temp.current.item = item;
  temp.current.monitor = monitor;
  temp.current.items = items;
  temp.current.moving = moving;

  useEffect(() => {
    const { item: _item, id: _id, monitor: _monitor } = temp.current;
    if (!_item || !canDrop || !_monitor) {
      return;
    }
    if (isOverCurrent && _id === _item._sortable) {
      return;
    }
    // console.log('isOverCurrent', id, isOverCurrent, item);
    const [rootId] = _id.split('/');
    if (isOverCurrent) {
      // console.log('isOverCurrent', id, 'insertIndex', insertIndex);
      const { layout } = _item;
      moveIn({ ...layout!, id: _item.id }, _item);
    } else if (
      !_item._originalSortable?.startsWith(rootId) &&
      _item._sortable == rootId &&
      rootId == _id
    ) {
      // console.log('isOverCurrent moveOut', id, item);
      moveOut(_item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOverCurrent]);

  let backgroundColor = undefined;
  if (canDrop) {
    backgroundColor = 'rgba(68, 171, 255, 0.05)';
  }

  const { width } = useHTMLElementResize(ref);

  useEffect(() => {
    if (!width) {
      return;
    }
    dispatch({ type: SortableActionType.containerWidth, payload: width });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    if (!autoSize) return setContainerHeight(undefined);
    const nbRow = bottom(gridlayout);
    const containerPaddingY = containerPadding
      ? containerPadding[1]
      : margin[1];
    setContainerHeight(
      nbRow * rowHeight! +
        (nbRow - 1) * margin[1] +
        containerPaddingY * 2 +
        'px',
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSize]);

  // eslint-disable-next-line react/no-children-prop
  return React.createElement(tag, {
    ref: drop(buildExternalRef(ref)),
    children,
    className: classnames(className),
    onClick: onClick,
    style: { ...style, backgroundColor, height: containerHeight },
  });
}

export default React.forwardRef(GridLayoutContainer);
