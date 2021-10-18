import React, { useCallback, useMemo, useState } from 'react';

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

type TableColumn = {
  title: string;
  dataIndex?: string;
  key?: string;
  width?: string | number;
  className?: string;
  align?: 'left' | 'right' | 'center';
  render?: (value: string, record: any, index: number) => React.ReactNode | string | RenderResult;
  sorter?: (a: any, b: any) => boolean;
  sortOrder?: 'ascend' | 'descend' | 'false';
  sortDirections?: 'ascend' | 'descend';
};

type RowSelection = {
  type?: 'checkbox' | 'radio';
  columnTitle?: React.ReactNode;
  columnWidth?: string | number;
  selectedRowKeys?: string[];
  getCheckboxProps?: (record: any) => any;
};

interface TableProps {
  rowKey?: string | ((record: any) => string);
  rowSelection?: RowSelection;
  dataSource?: any[];
  columns: TableColumn[];
  pagination?: PaginationProps;
}

function buildRenderCol(data: any) {
  return function (col: TableColumn, index: number) {
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

type ColgroupProps = {
  columns: TableColumn[];
  width: number;
};

function Colgroup({ columns }: ColgroupProps) {
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

function randerTableHeaderCol(col: TableColumn) {
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

function Table(props: TableProps) {
  const { rowSelection, columns, dataSource, pagination, rowKey = 'key' } = props;

  const getRowKey = useCallback((record: any) => {
    if (typeof rowKey == 'function') {
      return rowKey(record);
    }
    return record[rowKey];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set<string>());

  const [tableRef, { width }] = useMeasure<HTMLTableElement>();

  const handleChange = useCallback(
    (e) => {
      setSelectedKeys((_selectedKeys) => {
        if (e.target.checked) {
          (dataSource || []).forEach((data) => {
            _selectedKeys.add(getRowKey(data));
          });
        } else {
          (dataSource || []).forEach((data) => {
            _selectedKeys.delete(getRowKey(data));
          });
        }
        return new Set<string>(_selectedKeys);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataSource],
  );

  const handleSelect = useCallback(
    (data: any) => () => {
      setSelectedKeys((prevSelectedKeys) => {
        const _rowKey = getRowKey(data);
        console.log(prevSelectedKeys, _rowKey);
        if (prevSelectedKeys.has(_rowKey)) {
          prevSelectedKeys.delete(_rowKey);
        } else {
          prevSelectedKeys.add(_rowKey);
        }
        return new Set<string>(prevSelectedKeys);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
      <BsTable
        ref={tableRef}
        hover
        responsive
        className="table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"
      >
        <Colgroup
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
            {columns.map(randerTableHeaderCol)}
          </tr>
        </thead>
        <tbody className="fw-bold text-gray-600">
          {(dataSource || []).map((data: any, index) => {
            const randerCol = buildRenderCol(data);
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr onClick={rowSelection && handleSelect(data)} key={`${getRowKey(data)}-${index}`}>
                {rowSelection && (
                  <td key="row-select">
                    <Checkbox
                      checked={selectedKeys.has(getRowKey(data))}
                      size="sm"
                      value={getRowKey(data)}
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
