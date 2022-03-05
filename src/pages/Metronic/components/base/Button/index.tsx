import React from 'react';

import classnames from 'classnames';

import { Spin } from '../Spin';

type Variant =
  | 'white'
  | 'primary'
  | 'light'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'link'
  | 'default';

type VariantStyle = 'light' | 'background';

type ACTIVE_LIGHT_STYLE =
  | 'light-white'
  | 'light-primary'
  | 'light-secondary'
  | 'light-success'
  | 'light-info'
  | 'light-warning'
  | 'light-danger'
  | 'light-dark';

type ButtonColor =
  | 'white'
  | 'primary'
  | 'secondary'
  | 'light'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'muted'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900';

type ActiveColor = Variant | ACTIVE_LIGHT_STYLE;

export interface ButtonProps<AsProps = any> {
  as?: 'button' | 'a' | 'span' | React.ComponentType<AsProps>;
  id?: string;
  variant?: Variant | 'clean' | false;
  variantStyle?: VariantStyle;
  dashed?: boolean;
  type?: 'dashed' | 'link';
  disabled?: boolean;
  icon?: React.ReactNode;
  color?: ButtonColor;
  iconColor?: ButtonColor;
  activeIconColor?: ButtonColor;
  textColor?: ButtonColor;
  activeTextColor?: ButtonColor;
  activeColor?: ActiveColor;
  flushed?: boolean;
  active?: boolean;
  size?: 'lg' | 'sm' | 'xs';
  className?: string;
  htmlType?: 'submit' | 'button' | 'reset';
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  to?: string;
}

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

  return React.createElement(
    htmlType ? 'button' : as,
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
          [`btn-${variant}`]: !variantStyle && variant,
          [`btn-${variantStyle}-${variant}`]: variantStyle && variant,
          [`btn-color-${color}`]: !!color,
          [`btn-color-text-${textColor}`]: !!textColor,
          [`btn-active-${activeColor}`]: !!activeColor,
          [`btn-active-text-${activeTextColor}`]: !!activeTextColor,
          [`btn-active-icon-${activeIconColor}`]: !!activeIconColor,
          [`btn-bg-${variant}`]: variantStyle == 'background',
          [`btn-outline btn-outline-dashed btn-outline-${variant} btn-active-light-${variant}`]:
            type == 'dashed',
          'btn-flush': flushed,
          [`btn-${size}`]: !!size,
          'btn-icon': !!icon && React.Children.count(children) == 0,
          ['d-inline-flex align-items-center']: !!icon && React.Children.count(children) > 0,
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

export default React.forwardRef(Button);
