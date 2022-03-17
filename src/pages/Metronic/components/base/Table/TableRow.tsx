import type { CSSProperties } from 'react';
import { useCallback } from 'react';

import { Checkbox } from '../../forms/Checkbox';

import TableCell from './TableCell';
import type { RowSelection, TableColumn } from './typings';
import { getRowKey } from './utils';

type TableRowProps<T> = {
  index: number;
  data: T;
  columns: TableColumn<T>[];
  rowSelection?: RowSelection;
  checked: boolean;
  rowKey: string | ((record: T) => string);
  style?: CSSProperties;
};

function TableRow<T>(props: TableRowProps<T>) {
  const { index, data, columns, rowSelection, rowKey, style } = props;

  const { getCheckboxProps } = rowSelection || {};

  const handleCheckboxProps = useCallback(
    (_data: any) => {
      if (!getCheckboxProps) {
        return {};
      }
      return getCheckboxProps(_data);
    },
    [getCheckboxProps],
  );

  const handleSelect = useCallback(() => {}, []);

  return (
    <tr style={style}>
      {columns.map((col) =>
        col.key == '__rowSelection' ? (
          <td key="row-select" className="row-selection">
            <Checkbox
              {...handleCheckboxProps(data)}
              checked={props.checked}
              size="sm"
              solid
              className="p-0"
              value={getRowKey(data, rowKey)}
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
