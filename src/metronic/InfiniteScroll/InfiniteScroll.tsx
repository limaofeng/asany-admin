import type { CSSProperties } from 'react';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import { Shortcuts } from '@asany/shortcuts';
import classnames from 'classnames';
import type OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { uuid } from '../utils';

import './style.scss';

export type ShortcutEvent = {
  viewport: {
    start: number;
    end: number;
    height: number;
  };
  scrollbar: OverlayScrollbars;
};

export type RowRendererParams = {
  key: string;
  index: number;
  isScrolling: boolean;
  isVisible: boolean;
  isActive?: boolean;
  style: CSSProperties;
};

type RowHeightFunc = (params: { index: number }) => number;

export type RowRenderer = (params: RowRendererParams) => React.ReactNode;

export type NoContentRenderer = () => React.ReactNode;

export type ScrollEvent = {
  index: number;
};

export type ScrollRowDataEvent = RowData;

type InfiniteScrollProps = {
  className?: string;
  height?: number;
  rowCount: number;
  overscanRowCount?: number;
  rowHeight: number | RowHeightFunc;
  noRowsRenderer?: NoContentRenderer;
  rowRenderer: RowRenderer;
  scrollToIndex?: number;
  onScroll?: (e: ScrollEvent) => void;
  onScrollToIndex?: (e: ScrollRowDataEvent) => Promise<void>;
  onShortcut?: (action: string, e: ShortcutEvent) => void;
};

type RowData = {
  key: string;
  index: number;
  top: number;
  height: number;
  bottom: number;
};

type InfiniteScrollState = {
  index: number;
  height?: number;
  rowHeight: number | RowHeightFunc;
  rowCount: number;
  overscanRowCount: number;
  items: Map<number, RowData>;
};

function DEFAULT_NoRowsRenderer() {
  return null;
}

export type InfiniteScrollRef = {
  viewport: {
    start: number;
    end: number;
    height: number;
  };
  scrollTo: (y: number) => void;
};

function InfiniteScroll(props: InfiniteScrollProps, ref: React.ForwardedRef<InfiniteScrollRef>) {
  const {
    className,
    rowHeight,
    noRowsRenderer = DEFAULT_NoRowsRenderer,
    onScrollToIndex,
    rowCount,
    rowRenderer,
  } = props;

  const scrollbar = useRef<OverlayScrollbarsComponent>(null);
  const state = useRef<InfiniteScrollState>({
    rowCount,
    rowHeight,
    items: new Map(),
    index: props.scrollToIndex || -1,
    overscanRowCount: props.overscanRowCount || 5,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const temp = useRef<{
    timer?: NodeJS.Timeout;
    items: RowRendererParams[];
    startIndex: number;
    endIndex: number;
  }>({ items: [], startIndex: 0, endIndex: 0 });

  state.current.rowCount = rowCount;

  const innerHeight = useMemo(() => {
    if (!rowCount) {
      temp.current.startIndex = 0;
      temp.current.endIndex = 0;
      temp.current.items.length = 0;
      state.current.index = -1;
      state.current.items.clear();
    } else if (state.current.items.size) {
      while (state.current.items.size > rowCount) {
        state.current.items.delete(state.current.items.size - 1);
      }
      if (state.current.index >= rowCount) {
        state.current.index = rowCount - 1;
      }
    }
    const items = state.current.items;
    if (typeof rowHeight == 'number') {
      for (let i = 0; i < rowCount; i++) {
        const key = items.has(i) ? items.get(i)!.key : uuid();
        items.set(i, {
          key,
          index: i,
          height: rowHeight,
          top: rowHeight * i,
          bottom: rowHeight * (i + 1),
        });
      }
      return rowHeight * rowCount;
    }
    let _innerHeight = 0;
    for (let i = 0; i < rowCount; i++) {
      const _height = rowHeight({ index: i });
      items.set(i, {
        key: uuid(),
        index: i,
        top: _innerHeight,
        height: _height,
        bottom: _innerHeight + _height,
      });
      _innerHeight += _height;
    }
    return _innerHeight;
  }, [rowHeight, rowCount]);

  const setupItems = useCallback(() => {
    const scroll = scrollbar.current?.osInstance()?.scroll();

    if (!scroll) {
      return;
    }

    if (!state.current.rowCount) {
      return;
    }

    const start = scroll.position.y;
    const end = scroll.position.y + state.current.height!;

    const overscanRowCount = state.current.overscanRowCount;

    const items = Array.from(state.current.items.values());

    const startIndex = items.findIndex((item) => item.top >= start || item.bottom >= start);
    let endIndex = items
      .slice(startIndex)
      .findIndex((item) => item.bottom >= end || item.top >= end);
    endIndex = endIndex == -1 ? items.length : startIndex + endIndex + 1;

    temp.current.startIndex = startIndex;
    temp.current.endIndex = endIndex;
    temp.current.timer && clearTimeout(temp.current.timer);
    temp.current.timer = setTimeout(() => {
      temp.current.items = items
        .slice(
          Math.max(0, startIndex - overscanRowCount),
          Math.min(items.length, endIndex + overscanRowCount),
        )
        .map((item) => ({
          ...item,
          isScrolling: false,
          isVisible: item.index >= startIndex && item.index < endIndex,
          style: { height: item.bottom - item.top, top: item.top + 1, position: 'absolute' },
        }));
      forceRender();
    }, 30);
  }, []);

  const handleResize = useCallback(() => {
    const _target = scrollbar.current?.osTarget();
    if (!_target) {
      return;
    }
    state.current.height = _target!.clientHeight;
    temp.current.timer && clearTimeout(temp.current.timer);
    temp.current.timer = setTimeout(() => {
      state.current.height = _target!.clientHeight;
      setupItems();
    }, 300);
  }, [setupItems]);

  const handleScroll = useCallback(() => {
    setupItems();
  }, [setupItems]);

  const scrollToIndex = useCallback(async (index: number) => {
    const { startIndex, endIndex } = temp.current;

    if (index == state.current.index || index > state.current.rowCount) {
      return;
    }

    const scrollbarInstance = scrollbar.current!.osInstance()!;
    const height = state.current.height!;

    const scrollY = scrollbarInstance.scroll().position.y;
    let newScrollY = scrollY;

    const direction = Math.abs(startIndex - index) > Math.abs(endIndex - index) ? 'DOWN' : 'UP';

    const data = state.current.items.get(index)!;

    if (data.top > scrollY && data.bottom < scrollY + height) {
      newScrollY = scrollY;
    } else if (state.current.index == -1) {
      newScrollY = data.top;
    } else if (direction == 'DOWN' && scrollY < data.bottom - height) {
      newScrollY = data.bottom - height;
    } else if (direction == 'UP' && scrollY > data.top) {
      newScrollY = data.top;
    }

    scrollY != newScrollY && scrollbarInstance.scroll(newScrollY);

    state.current.index = index;
    forceRender();
  }, []);

  const handleShortcut = useCallback(
    (action: string, event?: React.KeyboardEvent) => {
      event && event.preventDefault();
      const { index, rowCount: _rowCount } = state.current;
      if (!_rowCount || index == -1) {
        return;
      }
      let newIndex = index;
      if (action == 'NEXT') {
        newIndex = Math.min(_rowCount - 1, index + 1);
      } else if (action == 'PREVIOUS') {
        newIndex = Math.max(0, index - 1);
      }

      const { startIndex, endIndex } = temp.current;

      // 如果原选中元素不在可见范围
      if (!(index >= startIndex - 1 && index <= endIndex)) {
        if (action == 'NEXT') {
          newIndex = startIndex;
        } else if (action == 'PREVIOUS') {
          newIndex = endIndex - 1;
        }
      }

      if (newIndex == state.current.index) {
        return;
      }

      scrollToIndex(newIndex);

      onScrollToIndex && onScrollToIndex(state.current.items.get(newIndex)!);
    },
    [scrollToIndex, onScrollToIndex],
  );

  useEffect(() => {
    if (
      props.scrollToIndex == -1 ||
      props.scrollToIndex == undefined ||
      state.current.index == props.scrollToIndex
    ) {
      return;
    }
    scrollToIndex(props.scrollToIndex);
  }, [props.scrollToIndex, scrollToIndex]);

  useImperativeHandle(ref, () => ({
    get viewport() {
      const scroll = scrollbar.current!.osInstance()!.scroll();
      return {
        start: scroll.position.y,
        end: scroll.position.y + scroll.trackLength.y,
        height: scroll.trackLength.y,
      };
    },
    scrollTo: (y: number) => {
      scrollbar.current?.osInstance()?.scroll(y);
    },
  }));

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    process.nextTick(handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    setupItems();
  }, [setupItems, props.height, innerHeight, rowCount]);

  const { items } = temp.current;

  // console.log('刷新 xxxx', items, state.current);

  return (
    <OverlayScrollbarsComponent
      ref={scrollbar}
      style={{ height: props.height }}
      className={classnames(className, 'custom-scrollbar infinite-scroll')}
      options={{
        scrollbars: { autoHide: 'scroll' },
        callbacks: {
          onScroll: handleScroll,
        },
      }}
    >
      <Shortcuts
        tag={
          <div
            style={{ height: rowCount ? innerHeight : undefined }}
            className={classnames('infinite-scroll-inner')}
          />
        }
        name="GENERAL"
        handler={handleShortcut}
      >
        {!rowCount
          ? noRowsRenderer()
          : items.map((item) =>
              rowRenderer({ ...item, isActive: item.index == state.current.index }),
            )}
      </Shortcuts>
    </OverlayScrollbarsComponent>
  );
}

const InfiniteScrollWrapper = React.memo(React.forwardRef(InfiniteScroll));

export default InfiniteScrollWrapper;
