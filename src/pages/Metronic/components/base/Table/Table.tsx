import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classnames from 'classnames';
import { Table as BsTable } from 'react-bootstrap';
import { useMeasure } from 'react-use';

import { Checkbox } from '../../forms/Checkbox';

import type { PaginationProps } from './Pagination';
import Pagination from './Pagination';

import './Table.scss';

type RenderResult = {
  children: React.ReactNode | string;
  props?: {
    rowSpan?: number;
    colSpan?: number;
  };
};

export type TableColumn<T> = {
  title: string;
  dataIndex?: string;
  key?: string;
  width?: string | number;
  className?: string;
  align?: 'left' | 'right' | 'center';
  render?: (value: string, record: T, index: number) => React.ReactNode | string | RenderResult;
  sorter?: (a: T, b: T) => boolean;
  sortOrder?: 'ascend' | 'descend' | 'false';
  sortDirections?: 'ascend' | 'descend';
};

export type RowSelection = {
  type?: 'checkbox' | 'radio';
  renderTitle?: (size: number) => React.ReactNode;
  columnTitle?: React.ReactNode;
  columnWidth?: string | number;
  selectedRowKeys?: string[];
  toolbar?: (selectedRowKeys: string[], selectedRows: any[]) => React.ReactNode | boolean;
  onChange?: (selectedRowKeys: string[], selectedRows: any[]) => void;
  onSelect?: (record: any, selected: boolean, selectedRows: any[], nativeEvent: any) => void;
  onSelectAll?: (selected: boolean, selectedRows: any[]) => void;
  getCheckboxProps?: (record: any) => any;
};

export interface TableProps<T> {
  responsive?: boolean;
  hover?: boolean;
  rowKey?: string | ((record: T) => string);
  rowSelection?: RowSelection;
  dataSource?: T[];
  columns: TableColumn<T>[];
  pagination?: PaginationProps;
}

function buildRenderCol<T>(data: T) {
  return function (col: TableColumn<T>, index: number) {
    const { align } = col;
    const value = data[(col.dataIndex || col.key) as any];
    const renderResult = col.render ? col.render(value, data, index) : value;
    const isProps = renderResult && !React.isValidElement(renderResult) && renderResult.props;
    const props = isProps ? renderResult.props : {};
    const children = isProps ? renderResult.children : renderResult;
    return (
      <td
        key={`${col.key}-${value}`}
        className={classnames(
          {
            'text-start': align == 'left',
            'text-center': align == 'center',
            'text-end': align == 'right',
          },
          col.className,
        )}
        {...props}
      >
        {children}
      </td>
    );
  };
}

type ColgroupProps<T> = {
  columns: TableColumn<T>[];
  width: number;
};

function Colgroup<T>({ columns }: ColgroupProps<T>) {
  const cols = useMemo(() => {
    const _cols = [];
    for (let i = columns.length - 1; i >= 0; i--) {
      if (!_cols.length && !columns[i].width) {
        continue;
      }
      const key = columns[i].key || columns[i].dataIndex;
      _cols.push(<col key={`colgroup-cols-${key}`} style={{ width: columns[i].width }} />);
    }
    return _cols.reverse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns.map((item) => item.width).join('-')]);

  if (!cols.length) {
    return <></>;
  }

  return <colgroup>{cols}</colgroup>;
}

function randerTableHeaderCol<T>(col: TableColumn<T>) {
  const sortable = col.sorter || col.sortDirections || col.sortOrder;
  const sortOrder = col.sortOrder;
  const key = col.key || col.dataIndex;
  return (
    <th
      key={`th-${key}`}
      className={classnames(col.className, {
        sorting: sortable,
        sorting_desc: sortable && sortOrder == 'descend',
      })}
    >
      {col.title}
    </th>
  );
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
    rowKey = 'key',
  } = props;

  const {
    toolbar = true,
    renderTitle = defaultSelectRenderTitle,
    onChange,
    onSelect,
    onSelectAll,
    getCheckboxProps,
  } = rowSelection || {};

  const getRowKey = useCallback((record: any) => {
    if (typeof rowKey == 'function') {
      return rowKey(record);
    }
    return record[rowKey];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const temp = useRef(new Map<string, any>());
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set<string>());

  const [tableRef, { width }] = useMeasure<HTMLTableElement>();

  const handleChange = useCallback(
    (e) => {
      if (e.target.checked) {
        (dataSource || []).forEach((data) => {
          selectedKeys.add(getRowKey(data));
        });
      } else {
        (dataSource || []).forEach((data) => {
          selectedKeys.delete(getRowKey(data));
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
      const _rowKey = getRowKey(data);
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

  useEffect(() => {
    if (!dataSource) {
      return;
    }
    temp.current.clear();
    for (const item of dataSource) {
      temp.current.set(getRowKey(item), item);
    }
    setSelectedKeys((keys) => {
      Array.from(keys.keys()).forEach((key) => {
        if (!temp.current.has(key)) {
          keys.delete(key);
        }
      });
      return new Set(keys);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);

  const handleCheckboxProps = useCallback(
    (data: any) => {
      if (!getCheckboxProps) {
        return {};
      }
      return getCheckboxProps(data);
    },
    [getCheckboxProps],
  );

  return (
    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
      <BsTable
        ref={tableRef}
        hover={hover}
        responsive={responsive}
        className="table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"
      >
        <Colgroup<T>
          columns={rowSelection ? [{ title: '', key: 'row_selection' }, ...columns] : columns}
          width={width}
        />
        <thead>
          <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
            {rowSelection && (
              <th className="w-10px pe-2">
                <Checkbox
                  checked={
                    !!selectedKeys.size &&
                    (dataSource || []).every((data) => selectedKeys.has(getRowKey(data)))
                  }
                  onChange={handleChange}
                  size="sm"
                  className="me-3"
                />
              </th>
            )}
            {toolbar && !!selectedKeys.size ? (
              <th
                className="px-0 py-0"
                style={{ verticalAlign: 'middle' }}
                colSpan={columns.length}
              >
                <div className="d-flex justify-content-start align-items-center">
                  <div className="fw-bolder me-5 text-gray-800">
                    {renderTitle(selectedKeys.size)}
                  </div>
                  {typeof toolbar == 'function' &&
                    toolbar(
                      [...selectedKeys],
                      [...selectedKeys].map((key) => temp.current.get(key)),
                    )}
                </div>
              </th>
            ) : (
              columns.map(randerTableHeaderCol)
            )}
          </tr>
        </thead>
        <tbody className="fw-bold text-gray-600">
          {(dataSource || []).map((data: any, index) => {
            const randerCol = buildRenderCol(data);
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${getRowKey(data)}-${index}`}>
                {rowSelection && (
                  <td key="row-select">
                    <Checkbox
                      {...handleCheckboxProps(data)}
                      checked={selectedKeys.has(getRowKey(data))}
                      size="sm"
                      value={getRowKey(data)}
                      onChange={handleSelect(data)}
                    />
                  </td>
                )}
                {columns.map(randerCol)}
              </tr>
            );
          })}
        </tbody>
      </BsTable>
      {pagination && <Pagination {...pagination} />}
    </div>
  );
}

export default Table;
