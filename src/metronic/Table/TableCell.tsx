import React from 'react';

import classnames from 'classnames';

import { getFieldValue } from '@/utils';

import type { TableColumn } from './typings';

type TableCellProps<T> = {
  data: T;
  col: TableColumn<T>;
  index: number;
};

function TableCell<T>(props: TableCellProps<T>) {
  const { data, col, index } = props;
  const { align } = col;
  const value = getFieldValue(data, (col.dataIndex || col.key)!);
  const renderResult = col.render ? col.render(value, data, index) : value;
  const isProps =
    renderResult && !React.isValidElement(renderResult) && renderResult.props;
  const _props = isProps ? renderResult.props : {};
  const children = isProps ? renderResult.children : renderResult;

  return (
    <td
      key={`${col.key}-${value}`}
      className={classnames(
        {
          'text-start': align === 'left',
          'text-center': align === 'center',
          'text-end': align === 'right',
        },
        typeof col.className === 'function'
          ? col.className('td')
          : col.className,
      )}
      {..._props}
    >
      {React.isValidElement(children) ? (
        children
      ) : (
        <span className="no-selecto-drag">{children}</span>
      )}
    </td>
  );
}

export default TableCell;
