import React, { useCallback, useMemo } from 'react';

import classnames from 'classnames';
import { Table as BsTable } from 'react-bootstrap';
import { useMeasure } from 'react-use';

import type { PaginationProps } from './Pagination';
import Pagination from './Pagination';

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
      _cols.push(<col style={{ width: columns[i].width }} />);
    }
    return _cols.reverse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns.map((item) => item.width).join('-')]);

  if (!cols.length) {
    return <></>;
  }

  return <colgroup>{cols}</colgroup>;
}

function Table(props: TableProps) {
  const { rowSelection, columns, dataSource, pagination, rowKey = 'key' } = props;

  const renderRowKey = useCallback((record: any) => {
    if (typeof rowKey == 'function') {
      return rowKey(record);
    }
    return record[rowKey];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [tableRef, { width }] = useMeasure<HTMLTableElement>();

  /*   useEffect(() => {
    columns.map((col) => {
      return col.width;
    });
    console.log('tableRef', width);
  }, []); */

  return (
    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
      <BsTable
        ref={tableRef}
        responsive
        className="table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"
      >
        <Colgroup columns={columns} width={width} />
        <thead>
          <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
            {rowSelection && (
              <th className="w-10px pe-2">
                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    data-kt-check="true"
                    data-kt-check-target="#kt_customers_table .form-check-input"
                    value="1"
                  />
                </div>
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} className={classnames(col.className, 'sorting sorting_desc')}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="fw-bold text-gray-600">
          {(dataSource || []).map((data: any, index) => {
            const randerCol = buildRenderCol(data);
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${renderRowKey(data)}-${index}`}>
                {rowSelection && (
                  <td key="row-select">
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
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
