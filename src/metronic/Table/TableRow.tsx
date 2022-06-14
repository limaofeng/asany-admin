import type { CSSProperties } from 'react';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import classnames from 'classnames';

import Checkbox from '../Checkbox';

import TableCell from './TableCell';
import type { DataRecoverer, RowHeightFunc, RowSelection, TableColumn } from './typings';
import { getRowKey } from './utils';

type TableRowProps<T> = {
  index: number;
  data: T;
  columns: TableColumn<T>[];
  recoverer: DataRecoverer<T>;
  className: string;
  rowHeight?: number | RowHeightFunc;
  onSelect: (record: T, selected: boolean, e: any) => void;
  rowSelection?: RowSelection<T>;
  useCheck: (record: T) => boolean;
  rowKey: string | ((record: T) => string);
  style?: CSSProperties;
};

function isNoSelectoDrag(dom?: HTMLElement, container?: HTMLElement): boolean {
  if (dom == container || !dom || !container) {
    return false;
  }
  const isOff = Array.from(dom.classList).includes('no-selecto-drag');
  if (isOff) {
    return true;
  }
  return isNoSelectoDrag(dom.parentNode, container);
}

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
    rowHeight,
    onSelect,
  } = props;

  const ref = useRef<HTMLTableRowElement>(null);

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
    (e: any) => {
      if (ref.current?.dataset.ignore_click == 'on') {
        return;
      }
      if (isNoSelectoDrag(e.target, ref.current!)) {
        return;
      }
      if (e.target.type == 'checkbox' && e.type == 'click') {
        e.stopPropagation();
        return;
      }
      if (e.target.tagName == 'INPUT' && e.type == 'click') {
        return;
      }
      e.stopPropagation();
      onSelect(data, !checked, e);
    },
    [data, checked, onSelect],
  );

  useEffect(() => recoverer(data), [data, recoverer]);

  const selectable = !!rowSelection;

  return (
    <tr
      ref={ref}
      style={style}
      className={classnames(className, 'table-list-item', { selected: checked })}
      data-key={keyValue}
      onClick={selectable ? handleSelect : undefined}
    >
      {columns.map((col) =>
        col.key == '__rowSelection' ? (
          <td
            style={{ height: typeof rowHeight === 'function' ? rowHeight({ index }) : rowHeight }}
            key="row-select"
            className="row-selection"
          >
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
