import React, { useCallback, useMemo, useReducer, useRef } from 'react';

import { Table as BsTable } from 'react-bootstrap';
import classnames from 'classnames';
import type { OnSelect } from 'react-selecto';
import Selecto from 'react-selecto';

import type { PaginationProps } from './Pagination';
import Pagination from './Pagination';
import TableHeader, { Colgroup } from './TableHeader';
import type {
  NoContentRenderer,
  RowHeightFunc,
  RowSelection,
  Sorter,
  TableColumn,
} from './typings';
import VirtualList from './VirtualList';
import TableRow from './TableRow';
import { getRowKey } from './utils';

import './Table.scss';

export type UseDataSourceItem<T> = (index: number) => T;

export type DataSource<T> = {
  useItem: UseDataSourceItem<T>;
};

type OnChange = (
  pagination: PaginationProps | undefined,
  filters: any | undefined,
  sorter: Sorter | undefined,
  extra: { action: 'paginate' | 'sort' | 'filter' },
) => void;

export interface TableProps<T> {
  responsive?: boolean;
  hover?: boolean;
  striped?: boolean;
  rowKey?: string | ((record: T) => string);
  rowSelection?: RowSelection;
  dataSource?: T[] | DataSource<T>;
  onChange?: OnChange;
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
    onChange: tableOnChange,
    rowKey = 'key',
  } = props;

  const {
    toolbar = true,
    renderTitle = defaultSelectRenderTitle,
    onChange,
    onSelect,
    onSelectAll,
  } = rowSelection || {};

  const selecto = useRef<Selecto>(null);
  const tableBodyContainer = useRef<HTMLTableSectionElement>(null);

  const state = useRef<{
    colgroups: Map<string, number>;
    selectedKeys: Set<string>;
    selectedAll: boolean;
    totalCount: number;
  }>({
    totalCount: 0,
    selectedAll: false,
    colgroups: new Map(),
    selectedKeys: new Set<string>(),
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.totalCount = useMemo(() => {
    if (props.scroll) {
      return props.scroll.rowCount;
    }
    if (Array.isArray(dataSource)) {
      return dataSource.length;
    }
    return 0;
  }, [props.scroll, dataSource]);

  const temp = useRef<{ rowKey: string | ((record: T) => string); items: Map<string, any> }>({
    items: new Map<string, any>(),
    rowKey,
  });

  const handleSelect = useCallback(
    (data: T, checked: boolean, e: React.ChangeEvent | React.ChangeEvent) => {
      const { selectedKeys, totalCount } = state.current;
      const key = getRowKey(data, rowKey);

      let _checked = checked;
      if (e.type == 'click') {
        if (!checked && selectedKeys.size > 1) {
          _checked = true;
        }
        if (selectedKeys.size) {
          selectedKeys.clear();
        }
      }

      if (_checked) {
        selectedKeys.add(key);
      } else {
        selectedKeys.delete(key);
      }

      const _selectedKeys = [...selectedKeys];
      const selectedRows = _selectedKeys.map((_key) => temp.current.items.get(_key));

      state.current.selectedAll = selectedKeys.size == totalCount;
      forceRender();

      onSelect && onSelect(temp.current.items.get(key), _checked, selectedRows, e);
      onChange && onChange(_selectedKeys, selectedRows);
      onSelectAll && onSelectAll(_checked, selectedRows);
    },
    [onChange, onSelect, onSelectAll, rowKey],
  );

  const handleSelectAll = useCallback((selected: boolean) => {
    const { items } = temp.current;
    const { selectedKeys } = state.current;
    if (selected) {
      Array.from(items.keys()).forEach(selectedKeys.add.bind(selectedKeys));
    } else {
      selectedKeys.clear();
    }
    state.current.selectedAll = selected;
    forceRender();
  }, []);

  const useCheck = useMemo(() => {
    return (data: T) => {
      const _key = getRowKey(data, temp.current.rowKey);
      return state.current.selectedKeys.has(_key);
    };
  }, []);

  const recoverer = useCallback((data: T) => {
    const key = getRowKey(data, temp.current.rowKey);
    temp.current.items.set(key, data);
    return () => temp.current.items.delete(key);
  }, []);

  const handleColgroup = useCallback((numbers: Map<string, number>) => {
    state.current.colgroups = new Map(numbers);
    forceRender();
  }, []);

  const handleSort = useCallback(
    (sorter: Sorter) => {
      tableOnChange && tableOnChange(props.pagination, null, sorter, { action: 'sort' });
    },
    [props.pagination, tableOnChange],
  );

  const { colgroups } = state.current;

  const newColumns = useMemo(
    () =>
      rowSelection
        ? [
            { title: '', key: '__rowSelection', width: colgroups.get('__rowSelection') },
            ...columns.map((col) => ({
              ...col,
              key: col.key || col.dataIndex,
              width: colgroups.get(col.key!)!,
            })),
          ]
        : columns,
    [rowSelection, columns, colgroups],
  );

  const handleSelectoDragCondition = useCallback((...args) => {
    console.log('handleSelectoDragCondition', args);
    return true;
  }, []);

  const handleSelectoSelectEnd = useCallback(() => {
    selecto.current && selecto.current.setSelectedTargets([]);
  }, []);

  const handleSelectoSelect = useCallback((e: OnSelect) => {
    const { selectedKeys: _selectedKeys, totalCount } = state.current;
    e.added.map((item) => item.dataset.key!).forEach(_selectedKeys.add.bind(_selectedKeys));
    e.removed.map((item) => item.dataset.key!).forEach(_selectedKeys.delete.bind(_selectedKeys));
    state.current.selectedAll = _selectedKeys.size == totalCount;
    forceRender();
  }, []);

  // console.log('selectedKeys', state.current.selectedKeys);

  return (
    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
      <TableHeader
        toolbar={toolbar}
        renderTitle={renderTitle}
        selectedAll={state.current.selectedAll}
        selectedKeys={state.current.selectedKeys}
        onSelectAll={handleSelectAll}
        onSort={handleSort}
        columns={newColumns}
        onColgroup={handleColgroup}
      />
      <div className="dataTable-body">
        {props.scroll ? (
          <VirtualList<T>
            tableBodyRef={tableBodyContainer}
            rowKey={rowKey}
            recoverer={recoverer}
            rowSelection={rowSelection}
            dataSource={dataSource as DataSource<T>}
            height={props.scroll.height}
            rowCount={props.scroll.rowCount!}
            rowHeight={props.scroll.rowHeight!}
            overscanRowCount={props.scroll.overscanRowCount!}
            onSelect={handleSelect}
            columns={newColumns}
            useCheck={useCheck}
            hover={hover}
            responsive={responsive}
          />
        ) : (
          <BsTable
            hover={hover}
            striped
            responsive={responsive}
            className="table-row-bordered align-middle fw-bolder dataTable no-footer table-list-body"
          >
            <Colgroup<T> columns={newColumns} />
            <tbody ref={tableBodyContainer} className="fw-bold text-gray-600">
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
                    const key = getRowKey(data, rowKey);
                    return (
                      <TableRow<T>
                        rowKey={rowKey}
                        recoverer={recoverer}
                        className={classnames({ odd: index % 2, even: !(index % 2) })}
                        rowSelection={rowSelection}
                        onSelect={handleSelect}
                        key={key}
                        index={index}
                        data={data}
                        columns={newColumns}
                        useCheck={useCheck}
                      />
                    );
                  })}
            </tbody>
          </BsTable>
        )}
        {rowSelection && (
          <Selecto
            ref={selecto}
            container={tableBodyContainer.current}
            dragContainer={tableBodyContainer.current!}
            selectableTargets={['.table-list-item']}
            selectByClick={false}
            selectFromInside={true}
            continueSelect={false}
            toggleContinueSelect={'shift'}
            keyContainer={window}
            dragCondition={handleSelectoDragCondition}
            hitRate={0}
            onSelectEnd={handleSelectoSelectEnd}
            onSelect={handleSelectoSelect}
          />
        )}
      </div>
      {pagination && <Pagination {...pagination} />}
    </div>
  );
}

export default Table;
