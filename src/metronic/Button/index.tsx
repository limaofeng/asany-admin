import React from 'react';

import classnames from 'classnames';

import Spin from '../Spin';
import { unpack } from '../utils';

import type { ButtonProps } from './typings';

import './style.scss';

function Button(
  {
    as = 'a',
    size,
    icon,
    color,
    children,
    className,
    flushed,
    loading,
    htmlType,
    type,
    variantStyle,
    variant = 'primary',
    textColor,
    active,
    activeColor,
    activeIconColor,
    activeTextColor,
    disabled,
    onClick,
    ...props
  }: ButtonProps<any>,
  ref: any,
) {
  if (loading != null) {
    props['data-kt-indicator'] = loading ? 'on' : 'off';
  }

  const isEmpty = unpack(children).length == 0;

  return React.createElement(
    htmlType ? 'button' : (as as any),
    {
      ...props,
      onClick,
      ref,
      type: htmlType,
      disabled: as == 'button' ? disabled || loading : undefined,
      className: classnames(
        'btn',
        {
          active,
          disabled: disabled && as != 'button',
          'btn-link': type == 'link',
          'btn-circle': type == 'circle',
          [`btn-text-${variant}`]: type == 'link',
          [`btn-${variant}`]: !variantStyle && variant && !type,
          [`btn-${variantStyle}-${variant}`]: variantStyle && variant,
          [`btn-color-${color}`]: !!color,
          [`btn-color-text-${textColor}`]: !!textColor,
          [`btn-active-${activeColor}`]: !!activeColor,
          [`btn-active-text-${activeTextColor}`]: !!activeTextColor,
          [`btn-active-icon-${activeIconColor}`]: !!activeIconColor,
          [`btn-bg-${variant}`]: variantStyle == 'background',
          [`btn-outline-dashed`]: type == 'dashed',
          [`btn-outline btn-outline-${variant} btn-active-light-${variant}`]: [
            'solid',
            'dashed',
          ].includes(type!),
          'btn-flush': flushed,
          [`btn-${size}`]: !!size,
          'btn-icon': !!icon && isEmpty,
          ['d-inline-flex align-items-center']: !!icon && !isEmpty,
        },
        className,
      ),
    },
    !loading ? (
      <>
        {icon}
        {children}
      </>
    ) : (
      <>
        <Spin size="small" tip={children} />
      </>
    ),
  );
}

const ButtonWrapper = React.memo(React.forwardRef(Button));

export default ButtonWrapper;
