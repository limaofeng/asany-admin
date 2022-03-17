import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import { Table as BsTable } from 'react-bootstrap';
import { useMeasure } from 'react-use';

import type { PaginationProps } from './Pagination';
import Pagination from './Pagination';
import TableHeader, { Colgroup } from './TableHeader';
import type { NoContentRenderer, RowHeightFunc, RowSelection, TableColumn } from './typings';
import VirtualList from './VirtualList';
import TableRow from './TableRow';
import { getRowKey } from './utils';

import './Table.scss';

export type UseDataSourceItem<T> = (index: number) => T;

export type DataSource<T> = {
  useItem: UseDataSourceItem<T>;
};

export interface TableProps<T> {
  responsive?: boolean;
  hover?: boolean;
  rowKey?: string | ((record: T) => string);
  rowSelection?: RowSelection;
  dataSource?: T[] | DataSource<T>;
  columns: TableColumn<T>[];
  pagination?: PaginationProps;
  scroll?: {
    height?: number;
    rowCount: number;
    overscanRowCount?: number;
    rowHeight: number | RowHeightFunc;
  };
  noRowsRenderer?: NoContentRenderer;
}

function defaultSelectRenderTitle(size: number) {
  return (
    <>
      <span className="me-2">{size}</span>
      已选择
    </>
  );
}

function Table<T>(props: TableProps<T>) {
  const {
    responsive = true,
    hover,
    rowSelection,
    columns,
    dataSource,
    pagination,
    noRowsRenderer,
    rowKey = 'key',
  } = props;

  const {
    toolbar = true,
    renderTitle = defaultSelectRenderTitle,
    onChange,
    onSelect,
    onSelectAll,
  } = rowSelection || {};

  const state = useRef<{ colgroups: Map<string, number> }>({ colgroups: new Map() });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const temp = useRef(new Map<string, any>());
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set<string>());

  const [tableRef] = useMeasure<HTMLTableElement>();

  const handleChange = useCallback(
    (e) => {
      if (e.target.checked) {
        ((dataSource as T[]) || []).forEach((data) => {
          selectedKeys.add(getRowKey(data, rowKey));
        });
      } else {
        ((dataSource as T[]) || []).forEach((data) => {
          selectedKeys.delete(getRowKey(data, rowKey));
        });
      }
      const _selectedKeys = [...selectedKeys];
      const selectedRows = _selectedKeys.map((key) => temp.current.get(key));

      setSelectedKeys(new Set<string>(_selectedKeys));
      onChange && onChange(_selectedKeys, selectedRows);
      onSelectAll && onSelectAll(e.target.checked, selectedRows);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataSource, selectedKeys],
  );

  const handleSelect = useCallback(
    (data: any) => (e: React.ChangeEvent<any>) => {
      const _rowKey = getRowKey(data, rowKey);
      if (selectedKeys.has(_rowKey)) {
        selectedKeys.delete(_rowKey);
      } else {
        selectedKeys.add(_rowKey);
      }
      const _selectedKeys = [...selectedKeys];
      const selectedRows = _selectedKeys.map((key) => temp.current.get(key));
      onChange && onChange(_selectedKeys, selectedRows);
      onSelect && onSelect(temp.current.get(_rowKey), selectedKeys.has(_rowKey), selectedRows, e);

      setSelectedKeys(new Set<string>(selectedKeys));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedKeys],
  );

  console.log('还有未完成的任务', handleSelect, handleChange);

  useEffect(() => {
    if (!dataSource) {
      return;
    }
    // temp.current.clear();
    // for (const item of dataSource as T[]) {
    //   temp.current.set(getRowKey(item, rowKey), item);
    // }
    // setSelectedKeys((keys) => {
    //   Array.from(keys.keys()).forEach((key) => {
    //     if (!temp.current.has(key)) {
    //       keys.delete(key);
    //     }
    //   });
    //   return new Set(keys);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);

  const handleColgroup = useCallback((numbers: Map<string, number>) => {
    state.current.colgroups = new Map(numbers);
    forceRender();
  }, []);

  const { colgroups } = state.current;

  const newColumns = useMemo(
    () =>
      rowSelection
        ? [
            { title: '', key: '__rowSelection', width: colgroups.get('__rowSelection') },
            ...columns.map((col) => ({ ...col, width: colgroups.get(col.key!)! })),
          ]
        : columns,
    [rowSelection, columns, colgroups],
  );

  return (
    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
      <TableHeader
        toolbar={toolbar}
        renderTitle={renderTitle}
        selectedKeys={selectedKeys}
        rowSelection={rowSelection}
        columns={columns}
        onColgroup={handleColgroup}
      />
      {props.scroll ? (
        <VirtualList<T>
          rowKey={rowKey}
          rowSelection={rowSelection}
          selectedKeys={selectedKeys}
          dataSource={dataSource as DataSource<T>}
          height={props.scroll.height}
          rowCount={props.scroll.rowCount!}
          rowHeight={props.scroll.rowHeight!}
          overscanRowCount={props.scroll.overscanRowCount!}
          columns={newColumns}
          hover={hover}
          responsive={responsive}
        />
      ) : (
        <BsTable
          ref={tableRef}
          hover={hover}
          responsive={responsive}
          className="table-row-bordered align-middle fw-bolder dataTable no-footer table-list-body"
        >
          <Colgroup<T> columns={newColumns} />
          <tbody className="fw-bold text-gray-600">
            {!((dataSource as T[]) || []).length
              ? noRowsRenderer && (
                  <tr>
                    <td
                      valign="top"
                      colSpan={columns.length + (rowSelection ? 1 : 0)}
                      className="dataTables_empty"
                    >
                      {noRowsRenderer()}
                    </td>
                  </tr>
                )
              : ((dataSource as T[]) || []).map((data: any, index) => {
                  const key = `${getRowKey(data, rowKey)}-${data[getRowKey(data, rowKey)]}`;
                  return (
                    <TableRow<T>
                      rowKey={rowKey}
                      rowSelection={rowSelection}
                      key={key}
                      index={index}
                      data={data}
                      columns={newColumns}
                      checked={selectedKeys.has(getRowKey(data, rowKey))}
                    />
                  );
                })}
          </tbody>
        </BsTable>
      )}
      {pagination && <Pagination {...pagination} />}
    </div>
  );
}

export default Table;
