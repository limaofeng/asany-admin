import React, { useMemo } from 'react';

import classnames from 'classnames';

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

type VariantStyle = 'light' | 'background' | 'dashed' | 'link';

type ActiveStyle = 'text' | 'light';

type ActiveColor =
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

type ButtonColor = ActiveColor;
export interface ButtonProps {
  as?: 'button' | 'a' | React.ComponentType<any>;
  id?: string;
  variant?: Variant;
  variantStyle?: VariantStyle;
  dashed?: boolean;
  icon?: React.ReactNode;
  color?: ButtonColor;
  textColor?: ButtonColor;
  activeStyle?: ActiveStyle;
  activeColor?: ActiveColor;
  flushed?: boolean;
  active?: boolean;
  size?: 'lg' | 'sm';
  className?: string;
  htmlType?: 'submit' | 'button' | 'reset';
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: any;
}

function Button({
  as = 'a',
  size,
  icon,
  color,
  children,
  className,
  flushed,
  loading,
  htmlType,
  variantStyle,
  textColor,
  variant = variantStyle == 'dashed' ? 'default' : 'primary',
  active,
  activeStyle,
  activeColor,
  onClick,
  ...props
}: ButtonProps) {
  const buttonStyle = useMemo(() => {
    if (variantStyle == 'link') {
      return 'btn-link';
    }
    if (variantStyle == 'dashed') {
      return `btn-outline btn-outline-dashed btn-outline-${variant}`;
    }
    if (variantStyle == 'background') {
      return `btn-bg-${variant}`;
    }
    if (variantStyle == 'light') {
      return `btn-light-${variant}`;
    }
    return `btn-${variant}`;
  }, [variantStyle, variant]);

  if (loading != null) {
    props['data-kt-indicator'] = loading ? 'on' : 'off';
  }

  return React.createElement(
    htmlType ? 'button' : as,
    {
      ...props,
      onClick,
      type: htmlType,
      disabled: loading,
      className: classnames(
        'btn',
        buttonStyle,
        {
          active,
          'btn-flush': flushed,
          [`btn-${size}`]: !!size,
          [`btn-color-${color}`]: !!color,
          [`btn-color-text-${textColor}`]: !!textColor,
          'btn-color-muted': variantStyle == 'link' && !color,
          [`btn-active-${activeColor}`]: !!activeColor && !activeStyle,
          [`btn-active-light-${activeColor}`]: !!activeColor && activeStyle == 'light',
          [`btn-active-color-${activeColor}`]: !!activeColor && activeStyle == 'text',
          'btn-icon': !!icon && React.Children.count(children) == 0,
          ['d-inline-flex align-items-center']: !!icon && React.Children.count(children) > 0,
        },
        className,
      ),
    },
    loading != undefined ? (
      <span className={classnames({ 'indicator-label': !loading, 'indicator-progress': loading })}>
        {children}
        {loading && <span className="spinner-border spinner-border-sm align-middle ms-2" />}
      </span>
    ) : (
      <>
        {icon}
        {children}
      </>
    ),
  );
}

export default Button;
