import React from 'react';

import classnames from 'classnames';

type BorderColor =
  | 'white'
  | 'primary'
  | 'light'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark';
type BorderStyle = 'dotted' | 'dashed' | 'solid';
export type SeparatorProps = {
  color?: BorderColor;
  style?: BorderStyle;
  className?: string;
  border?: number;
  children?: React.ReactNode;
};

function Separator(props: SeparatorProps) {
  const { className, border = 1, color, style, children } = props;
  const haveChildren = React.Children.count(children);
  return (
    <div
      className={classnames('separator', className, {
        [`border-${border}`]: border > 1,
        [`border-${color}`]: !!color,
        [`separator-${style}`]: style != 'solid',
        'separator-content': haveChildren,
      })}
    >
      {children}
    </div>
  );
}

export default Separator;
