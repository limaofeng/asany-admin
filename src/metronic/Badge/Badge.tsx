import React from 'react';

import classnames from 'classnames';

import { Color } from '../Colors';
import './style/index.scss';

export type BadgeProps = {
  tag?: 'span' | 'div';
  color?: Color;
  light?: boolean;
  shape?: 'square' | 'circle';
  dot?: boolean;
  size?: 'sm' | 'lg';
  count?: number | null;
  className?: string;
  children?: React.ReactNode;
};

function Badge(props: BadgeProps) {
  const {
    dot,
    size,
    className,
    count,
    children = count,
    shape = dot ? 'circle' : undefined,
    light,
    tag = 'span',
  } = props;
  const color = !props.color && !light ? 'light' : props.color;

  if (count === 0) {
    return <></>;
  }

  return React.createElement(
    tag,
    {
      className: classnames('badge', className, {
        'badge-square': shape === 'square',
        'badge-circle': shape === 'circle',
        [`badge-${size}`]: !!size,
        [`badge-${color}`]: !!color && !light,
        [`badge-light-${color}`]: !!light && !!color,
      }),
    },
    children,
  );
}

export default Badge;
