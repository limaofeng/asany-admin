import React, { useCallback, useEffect, useState } from 'react';

import classnames from 'classnames';

import type { ButtonProps } from './typings';

import Spin from '../Spin';
import { unpack } from '../utils';

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
    loading: withoutLoading,
    htmlType,
    type,
    background,
    variant = 'primary',
    textColor,
    full,
    active,
    activeColor,
    activeIconColor,
    activeTextColor,
    disabled,
    onClick,
    style,
    ...props
  }: ButtonProps<any>,
  ref: any,
) {
  const [loading, setLoading] = useState<boolean>(!!withoutLoading);

  if (loading !== null) {
    (props as any)['data-kt-indicator'] = loading ? 'on' : 'off';
  }

  const isEmpty = unpack(children).length === 0;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const result = onClick && onClick(e);
      if (typeof withoutLoading === 'boolean') {
        return;
      }
      if (result instanceof Promise) {
        setLoading(true);
        result.finally(() => {
          setLoading(false);
        });
      }
    },
    [withoutLoading, onClick],
  );

  useEffect(() => {
    if (typeof withoutLoading !== 'boolean') {
      return;
    }
    setLoading(!!withoutLoading);
  }, [withoutLoading]);

  return React.createElement(
    htmlType ? 'button' : (as as any),
    {
      ...props,
      onClick: handleClick,
      ref,
      type: htmlType,
      disabled: as === 'button' ? disabled || loading : undefined,
      className: classnames(
        'btn',
        {
          active,
          disabled: disabled || loading,
          'btn-link': type === 'link',
          'btn-full': full,
          'btn-circle': type === 'circle',
          [`btn-text-${variant}`]: type === 'link',
          [`btn-${variant}`]: !!variant,
          [`btn-color-${color}`]: !!color,
          [`btn-color-text-${textColor}`]: !!textColor,
          [`btn-active-${activeColor}`]: !!activeColor,
          [`btn-active-text-${activeTextColor}`]: !!activeTextColor,
          [`btn-active-icon-${activeIconColor}`]: !!activeIconColor,
          [`btn-bg-${variant}`]: !!background,
          [`btn-outline-dashed`]: type === 'dashed',
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
      style,
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
