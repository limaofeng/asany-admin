import classnames from 'classnames';
import { Table as BsTable } from 'react-bootstrap';

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
  key: string;
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
  rowSelection?: RowSelection;
  dataSource?: any[];
  columns: TableColumn[];
  pagination?: PaginationProps;
}

function buildRenderCol(data: any) {
  return function (col: TableColumn, index: number) {
    const { align } = col;
    const value = data[col.dataIndex || col.key];
    const renderResult = col.render ? col.render(value, data, index) : value;
    const isProps = renderResult && renderResult.props;
    const props = isProps ? renderResult.props : {};
    const children = isProps ? renderResult.children : renderResult;
    return (
      <td
        key={`${col.key}-${value}`}
        className={classnames({
          'text-start': align == 'left',
          'text-center': align == 'center',
          'text-end': align == 'right',
        })}
        {...props}
      >
        {children}
      </td>
    );
  };
}

function Table(props: TableProps) {
  const { rowSelection, columns, dataSource, pagination } = props;
  return (
    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
      <BsTable
        responsive
        className="table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"
      >
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
              <th key={col.key} className="min-w-125px sorting sorting_desc">
                {col.title}
              </th>
            ))}
            <th className="text-end min-w-70px">Actions</th>
          </tr>
        </thead>
        <tbody className="fw-bold text-gray-600">
          {(dataSource || []).map((data: any) => {
            const randerCol = buildRenderCol(data);
            return (
              <tr>
                {rowSelection && (
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                    </div>
                  </td>
                )}
                {columns.map(randerCol)}
                {/* --begin::Action=--*/}
                <td className="text-end">
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    Actions
                    {/* --begin::Svg Icon | path: icons/duotune/arrows/arr072.svg--*/}
                    <span className="svg-icon svg-icon-5 m-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    {/* --end::Svg Icon--*/}
                  </a>
                  {/* --begin::Menu--*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    {/* --begin::Menu item--*/}
                    <div className="menu-item px-3">
                      <a
                        href="../../demo7/dist/apps/customers/view.html"
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>
                    {/* --end::Menu item--*/}
                    {/* --begin::Menu item--*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                    {/* --end::Menu item--*/}
                  </div>
                  {/* --end::Menu--*/}
                </td>
                {/* --end::Action=--*/}
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
