import type { DOMAttributes } from 'react';
import React, { useCallback, useState } from 'react';

import classnames from 'classnames';

export interface InputProps extends DOMAttributes<HTMLInputElement> {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string;
  defaultValue?: string;
  type?: 'text' | 'password';
  autoComplete?: boolean;
  bordered?: boolean;
  prefix?: React.ReactNode;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  boxClassName?: string;
}

function Input(props: InputProps, ref: React.ForwardedRef<HTMLInputElement | null>) {
  const {
    solid,
    prefix,
    type = 'text',
    bordered = true,
    autoComplete = false,
    onPressEnter,
    size,
    onChange,
    className,
    boxClassName,
    ...otherProps
  } = props;

  const [value, setValue] = useState(props.value || props.defaultValue || '');

  const handleChange = useCallback(
    (e) => {
      onChange ? onChange(e) : setValue(e.target.value);
    },
    [onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') {
        return;
      }
      onPressEnter && onPressEnter(e);
    },
    [onPressEnter],
  );

  const input = (
    <input
      {...otherProps}
      ref={ref}
      onKeyDown={handleKeyDown}
      className={classnames('form-control', className, {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
        'form-control-borderless': !bordered,
      })}
      value={onChange ? props.value || '' : value}
      onChange={handleChange}
      type={type}
      autoComplete={autoComplete ? 'off' : 'on'}
    />
  );

  if (!!prefix) {
    return (
      <div className={classnames('d-flex align-items-center position-relative', boxClassName)}>
        {prefix}
        {input}
      </div>
    );
  }

  return input;
}

const inputForword = React.forwardRef(Input);

export const internalInput = inputForword as any;

export default inputForword;
