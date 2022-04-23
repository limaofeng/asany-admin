import React from 'react';

import classnames from 'classnames';

import type { TableColumn } from './typings';

type TableCellProps<T> = {
  data: T;
  col: TableColumn<T>;
  index: number;
};

function TableCell<T>(props: TableCellProps<T>) {
  const { data, col, index } = props;
  const { align } = col;
  const value = data[(col.dataIndex || col.key) as any];
  const renderResult = col.render ? col.render(value, data, index) : value;
  const isProps = renderResult && !React.isValidElement(renderResult) && renderResult.props;
  const _props = isProps ? renderResult.props : {};
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
