import React from 'react';

import classnames from 'classnames';

import './style/index.scss';

export type BadgeProps = {
  tag?: 'span' | 'div';
  color?:
    | 'white'
    | 'primary'
    | 'light'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark';
  lightStyle?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'dark';
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
    lightStyle,
    tag = 'span',
  } = props;
  const color = !props.color && !lightStyle ? 'light' : props.color;

  if (count == 0) {
    return <></>;
  }

  return React.createElement(
    tag,
    {
      className: classnames('badge', className, {
        'badge-square': shape == 'square',
        'badge-circle': shape == 'circle',
        [`badge-${size}`]: !!size,
        [`badge-${color}`]: !!color,
        [`badge-light-${lightStyle}`]: !!lightStyle,
      }),
    },
    children,
  );
}

export default Badge;
