import type { DOMAttributes } from 'react';
import React from 'react';

import classnames from 'classnames';

export interface InputProps extends DOMAttributes<HTMLInputElement> {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string;
  type?: 'text' | 'password';
  autoComplete?: boolean;
  bordered?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps, ref: React.ForwardedRef<HTMLInputElement | null>) {
  const {
    solid,
    bordered = true,
    autoComplete = false,
    size,
    value = '',
    onChange,
    ...otherProps
  } = props;

  return (
    <input
      ref={ref}
      className={classnames('form-control', {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
        'form-control-borderless': !bordered,
      })}
      value={value}
      onChange={onChange}
      type="text"
      autoComplete={autoComplete ? 'off' : 'on'}
      {...otherProps}
    />
  );
}

export default React.forwardRef(Input) as any;
