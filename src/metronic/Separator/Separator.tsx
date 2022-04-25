import React from 'react';

import classnames from 'classnames';

import type { SeparatorProps } from './typings';

function Separator(props: SeparatorProps) {
  const { className, border = 1, color, style, children } = props;
  const haveChildren = React.Children.count(children);
  return (
    <div
      className={classnames('separator', className, {
        [`border-${border}`]: border > 1,
        [`border-${color}`]: !!color,
        [`separator-${style}`]: !!style,
        'separator-content': haveChildren,
      })}
    >
      {children}
    </div>
  );
}

export default Separator;
