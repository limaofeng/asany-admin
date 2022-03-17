import type { CSSProperties } from 'react';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames';
import { Table as BsTable } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

import { uuid } from '../../utils';

import type {
  RowData,
  RowHeightFunc,
  RowRendererParams,
  RowSelection,
  TableColumn,
} from './typings';
import { Colgroup } from './TableHeader';
import TableRow from './TableRow';
import type { DataSource } from './Table';

type VirtualListProps<T> = {
  responsive?: boolean;
  hover?: boolean;
  height?: number;
  selectedKeys: Set<string>;
  rowHeight: number | RowHeightFunc;
  rowCount: number;
  overscanRowCount: number;
  columns: TableColumn<T>[];
  rowSelection?: RowSelection;
  dataSource: DataSource<T>;
  rowKey: string | ((record: T) => string);
};

function VirtualList<T>(props: VirtualListProps<T>) {
  const { columns, rowHeight, rowCount, rowKey, dataSource, rowSelection } = props;

  const scrollbar = useRef<OverlayScrollbarsComponent>(null);

  const state = useRef<{
    height?: number;
    rowHeight: number | RowHeightFunc;
    rowCount: number;
    overscanRowCount: number;
    items: Map<number, RowData>;
    colgroups: Map<string, number>;
  }>({
    rowCount: props.rowCount,
    rowHeight: props.rowHeight,
    items: new Map(),
    colgroups: new Map(),
    overscanRowCount: props.overscanRowCount || 5,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const temp = useRef<{
    timer?: NodeJS.Timeout;
    items: RowRendererParams[];
    startIndex: number;
    endIndex: number;
    innerHeight: number;
  }>({ items: [], startIndex: 0, endIndex: 0, innerHeight: 0 });

  state.current.rowCount = rowCount;

  const innerHeight = useMemo(() => {
    if (!rowCount) {
      temp.current.startIndex = 0;
      temp.current.endIndex = 0;
      temp.current.items.length = 0;
      state.current.items.clear();
    } else if (state.current.items.size) {
      while (state.current.items.size > rowCount) {
        state.current.items.delete(state.current.items.size - 1);
      }
    }
    const items = state.current.items;
    if (typeof rowHeight == 'number') {
      for (let i = 0; i < rowCount; i++) {
        const key = items.has(i) ? items.get(i)!.key : 'row_' + i;
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

  temp.current.innerHeight = innerHeight;

  const setupItems = useCallback(() => {
    const scroll = scrollbar.current?.osInstance()?.scroll();

    if (!scroll) {
      return;
    }

    if (!state.current.rowCount) {
      return;
    }

    const start = Math.min(scroll.position.y, temp.current.innerHeight - state.current.height!);
    const end = Math.min(scroll.position.y + state.current.height!, temp.current.innerHeight);

    const overscanRowCount = state.current.overscanRowCount;

    const items = Array.from(state.current.items.values());

    const startIndex = items.findIndex((item) => item.top >= start || item.bottom >= start);
    let endIndex = items
      .slice(startIndex)
      .findIndex((item) => item.bottom >= end || item.top >= end);
    endIndex = endIndex == -1 ? items.length : startIndex + endIndex + 1;

    temp.current.startIndex = Math.max(0, startIndex - overscanRowCount);
    temp.current.endIndex = Math.min(items.length, endIndex + overscanRowCount);
    temp.current.timer && clearTimeout(temp.current.timer);
    temp.current.timer = setTimeout(() => {
      temp.current.items = items
        .slice(temp.current.startIndex, temp.current.endIndex)
        .map((item) => ({
          ...item,
          isScrolling: false,
          isVisible: item.index >= startIndex && item.index < endIndex,
          style: { height: item.bottom - item.top },
        }));
      forceRender();
    }, 30);
  }, []);

  const handleResize = useCallback(() => {
    const _target = scrollbar.current!.osTarget();
    state.current.height = _target!.clientHeight;
    temp.current.timer && clearTimeout(temp.current.timer);
    temp.current.timer = setTimeout(() => {
      state.current.height = _target!.clientHeight;
      setupItems();
    }, 300);
  }, [setupItems]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    process.nextTick(handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    setupItems();
  }, [setupItems, props.height, innerHeight, rowCount]);

  const handleScroll = useCallback(() => {
    setupItems();
  }, [setupItems]);

  const { items, startIndex, endIndex } = temp.current;

  const beforeTr = useMemo(() => {
    let _height = 0;
    if (typeof rowHeight == 'number') {
      _height = startIndex * rowHeight;
    } else {
      for (let i = 0; i < startIndex; i++) {
        _height += state.current.items.get(i)!.height;
      }
    }
    return _height;
  }, [rowHeight, startIndex]);

  const afterTr = useMemo(() => {
    let _height = 0;
    if (typeof rowHeight == 'number') {
      _height = (rowCount - endIndex) * rowHeight;
    } else {
      for (let i = endIndex; i < rowCount; i++) {
        _height += state.current.items.get(i)!.height;
      }
    }
    return _height;
  }, [endIndex, rowCount, rowHeight]);

  console.log('VirtualList', startIndex, endIndex, beforeTr, afterTr);

  const xxx = Array.from(
    items.reduce((map, it) => {
      map.set(it.key, (map.get(it.key) || 0) + 1);
      return map;
    }, new Map<string, number>()),
  ).filter((arr) => arr[1] != 1);
  if (xxx.length) {
    debugger;
  }
  console.log('keys', xxx);

  return (
    <OverlayScrollbarsComponent
      ref={scrollbar}
      style={{ height: props.height }}
      className={classnames('custom-scrollbar table-virtualized-scroll')}
      options={{
        scrollbars: { autoHide: 'scroll' },
        callbacks: {
          onScroll: handleScroll,
        },
      }}
    >
      <BsTable
        hover={props.hover}
        responsive={props.responsive}
        className="table-row-bordered align-middle fw-bolder dataTable no-footer table-list-body"
      >
        <Colgroup<T> columns={columns} />
        <tbody className="fw-bold text-gray-600">
          {!!beforeTr && <tr style={{ height: beforeTr }} />}
          {items.map((item) => (
            <VirtualListItem<T>
              rowKey={rowKey}
              rowSelection={rowSelection}
              key={item.key}
              checked={false}
              style={item.style}
              columns={columns}
              dataSource={dataSource}
              index={item.index}
            />
          ))}
          {!!afterTr && <tr style={{ height: afterTr }} />}
        </tbody>
      </BsTable>
    </OverlayScrollbarsComponent>
  );
}

type VirtualListItemProps<T> = {
  index: number;
  checked: boolean;
  dataSource: DataSource<T>;
  rowSelection?: RowSelection;
  columns: TableColumn<T>[];
  style: CSSProperties;
  rowKey: string | ((record: T) => string);
};

function VirtualListItem<T>(props: VirtualListItemProps<T>) {
  const { style, rowKey, rowSelection, dataSource, columns, index, checked } = props;

  const data = dataSource.useItem(index);

  if (!data) {
    let _x = 0;
    const width = columns.reduce((sum, r) => sum + (r.width as number), 0);
    return (
      <tr style={style}>
        <td colSpan={columns.length}>
          <ContentLoader
            speed={2}
            width={width}
            height={style.height}
            viewBox={`0 0 ${width} ${style.height}`}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            {columns.map((col) => {
              try {
                if (col.key === '__rowSelection') {
                  return (
                    <rect
                      key={col.key}
                      x={_x + 15}
                      y={((style.height as number) - 20) / 2}
                      rx="3"
                      ry="3"
                      width="20"
                      height="20"
                    />
                  );
                } else {
                  return (
                    <rect
                      key={col.key}
                      x={_x}
                      y={((style.height as number) - 18) / 2}
                      rx="3"
                      ry="3"
                      width={(col.width as number) * 0.6}
                      height="18"
                    />
                  );
                }
              } finally {
                _x += (col.width as number) || 0;
              }
            })}
          </ContentLoader>
        </td>
      </tr>
    );
  }

  return (
    <TableRow<T>
      style={style}
      rowKey={rowKey}
      rowSelection={rowSelection}
      data={data}
      index={index}
      columns={columns}
      checked={checked}
    />
  );
}

export default VirtualList;
