import type { DOMAttributes } from 'react';
import { useMemo } from 'react';
import { useImperativeHandle, useRef } from 'react';
import React, { useCallback, useState } from 'react';

import classnames from 'classnames';

export interface InputProps extends DOMAttributes<HTMLInputElement> {
  size?: 'xs' | 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string | null;
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

export type InputRef = {
  value: string | undefined;
  setValue: (v: string) => void;
  input: React.MutableRefObject<HTMLInputElement | null>;
  blur: () => void;
  select: () => void;
  focus: () => void;
  element: HTMLInputElement | null;
};

function Input(props: InputProps, ref: React.ForwardedRef<InputRef | null>) {
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

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(props.value != null ? props.value : props.defaultValue || '');

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

  const newValue = useMemo(() => {
    if (props.value == value) {
      return value != null ? value : '';
    }
    setValue(props.value!);
    return props.value != null ? props.value : '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  useImperativeHandle(
    ref,
    () => ({
      blur: () => {
        inputRef.current?.blur();
      },
      get element() {
        return inputRef.current;
      },
      get value() {
        return inputRef.current?.value;
      },
      setValue(v: string) {
        setValue(v);
      },
      input: inputRef,
      focus: () => {
        inputRef.current?.focus();
      },
      select: () => {
        inputRef.current?.select();
      },
    }),
    [],
  );

  const input = (
    <input
      {...otherProps}
      ref={inputRef}
      onKeyDown={handleKeyDown}
      className={classnames('form-control', className, {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
        'form-control-borderless': !bordered,
      })}
      defaultValue={props.defaultValue}
      value={onChange ? newValue : undefined}
      onChange={onChange ? handleChange : undefined}
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
