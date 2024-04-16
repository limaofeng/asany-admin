import type { DOMAttributes } from 'react';
import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

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
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
  boxClassName?: string;
  status?: InputStatus;
  addonBefore?: React.ReactNode;
  style?: React.CSSProperties;
  readOnly?: boolean;
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
    onClick,
    onKeyDown,
    onPressEnter,
    size,
    onChange,
    className,
    boxClassName,
    status: customStatus,
    style,
    readOnly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const state = useRef({
    isFirst: true,
  });
  const [value, setValue] = useState(props.value || props.defaultValue || '');

  useEffect(() => {
    if (state.current.isFirst) {
      state.current.isFirst = false;
      return;
    }
    if (value === props.value) {
      return;
    }
    console.log('>>>>>>>>>', value, props.value);
    onChange && onChange({ target: { value } } as any);
  }, [value]);

  const handleChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

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

  useEffect(() => {
    setValue(props.value! || props.defaultValue || '');
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
          if (start !== undefined && end !== undefined) {
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

  const handleClick = useCallback(
    (e: any) => {
      onClick && onClick(e);
    },
    [onClick],
  );

  console.log('otherProps', otherProps);

  const input = (
    <input
      {...otherProps}
      ref={inputRef}
      style={style}
      readOnly={readOnly}
      onClick={handleClick}
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
      value={value}
      onChange={handleChange}
      type={type}
      autoComplete={autoComplete ? 'off' : 'on'}
    />
  );

  if (!!addonBefore || (isFormItemInput && hasFeedback)) {
    return (
      <div
        className={classnames('input-group d-flex flex-row', boxClassName, {
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
        {React.cloneElement(input, {
          className: classnames('flex-root', input.props.className),
        })}
        <span className="input-group-text asany-input-suffix">
          {feedbackIcon}
        </span>
      </div>
    );
  }

  return input;
}

const inputForword = React.forwardRef(Input);

export const internalInput = inputForword as any;

export default inputForword;
