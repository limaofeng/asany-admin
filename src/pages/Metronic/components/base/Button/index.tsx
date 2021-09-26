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

type VariantStyle = 'light' | 'background' | 'dashed';

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

export interface ButtonProps {
  as?: 'button' | 'a' | React.ComponentType<any>;
  id?: string;
  variant?: Variant;
  variantStyle?: VariantStyle;
  dashed?: boolean;
  activeStyle?: ActiveStyle;
  activeColor?: ActiveColor;
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
  children,
  className,
  loading,
  htmlType,
  variantStyle,
  variant = variantStyle == 'dashed' ? 'default' : 'primary',
  active,
  activeStyle,
  activeColor,
  onClick,
  ...props
}: ButtonProps) {
  const buttonStyle = useMemo(() => {
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

  return React.createElement(
    htmlType ? 'button' : as,
    {
      ...props,
      onClick,
      type: htmlType,
      disabled: loading,
      ['data-kt-indicator']: loading ? 'on' : 'off',
      className: classnames(
        'btn',
        buttonStyle,
        {
          active,
          [`btn-${size}`]: !!size,
          [`btn-active-${activeColor}`]: !!activeColor && !activeStyle,
          [`btn-active-light-${activeColor}`]: !!activeColor && activeStyle == 'light',
          [`btn-active-color-${activeColor}`]: !!activeColor && activeStyle == 'text',
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
      children
    ),
  );
}

export default Button;
