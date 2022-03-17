import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { useMeasure } from 'react-use';

import { Checkbox } from '../../forms';

import type { RowSelection, TableColumn, TableHeadToolbar } from './typings';

type ColgroupProps<T> = {
  columns: TableColumn<T>[];
};

export function Colgroup<T>({ columns }: ColgroupProps<T>) {
  const cols = useMemo(() => {
    const _cols = [];
    for (let i = columns.length - 1; i >= 0; i--) {
      if (!_cols.length && !columns[i].width) {
        continue;
      }
      const key = columns[i].key || columns[i].dataIndex;
      _cols.push(<col key={`colgroup-cols-${key}`} width={columns[i].width} />);
    }
    return _cols.reverse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns.map((item) => item.width).join('-')]);

  if (!cols.length) {
    return <></>;
  }

  return <colgroup>{cols}</colgroup>;
}

type TreeHeaderColumnProps = {
  className: string;
  col: TableColumn<any>;
  onWidthResize: (key: string, width: number) => void;
};

type TreeHeaderColumnCheckboxProps = {
  onWidthResize: (key: string, width: number) => void;
};

function TreeHeaderColumnCheckbox(props: TreeHeaderColumnCheckboxProps) {
  const { onWidthResize } = props;

  const [ref, { right, left }] = useMeasure<HTMLTableCellElement>();

  useEffect(() => {
    onWidthResize && onWidthResize('__rowSelection', right + left);
  }, [left, onWidthResize, right]);

  return (
    <th ref={ref} className="row-selection w-50px">
      <Checkbox
        solid
        /*                  checked={
    !!selectedKeys.size &&
    (dataSource || []).every((data) => selectedKeys.has(getRowKey(data)))
  }
  onChange={handleChange} */
        size="sm"
        className=" p-0"
      />
    </th>
  );
}

function TreeHeaderColumn(props: TreeHeaderColumnProps) {
  const { className, col, onWidthResize } = props;

  const [ref, { right, left }] = useMeasure<HTMLTableCellElement>();

  useEffect(() => {
    onWidthResize && onWidthResize(col.key!, right + left);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [right + left]);

  return (
    <th ref={ref} className={classnames(className)}>
      {col.title}
    </th>
  );
}

type TableHeaderProps<T> = {
  selectedKeys: Set<string>;
  rowSelection?: RowSelection;
  dataSource?: T[];
  columns: TableColumn<T>[];
  renderTitle: (size: number) => React.ReactNode;
  toolbar: TableHeadToolbar;
  onColgroup: (numbers: Map<string, number>) => void;
};

function TableHeader<T>(props: TableHeaderProps<T>) {
  const { rowSelection, renderTitle, columns, selectedKeys, toolbar, onColgroup } = props;

  const state = useRef({ widths: new Map<string, number>() });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const count = useMemo(() => columns.length + (rowSelection ? 1 : 0), [rowSelection, columns]);

  const handleWidthResize = useCallback(
    (key: string, width: number) => {
      state.current.widths.set(key, width);
      if (count == state.current.widths.size) {
        onColgroup(state.current.widths);
        forceRender();
      }
    },
    [count, onColgroup],
  );

  const colgroups = state.current.widths;

  return (
    <div className="table-header">
      <table className="table table-row-bordered align-middle fw-bolder dataTable no-footer">
        <Colgroup<T>
          columns={
            rowSelection
              ? [
                  { title: '', key: '__rowSelection', width: colgroups.get('__rowSelection') },
                  ...columns.map((col) => ({ ...col, width: colgroups.get(col.key!)! })),
                ]
              : columns
          }
        />
        <thead>
          <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0 table-row-dashed">
            {rowSelection && <TreeHeaderColumnCheckbox onWidthResize={handleWidthResize} />}
            {toolbar && !!selectedKeys.size ? (
              <th
                className="row-select px-0 py-0"
                style={{ verticalAlign: 'middle' }}
                colSpan={columns.length}
              >
                <div className="d-flex justify-content-start align-items-center">
                  <div className="fw-bolder me-5 text-gray-800">
                    {renderTitle(selectedKeys.size)}
                  </div>
                  {/* {typeof toolbar == 'function' &&
                    toolbar(
                      [...selectedKeys],
                      [...selectedKeys].map((key) => temp.current.get(key)),
                    )} */}
                </div>
              </th>
            ) : (
              columns.map((col) => {
                const sortable = col.sorter || col.sortDirections || col.sortOrder;
                const sortOrder = col.sortOrder;
                const key = col.key || col.dataIndex;
                return (
                  <TreeHeaderColumn
                    key={`th-${key}`}
                    col={col}
                    className={classnames(col.className, {
                      sorting: sortable,
                      sorting_desc: sortable && sortOrder == 'descend',
                    })}
                    onWidthResize={handleWidthResize}
                  />
                );
              })
            )}
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default TableHeader;
