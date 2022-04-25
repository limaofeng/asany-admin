import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { useMeasure } from 'react-use';

import Checkbox from '../Checkbox';

import type {
  DataSource,
  RowSelection,
  SortDirection,
  Sorter,
  TableColumn,
  TableHeadToolbar,
} from './typings';
import { getRowKey } from './utils';

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
  sortOrder?: SortDirection;
  onSort: (field: string, order: SortDirection) => void;
  onWidthResize: (key: string, width: number) => void;
};

type TreeHeaderColumnCheckboxProps = {
  checked: boolean;
  onSelect: (selected: boolean) => void;
  onWidthResize: (key: string, width: number) => void;
};

function TreeHeaderColumnCheckbox(props: TreeHeaderColumnCheckboxProps) {
  const { onWidthResize, onSelect } = props;

  const [ref, { right, left }] = useMeasure<HTMLTableCellElement>();

  useEffect(() => {
    onWidthResize('__rowSelection', right + left);
  }, [left, onWidthResize, right]);

  const handleChange = useCallback(
    (e) => {
      onSelect(e.target.checked);
    },
    [onSelect],
  );

  return (
    <th ref={ref} className="row-selection w-50px">
      <Checkbox solid checked={props.checked} onChange={handleChange} size="sm" className=" p-0" />
    </th>
  );
}

function TreeHeaderColumn(props: TreeHeaderColumnProps) {
  const { className, col, onSort, onWidthResize, sortOrder } = props;

  const sortable = useMemo(
    () => !!(col.sorter || col.sortDirections || sortOrder),
    [col.sortDirections, sortOrder, col.sorter],
  );

  const sortDirections: SortDirection[] = useMemo(() => {
    if (!sortable) {
      return [];
    }
    if (col.sortDirections) {
      return col.sortDirections;
    }
    return ['ascend', 'descend'];
  }, [col.sortDirections, sortable]);

  const [ref, { width, x, y }] = useMeasure<HTMLTableCellElement>();

  useEffect(() => {
    // console.log('TreeHeaderColumn', col.key, width, x, y);
    onWidthResize(col.key!, width + x);
  }, [col.key, onWidthResize, width, x, y]);

  const handleSort = useCallback(() => {
    const _index = sortDirections.findIndex((item) => item == sortOrder) + 1;

    onSort(col.key!, sortDirections[_index == sortDirections.length ? 0 : _index]);
  }, [col.key, onSort, sortDirections, sortOrder]);

  return (
    <th
      ref={ref}
      className={classnames(className, {
        sorting: sortable,
        sorting_desc: sortable && sortOrder == 'descend',
        sorting_asc: sortable && sortOrder == 'ascend',
      })}
      onClick={sortable ? handleSort : undefined}
    >
      {col.title}
    </th>
  );
}

type TableHeaderProps<T> = {
  selectedAll: boolean;
  selectedKeys: Set<string>;
  rowSelection?: RowSelection<T>;
  dataSource: DataSource<T>;
  columns: TableColumn<T>[];
  rowKey: string | ((record: T) => string);
  onSelectAll: (selected: boolean) => void;
  renderTitle: (size: number) => React.ReactNode;
  toolbar: TableHeadToolbar;
  onSort: (sorter: Sorter) => void;
  onColgroup: (numbers: Map<string, number>) => void;
};

function TableHeader<T>(props: TableHeaderProps<T>) {
  const {
    renderTitle,
    columns,
    selectedKeys,
    toolbar,
    onColgroup,
    onSort,
    rowKey,
    dataSource,
    selectedAll,
    onSelectAll,
  } = props;

  const state = useRef<{
    widths: Map<string, number>;
  }>({ widths: new Map<string, number>() });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const sorter = useMemo(() => {
    const col = columns.find((_col) => !!_col.sortOrder);
    return col ? ({ field: col.key, order: col.sortOrder } as Sorter) : undefined;
  }, [columns]);

  const temp = useRef({
    isStats: toolbar && !!selectedKeys.size,
    count: columns.length,
  });

  temp.current.isStats = toolbar && !!selectedKeys.size;
  temp.current.count = columns.length;

  const handleWidthResize = useCallback(
    (key: string, width: number) => {
      const { isStats, count } = temp.current;
      // console.log('selectedKeys', isStats, key, width);
      state.current.widths.set(key, width);
      if (!isStats && count == state.current.widths.size) {
        onColgroup(state.current.widths);
        forceRender();
      }
    },
    [onColgroup],
  );

  const handleSort = useCallback(
    (field: string, order: SortDirection) => {
      onSort({ field, order });
    },
    [onSort],
  );

  const handleSelect = useCallback(
    (selected) => {
      onSelectAll(selected);
    },
    [onSelectAll],
  );

  // console.log('selectedKeys', selectedKeys.size, columns, isStats);

  return (
    <div className="table-header">
      <table className="dataTable table table-row-bordered align-middle fw-bolder dataTable no-footer">
        <Colgroup<T> columns={columns} />
        <thead>
          <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0 table-row-dashed">
            {temp.current.isStats ? (
              <>
                <TreeHeaderColumnCheckbox
                  checked={selectedAll}
                  onSelect={handleSelect}
                  onWidthResize={handleWidthResize}
                />
                <th
                  className="row-select px-0 py-0"
                  style={{ verticalAlign: 'middle' }}
                  colSpan={columns.length - 1}
                >
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="fw-bolder me-5 text-gray-800">
                      {renderTitle(selectedKeys.size)}
                    </div>
                    {typeof toolbar == 'function' &&
                      toolbar(
                        [...selectedKeys],
                        dataSource.items.filter((item) =>
                          selectedKeys.has(getRowKey(item, rowKey)),
                        ),
                      )}
                  </div>
                </th>
              </>
            ) : (
              columns.map((col) => {
                const key = col.key || col.dataIndex;
                return key == '__rowSelection' ? (
                  <TreeHeaderColumnCheckbox
                    key={key}
                    checked={selectedAll}
                    onSelect={handleSelect}
                    onWidthResize={handleWidthResize}
                  />
                ) : (
                  <TreeHeaderColumn
                    key={`th-${key}`}
                    col={col}
                    sortOrder={sorter?.field == col.key ? sorter?.order : undefined}
                    className={classnames(col.className)}
                    onSort={handleSort}
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
