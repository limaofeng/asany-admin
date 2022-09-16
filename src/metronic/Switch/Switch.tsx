import type { CSSProperties } from 'react';
import React, { useCallback } from 'react';

import classnames from 'classnames';

import './style.scss';

type SwitchProps = {
  style?: CSSProperties;
  className?: string;
  label?: string;
  labelClassName?: string;
  solid?: boolean;
  checked?: boolean;
  value?: string;
  onChange?: (checked: boolean, e: any) => void;
};

function Switch(props: SwitchProps) {
  const {
    className,
    label,
    labelClassName,
    checked: _checked,
    value: _value,
    solid,
    style,
    onChange,
  } = props;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.checked, e);
    },
    [onChange],
  );

  const value = _checked != undefined ? 'true' : _value || (onChange && 'true');
  const checked = _checked || (onChange && false);

  return (
    <label
      style={style}
      className={classnames('form-check form-switch form-check-custom', {
        [`form-check-${solid}`]: !!solid,
      })}
    >
      <input
        onChange={handleChange}
        className={classnames('form-check-input', className)}
        type="checkbox"
        value={value}
        checked={checked}
      />
      {label && (
        <span className={classnames('form-check-label fw-bold text-muted', labelClassName)}>
          {label}
        </span>
      )}
    </label>
  );
}

export default Switch;
