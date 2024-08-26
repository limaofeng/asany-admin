import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Table as BsTable } from 'react-bootstrap';
import type { OnSelect, OnSelectEnd } from 'react-selecto';
import Selecto from 'react-selecto';

import EventEmitter from 'events';

import classnames from 'classnames';
import { isEqual } from 'lodash';

import type { PaginationProps } from './Pagination';
import Pagination from './Pagination';
import TableHeader, { Colgroup } from './TableHeader';
import TableRow from './TableRow';
import type {
  DataSource,
  NewTableColumn,
  NoContentRenderer,
  OnChange,
  RowHeightFunc,
  RowSelection,
  Sorter,
  TableColumn,
} from './typings';
import { getRowKey } from './utils';
import VirtualList from './VirtualList';

import './Table.scss';

export interface TableProps<T> {
  responsive?: boolean;
  hover?: boolean;
  striped?: boolean;
  rowKey?: string | ((record: T) => string);
  rowSelection?: RowSelection<T>;
  dataSource: T[] | DataSource<T>;
  onChange?: OnChange;
  columns: TableColumn<T>[];
  pagination?: PaginationProps;
  height?: number;
  overscanRowCount?: number;
  rowHeight?: number | RowHeightFunc;
  type?: 'native' | 'data_tables';
  noRowsRenderer?: NoContentRenderer;
  className?: string;
}

function defaultSelectRenderTitle(size: number) {
  return (
    <>
      <span className="me-2">{size}</span>
      已选择
    </>
  );
}

function useDataSourceWrapper<T>(
  dataSource: T[] | DataSource<T>,
): DataSource<T> {
  const type = useMemo(
    () => (Array.isArray(dataSource) ? 'array' : 'lazy'),
    [dataSource],
  );

  if (Array.isArray(dataSource)) {
    return {
      type,
      items: dataSource,
      loadedCount: dataSource.length,
      rowCount: dataSource.length,
      useItem: (index: number) => {
        return dataSource[index];
      },
    };
  }
  dataSource.type = type;
  return dataSource;
}

function DataTableBody(_props: any) {
  return <div {..._props} className="dataTable-body" />;
}

function initEventEmitter() {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(1000);
  return emitter;
}

function Table<T>(props: TableProps<T>) {
  const {
    responsive = true,
    hover,
    rowSelection,
    columns,
    pagination,
    noRowsRenderer,
    onChange: tableOnChange,
    rowKey = 'key',
    type = 'data_tables',
  } = props;

  const {
    toolbar = true,
    continueSelect = true,
    renderTitle = defaultSelectRenderTitle,
    selectedRowKeys,
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
    page: number;
    pageSize: number;
    sorter?: Sorter;
  }>({
    page: pagination?.current || 0,
    pageSize: pagination?.pageSize || 0,
    totalCount: 0,
    selectedAll: false,
    colgroups: new Map(),
    selectedKeys: new Set<string>(),
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const dataSource = useDataSourceWrapper(props.dataSource);

  state.current.page = pagination?.current || 0;
  state.current.pageSize = pagination?.pageSize || 0;
  state.current.totalCount = useMemo(() => {
    return dataSource.rowCount;
  }, [dataSource]);

  const temp = useRef<{
    rowKey: string | ((record: T) => string);
    items: Map<string, T>;
    REPAIR_OF_SELECTEDALL_RUNNING: boolean;
    dataSource: DataSource<T>;
    emitter: EventEmitter;
  }>({
    dataSource,
    items: new Map<string, T>(),
    rowKey,
    REPAIR_OF_SELECTEDALL_RUNNING: false,
    emitter: initEventEmitter(),
  });
  temp.current.dataSource = dataSource;

  useEffect(() => {
    if (!onChange) {
      return;
    }

    const handleChange = () => {
      const items = temp.current.dataSource.items;
      onChange(
        Array.from(state.current.selectedKeys.keys()),
        items.filter((item) =>
          state.current.selectedKeys.has(getRowKey(item, temp.current.rowKey)),
        ),
      );
    };

    const _emitter = temp.current.emitter;
    _emitter.on('CHANGE_SELECTEDKEYS', handleChange);
    return () => {
      _emitter.off('CHANGE_SELECTEDKEYS', handleChange);
    };
  }, [onChange]);

  const subscribeChangeSelectedKeys = useCallback((callback: () => void) => {
    temp.current.emitter.on('CHANGE_SELECTEDKEYS', callback);
    return () => {
      temp.current.emitter.off('CHANGE_SELECTEDKEYS', callback);
    };
  }, []);

  const handleSelect = useCallback(
    (data: T, checked: boolean, e: React.ChangeEvent | React.ChangeEvent) => {
      const { selectedKeys, totalCount } = state.current;
      const key = getRowKey(data, rowKey);

      let _checked = checked;
      if (e.type === 'click') {
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

      const selectedRows = temp.current.dataSource.items.filter((item) =>
        selectedKeys.has(getRowKey(item, temp.current.rowKey)),
      );

      state.current.selectedAll = selectedKeys.size === totalCount;
      forceRender();

      temp.current.emitter.emit('CHANGE_SELECTEDKEYS');

      onSelect &&
        onSelect(temp.current.items.get(key)!, _checked, selectedRows, e);
    },
    [onSelect, rowKey],
  );

  const handleSelectAll = useCallback(
    (selected: boolean) => {
      const items = temp.current.dataSource.items;
      const { selectedKeys } = state.current;
      let selectedRows: T[] = [];
      let changeRows: T[] = [];
      if (selected) {
        selectedRows = items;
        changeRows = items.filter(
          (item) => !selectedKeys.has(getRowKey(item, temp.current.rowKey)),
        );
        changeRows.forEach((item) => {
          selectedKeys.add(getRowKey(item, temp.current.rowKey));
        });
      } else {
        changeRows = items.filter((item) =>
          selectedKeys.has(getRowKey(item, temp.current.rowKey)),
        );
        selectedKeys.clear();
      }
      state.current.selectedAll = selected;
      onSelectAll && onSelectAll(selected, selectedRows, changeRows);
      temp.current.emitter.emit('CHANGE_SELECTEDKEYS');
      forceRender();
    },
    [onSelectAll],
  );

  const repairOfSelectedAll = useCallback(() => {
    if (temp.current.REPAIR_OF_SELECTEDALL_RUNNING) {
      return;
    }
    try {
      temp.current.REPAIR_OF_SELECTEDALL_RUNNING = true;
      const items = temp.current.dataSource.items;
      const { selectedKeys } = state.current;
      const changeRows = items.filter(
        (item) => !selectedKeys.has(getRowKey(item, temp.current.rowKey)),
      );
      changeRows.forEach((item) => {
        selectedKeys.add(getRowKey(item, temp.current.rowKey));
      });
      temp.current.emitter.emit('CHANGE_SELECTEDKEYS');
      forceRender();
    } finally {
      temp.current.REPAIR_OF_SELECTEDALL_RUNNING = false;
    }
  }, []);

  useEffect(() => {
    if (
      dataSource.loadedCount !== state.current.selectedKeys.size &&
      state.current.selectedAll
    ) {
      repairOfSelectedAll();
    }
    if (dataSource.type === 'array') {
      const prevKey = Array.from(state.current.selectedKeys.keys()).join(',');
      state.current.selectedKeys = new Set(
        Array.from(state.current.selectedKeys).filter((item) =>
          temp.current.dataSource.items.some(
            (data) => getRowKey(data, temp.current.rowKey) === item,
          ),
        ),
      );
      const nextKey = Array.from(state.current.selectedKeys.keys()).join(',');
      if (!isEqual(prevKey, nextKey)) {
        temp.current.emitter.emit('CHANGE_SELECTEDKEYS');
        forceRender();
      }
    }
  }, [dataSource.loadedCount, dataSource.type, repairOfSelectedAll]);

  const useCheck = useMemo(() => {
    return (data: T) => {
      const _key = getRowKey(data, temp.current.rowKey);
      const { selectedKeys } = state.current;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [checked, setChecked] = useState(selectedKeys.has(_key));

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(
        () =>
          subscribeChangeSelectedKeys(() => {
            setChecked(state.current.selectedKeys.has(_key));
          }),
        [_key],
      );

      return checked;
    };
  }, [subscribeChangeSelectedKeys]);

  const recoverer = useCallback((data: T) => {
    const key = getRowKey(data, temp.current.rowKey);
    temp.current.items.set(key, data);
    return () => temp.current.items.delete(key);
  }, []);

  const handleColgroup = useCallback((numbers: Map<string, number>) => {
    state.current.colgroups = new Map(numbers);
    forceRender();
  }, []);

  const handlePageChange = useCallback(
    (page: number, pageSize: number) => {
      state.current.page = page;
      state.current.pageSize = pageSize;
      tableOnChange &&
        tableOnChange(
          { ...props.pagination!, current: page, pageSize },
          null,
          state.current.sorter,
          {
            action: 'paginate',
          },
        );
    },
    [props.pagination, tableOnChange],
  );

  const handleSort = useCallback(
    (sorter: Sorter) => {
      state.current.sorter = sorter;
      tableOnChange &&
        tableOnChange(
          props.pagination
            ? {
                ...props.pagination!,
                current: state.current.page!,
                pageSize: state.current.pageSize!,
              }
            : undefined,
          null,
          sorter,
          { action: 'sort' },
        );
    },
    [props.pagination, tableOnChange],
  );

  const { colgroups } = state.current;

  const newColumns = useMemo(() => {
    const _newColumns = [
      ...columns.map((col) => ({
        ...col,
        key: col.key || col.dataIndex,
      })),
    ];
    if (rowSelection) {
      _newColumns.unshift({
        title: '',
        key: '__rowSelection',
        width: 50,
      });
    }
    return _newColumns as NewTableColumn<T>[];
  }, [rowSelection, columns]);

  useEffect(() => {
    state.current.colgroups = new Map();
    forceRender();
  }, [newColumns.length]);

  const headerColumns = useMemo(() => {
    return newColumns.map((col) => ({
      ...col,
      key: col.key || col.dataIndex,
      width: colgroups.get(col.key || col.dataIndex!),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newColumns, Array.from(colgroups.values()).join(',')]);

  const handleSelectoDragCondition = useCallback((e: any) => {
    if (!e.inputEvent.path) {
      return true;
    }
    const documents = Array.from(e.inputEvent.path).slice(0, -3);
    const lastIndex = documents.lastIndexOf(tableBodyContainer.current);
    const isOff = (
      lastIndex === -1 ? documents : documents.slice(0, lastIndex)
    ).some((item: any) =>
      Array.from(item.classList).includes('no-selecto-drag'),
    );
    return !isOff;
  }, []);

  const handleSelectoSelectStart = useCallback(() => {
    const selectedTargets =
      tableBodyContainer.current?.querySelectorAll<HTMLElement>(
        '.table-list-item.selected',
      );
    if (selectedTargets && selecto.current && !continueSelect) {
      selecto.current.setSelectedTargets(Array.from(selectedTargets));
    }
  }, [continueSelect]);

  const handleSelectoSelectEnd = useCallback((e: OnSelectEnd) => {
    // console.log('row select', e.isClick, e.isDragStart, e.inputEvent, e);
    if (
      e.added.length === 1 &&
      e.afterAdded.length === 1 &&
      e.selected.length === 1
    ) {
      const dom = e.selected[0];
      dom.dataset.ignore_click = 'on';
      setTimeout(() => {
        delete dom.dataset.ignore_click;
      }, 60);
    }
    selecto.current && selecto.current.setSelectedTargets([]);
  }, []);

  const handleSelectoSelect = useCallback((e: OnSelect) => {
    const { selectedKeys: _selectedKeys, totalCount } = state.current;
    e.added
      .map((item) => item.dataset.key!)
      .forEach(_selectedKeys.add.bind(_selectedKeys));
    e.removed
      .map((item) => item.dataset.key!)
      .forEach(_selectedKeys.delete.bind(_selectedKeys));
    state.current.selectedAll = _selectedKeys.size === totalCount;
    temp.current.emitter.emit('CHANGE_SELECTEDKEYS');
    forceRender();
  }, []);

  useEffect(() => {
    if (!selectedRowKeys || state.current.selectedAll) {
      return;
    }

    const _size = state.current.selectedKeys.size;
    const selectedKeyLength = selectedRowKeys.filter((key) =>
      state.current.selectedKeys.has(key),
    ).length;

    if (
      selectedKeyLength === _size &&
      selectedKeyLength === selectedRowKeys.length
    ) {
      return;
    }

    state.current.selectedKeys.clear();
    selectedRowKeys.forEach(
      state.current.selectedKeys.add.bind(state.current.selectedKeys),
    );
    temp.current.emitter.emit('CHANGE_SELECTEDKEYS');
  }, [selectedRowKeys]);

  return (
    <div
      className={classnames({
        'dataTables_wrapper dt-bootstrap4 no-footer': type === 'data_tables',
        'table-responsive': type === 'native',
      })}
    >
      {type === 'data_tables' && (
        <TableHeader
          rowKey={rowKey}
          toolbar={toolbar}
          dataSource={dataSource}
          renderTitle={renderTitle}
          selectedAll={state.current.selectedAll}
          selectedKeys={state.current.selectedKeys}
          onSelectAll={handleSelectAll}
          onSort={handleSort}
          columns={headerColumns}
        />
      )}
      {React.createElement(
        type === 'data_tables' ? DataTableBody : React.Fragment,
        {},
        <>
          {dataSource.type === 'lazy' ? (
            <VirtualList<T>
              tableBodyRef={tableBodyContainer}
              rowKey={rowKey}
              recoverer={recoverer}
              rowSelection={rowSelection}
              dataSource={dataSource}
              height={props.height}
              rowHeight={props.rowHeight || 50}
              overscanRowCount={props.overscanRowCount || 5}
              onSelect={handleSelect}
              columns={newColumns}
              useCheck={useCheck}
              hover={hover}
              onColgroup={handleColgroup}
              responsive={responsive}
            />
          ) : (
            <BsTable
              hover={props.hover}
              striped={props.striped}
              responsive={props.responsive}
              className={classnames(props.className, {
                'dataTable table-row-bordered align-middle fw-bolder dataTable no-footer table-list-body':
                  type === 'data_tables',
                'table table-row-dashed': type === 'native',
              })}
            >
              {type === 'native' && (
                <thead>
                  <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                    {headerColumns.map((col) => (
                      <th
                        key={col.key}
                        className={
                          typeof col.className === 'function'
                            ? col.className('th')
                            : col.className
                        }
                      >
                        {col.title}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              {type === 'data_tables' && (
                <Colgroup<T> onColgroup={handleColgroup} columns={newColumns} />
              )}
              <tbody ref={tableBodyContainer} className="fw-bold text-gray-600">
                {!dataSource.items.length
                  ? noRowsRenderer && (
                      <tr className="dataTables_empty">
                        <td
                          valign="top"
                          colSpan={columns.length + (rowSelection ? 1 : 0)}
                          className="dataTables_empty"
                        >
                          {noRowsRenderer()}
                        </td>
                      </tr>
                    )
                  : dataSource.items.map((data: any, index) => {
                      const key = getRowKey(data, rowKey);
                      return (
                        <TableRow<T>
                          rowKey={rowKey}
                          recoverer={recoverer}
                          className={classnames({
                            odd: index % 2,
                            even: !(index % 2),
                          })}
                          rowSelection={rowSelection}
                          onSelect={handleSelect}
                          key={key}
                          rowHeight={props.rowHeight}
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
          {rowSelection && !!dataSource.items.length && (
            <Selecto
              className="table-selecto-selection"
              ref={selecto}
              container={tableBodyContainer.current}
              dragContainer={tableBodyContainer.current!}
              selectableTargets={['.table-list-item']}
              selectByClick={false}
              selectFromInside={true}
              continueSelect={true}
              toggleContinueSelect={'shift'}
              keyContainer={window}
              dragCondition={handleSelectoDragCondition}
              hitRate={0}
              onSelectStart={handleSelectoSelectStart}
              onSelectEnd={handleSelectoSelectEnd}
              onSelect={handleSelectoSelect}
            />
          )}
        </>,
      )}
      {pagination && !!pagination.total && (
        <Pagination
          className="py-4"
          {...pagination}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default Table;
