import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import classnames from 'classnames';

import { Checkbox } from '../../forms/Checkbox';

import TableCell from './TableCell';
import type { DataRecoverer, RowSelection, TableColumn } from './typings';
import { getRowKey } from './utils';

type TableRowProps<T> = {
  index: number;
  data: T;
  columns: TableColumn<T>[];
  recoverer: DataRecoverer<T>;
  className: string;
  onSelect: (record: T, selected: boolean, e: any) => void;
  rowSelection?: RowSelection;
  useCheck: (record: T) => boolean;
  rowKey: string | ((record: T) => string);
  style?: CSSProperties;
};

function TableRow<T>(props: TableRowProps<T>) {
  const {
    index,
    recoverer,
    data,
    columns,
    className,
    rowSelection,
    useCheck,
    rowKey,
    style,
    onSelect,
  } = props;

  const { getCheckboxProps } = rowSelection || {};

  const checked = useCheck(data);

  const keyValue = useMemo(() => getRowKey(data, rowKey), [data, rowKey]);

  const handleCheckboxProps = useCallback(
    (_data: any) => {
      if (!getCheckboxProps) {
        return {};
      }
      return getCheckboxProps(_data);
    },
    [getCheckboxProps],
  );

  const handleSelect = useCallback(
    (e) => {
      if (e.target.type == 'checkbox' && e.type == 'click') {
        e.stopPropagation();
        return;
      }
      onSelect(data, !checked, e);
    },
    [data, checked, onSelect],
  );

  useEffect(() => recoverer(data), [data, recoverer]);

  const selectable = !!rowSelection;

  return (
    <tr
      style={style}
      className={classnames(className, 'table-list-item')}
      data-key={keyValue}
      onClick={selectable ? handleSelect : undefined}
    >
      {columns.map((col) =>
        col.key == '__rowSelection' ? (
          <td key="row-select" className="row-selection">
            <Checkbox
              {...handleCheckboxProps(data)}
              checked={checked}
              size="sm"
              solid
              className="p-0"
              value={keyValue}
              onChange={handleSelect}
            />
          </td>
        ) : (
          <TableCell key={`${col.key}`} index={index} data={data} col={col} />
        ),
      )}
    </tr>
  );
}

export default TableRow;
