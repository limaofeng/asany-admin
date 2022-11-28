import { useCallback, useEffect, useMemo, useRef } from 'react';

import classnames from 'classnames';
import useMergedRef from '@react-hook/merged-ref';
import { useMeasure } from 'react-use';

import Checkbox from '../Checkbox';

import type {
  DataSource,
  NewTableColumn,
  RowSelection,
  SortDirection,
  Sorter,
  TableColumn,
  TableHeadToolbar,
} from './typings';
import { getRowKey } from './utils';

type ColgroupProps<T> = {
  columns: NewTableColumn<T>[];
  onColgroup?: (numbers: Map<string, number>) => void;
};

function getColKey<T>(col: TableColumn<T>): string {
  return (col.key || col.dataIndex)!;
}

export function Colgroup<T>({ columns, onColgroup }: ColgroupProps<T>) {
  const container = useRef<HTMLTableColElement>();

  const temp = useRef<{ columns: TableColumn<T>[] }>({ columns });

  const [ref, { width }] = useMeasure();

  const multiRef = useMergedRef(ref, container);

  useEffect(() => {
    if (!onColgroup || !width) {
      return;
    }
    const data = new Map<string, number>();
    const widths = Array.from(container.current!.children).map((item: any) => item.offsetWidth);
    temp.current.columns.forEach((col, i) => {
      data.set(getColKey(col), widths[i]);
    });
    onColgroup(data);
  }, [onColgroup, width]);

  return (
    <colgroup ref={multiRef}>
      {columns.map((col) => (
        <col key={`colgroup-cols-${getColKey(col)}`} width={col.width} />
      ))}
    </colgroup>
  );
}

type TableHeaderColumnProps = {
  className: string;
  col: NewTableColumn<any>;
  sortOrder?: SortDirection;
  onSort: (field: string, order: SortDirection) => void;
};

type TableHeaderColumnCheckboxProps = {
  checked: boolean;
  onSelect: (selected: boolean) => void;
};

function TableHeaderColumnCheckbox(props: TableHeaderColumnCheckboxProps) {
  const { onSelect } = props;

  const handleChange = useCallback(
    (e: any) => {
      onSelect(e.target.checked);
    },
    [onSelect],
  );

  return (
    <th className="row-selection">
      <Checkbox solid checked={props.checked} onChange={handleChange} size="sm" className=" p-0" />
    </th>
  );
}

function TableHeaderColumn(props: TableHeaderColumnProps) {
  const { className, col, onSort, sortOrder } = props;

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

  const handleSort = useCallback(() => {
    const _index = sortDirections.findIndex((item) => item == sortOrder) + 1;

    onSort(col.key!, sortDirections[_index == sortDirections.length ? 0 : _index]);
  }, [col.key, onSort, sortDirections, sortOrder]);

  return (
    <th
      className={classnames(className, {
        sorting: sortable,
        sorting_desc: sortable && sortOrder == 'descend',
        sorting_asc: sortable && sortOrder == 'ascend',
      })}
      onClick={sortable ? handleSort : undefined}
      style={{ width: col.width }}
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
  columns: NewTableColumn<T>[];
  rowKey: string | ((record: T) => string);
  onSelectAll: (selected: boolean) => void;
  renderTitle: (size: number) => React.ReactNode;
  toolbar: TableHeadToolbar;
  onSort: (sorter: Sorter) => void;
};

function TableHeader<T>(props: TableHeaderProps<T>) {
  const {
    renderTitle,
    columns,
    selectedKeys,
    toolbar,
    onSort,
    rowKey,
    dataSource,
    selectedAll,
    onSelectAll,
  } = props;

  const sorter = useMemo(() => {
    const col = columns.find((_col) => !!_col.sortOrder);
    return col ? ({ field: col.key, order: col.sortOrder } as Sorter) : undefined;
  }, [columns]);

  const temp = useRef({
    isStats: toolbar && !!selectedKeys.size,
    count: columns.length,
    totalWidth: 0,
  });

  temp.current.isStats = toolbar && !!selectedKeys.size;
  temp.current.count = columns.length;

  const handleSort = useCallback(
    (field: string, order: SortDirection) => {
      onSort({ field, order });
    },
    [onSort],
  );

  const handleSelect = useCallback(
    (selected: boolean) => {
      onSelectAll(selected);
    },
    [onSelectAll],
  );

  return (
    <div className="table-header">
      <table className="dataTable table table-row-bordered align-middle fw-bolder dataTable no-footer">
        <Colgroup<T> columns={columns} />
        <thead>
          <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0 table-row-dashed">
            {temp.current.isStats ? (
              <>
                <TableHeaderColumnCheckbox checked={selectedAll} onSelect={handleSelect} />
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
                  <TableHeaderColumnCheckbox
                    key={key}
                    checked={selectedAll}
                    onSelect={handleSelect}
                  />
                ) : (
                  <TableHeaderColumn
                    key={`th-${key}`}
                    col={col}
                    sortOrder={sorter?.field == col.key ? sorter?.order : undefined}
                    className={classnames(
                      typeof col.className == 'function' ? col.className('th') : col.className,
                    )}
                    onSort={handleSort}
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
