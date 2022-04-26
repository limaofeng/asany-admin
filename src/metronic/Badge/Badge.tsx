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
  size?: 'sm' | 'lg';
  className?: string;
  children?: React.ReactNode;
};

function Badge(props: BadgeProps) {
  const { size, className, children, shape, lightStyle, tag = 'span' } = props;
  const color = !props.color && !lightStyle ? 'light' : props.color;
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
