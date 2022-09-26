import type { DOMAttributes } from 'react';
import { useContext } from 'react';
import React, { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';

import classnames from 'classnames';

import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import { FormItemInputContext } from '../Form/context';

import './style.scss';

export interface InputProps extends DOMAttributes<HTMLInputElement> {
  size?: 'xs' | 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string | null;
  defaultValue?: string;
  type?: 'text' | 'password';
  autoComplete?: boolean;
  bordered?: boolean;
  transparent?: boolean;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  boxClassName?: string;
  status?: InputStatus;
  addonBefore?: React.ReactNode;
  style?: React.CSSProperties;
}

export type InputRef = {
  value: string | undefined;
  setValue: (v: string) => void;
  input: React.MutableRefObject<HTMLInputElement | null>;
  blur: () => void;
  select: (start?: number, end?: number) => void;
  focus: () => void;
  element: HTMLInputElement | null;
};

function Input(props: InputProps, ref: React.ForwardedRef<InputRef | null>) {
  const {
    solid,
    addonBefore,
    type = 'text',
    bordered = true,
    autoComplete = false,
    transparent,
    onKeyDown,
    onPressEnter,
    size,
    onChange,
    className,
    boxClassName,
    status: customStatus,
    style,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(props.value != null ? props.value : props.defaultValue || '');

  const handleChange = useCallback(
    (e: any) => {
      onChange ? onChange(e) : setValue(e.target.value);
    },
    [onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown && onKeyDown(e);
      if (e.key !== 'Enter') {
        return;
      }
      onPressEnter && onPressEnter(e);
    },
    [onPressEnter, onKeyDown],
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
      select: (start?: number, end?: number) => {
        inputRef.current?.focus();
        process.nextTick(() => {
          if (start != undefined && end != undefined) {
            inputRef.current?.setSelectionRange(start, end);
          } else {
            inputRef.current?.select();
          }
        });
      },
    }),
    [],
  );

  const {
    hasFeedback,
    status: contextStatus,
    isFormItemInput,
    feedbackIcon,
  } = useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);

  const input = (
    <input
      {...otherProps}
      ref={inputRef}
      style={style}
      onKeyDown={handleKeyDown}
      className={classnames(
        'form-control',
        className,
        boxClassName,
        {
          [`form-control-${size}`]: !!size,
          'form-control-solid': solid,
          'form-control-transparent': transparent,
          'form-control-borderless': !bordered,
        },
        getStatusClassNames('form-item', mergedStatus),
      )}
      defaultValue={props.defaultValue}
      value={onChange ? newValue : undefined}
      onChange={onChange ? handleChange : undefined}
      type={type}
      autoComplete={autoComplete ? 'off' : 'on'}
    />
  );

  if (!!addonBefore || (isFormItemInput && hasFeedback)) {
    return (
      <div
        className={classnames('input-group', boxClassName, {
          'input-group-solid': solid,
        })}
      >
        {typeof addonBefore === 'string' ? (
          <span className="input-group-text" id="basic-addon3">
            {addonBefore}
          </span>
        ) : (
          addonBefore
        )}
        {input}
        <span className="input-group-text asany-input-suffix">{feedbackIcon}</span>
      </div>
    );
  }

  return input;
}

const inputForword = React.forwardRef(Input);

export const internalInput = inputForword as any;

export default inputForword;
