import type { CSSProperties } from 'react';
import React, { useCallback, useRef } from 'react';

import classnames from 'classnames';

import { uuid } from '../utils';

import './style.scss';

type CheckboxProps = {
  label?: string;
  solid?: boolean;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'lg';
  value?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  children?: React.ReactNode;
};

function Checkbox(props: CheckboxProps) {
  const {
    solid,
    size,
    children,
    label = children,
    style,
    disabled,
    value = '1',
    className,
    inputClassName,
    onChange,
    onClick,
  } = props;

  const id = useRef<string>(uuid());
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: any) => {
      e.target = ref.current!;
      if (props.checked !== undefined) {
        e.stopPropagation();
      }
      onChange && onChange(e);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange],
  );

  return (
    <div
      className={classnames('form-check form-check-custom', className, {
        'form-check-solid': solid,
        [`form-check-${size}`]: size,
      })}
    >
      <input
        ref={ref}
        id={id.current}
        disabled={disabled}
        style={style}
        className={classnames('form-check-input', inputClassName)}
        type="checkbox"
        checked={onChange ? props.checked || false : undefined}
        value={value}
        onClick={onClick}
        onChange={handleChange}
      />
      {label && (
        <label htmlFor={id.current} style={{ userSelect: 'none' }} className="form-check-label">
          {label}
        </label>
      )}
    </div>
  );
}

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type CheckboxGroupProps = {
  options: Option[];
};

Checkbox.Group = function (props: CheckboxGroupProps) {
  const { options = [] } = props;
  return (
    <div className="metronic-checkbox-group">
      {options.map((o) => (
        <Checkbox key={o.value} value={o.value} label={o.value} />
      ))}
    </div>
  );
};

export default Checkbox;
