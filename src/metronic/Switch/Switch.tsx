import { useCallback } from 'react';

import classnames from 'classnames';

import './style.scss';

type SwitchProps = {
  label?: string;
  solid?: boolean;
  checked?: boolean;
  value?: string;
  onChange?: (e: any) => void;
};

function Switch(props: SwitchProps) {
  const { label, checked: _checked, value: _value, solid, onChange } = props;

  const handleChange = useCallback(
    (e: any) => {
      onChange && onChange(e);
    },
    [onChange],
  );

  const value = _checked != undefined ? 'true' : _value || (onChange && 'true');
  const checked = _checked || (onChange && false);

  return (
    <label
      className={classnames('form-switch form-check-custom', {
        [`form-check-${solid}`]: !!solid,
      })}
    >
      <input
        onChange={handleChange}
        className="form-check-input"
        type="checkbox"
        value={value}
        checked={checked}
      />
      {label && <span className="form-check-label fw-bold text-muted">{label}</span>}
    </label>
  );
}

export default Switch;
