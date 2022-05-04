import { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';

import './style.scss';

export interface RadioProps {
  solid?: boolean;
  value: string;
  size?: 'sm' | 'lg';
  checked?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

function Radio(props: RadioProps) {
  const { onClick, solid, size, value, checked: defaultChecked, children, className } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(defaultChecked);

  const handleClick = useCallback(
    (e) => {
      setChecked(true);
      onClick && onClick({ ...e, target: inputRef.current! });
    },
    [onClick],
  );

  useEffect(() => {
    if (checked != props.checked) {
      setChecked(props.checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checked]);

  return (
    <div
      className={classnames('form-radio-wrapper form-check form-check-custom', className, {
        'form-check-solid': solid,
        [`form-check-${size}`]: !!size,
      })}
      onClick={handleClick}
    >
      <span className="form-radio">
        <input
          ref={inputRef}
          className="form-check-input"
          type="radio"
          value={value}
          checked={checked}
        />
      </span>
      <label className="form-check-label">{children}</label>
    </div>
  );
}

interface RadioGroupProps {
  solid?: boolean;
  value?: string;
  size?: 'sm' | 'lg';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { label: string; value: string }[];
}

function RadioGroup(props: RadioGroupProps) {
  const { onChange, options, size, value: defaultValue, solid } = props;

  const [value, setValue] = useState(defaultValue);

  const handleClick = useCallback((e) => {
    onChange && onChange(e);
    setValue(e.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (value == defaultValue) {
      return;
    }
    setValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <div className="form-radio-group d-flex">
      {options.map((item) => (
        <Radio
          onClick={handleClick}
          size={size}
          solid={solid}
          checked={value === item.value}
          key={item.value}
          value={item.value}
        >
          {item.label}
        </Radio>
      ))}
    </div>
  );
}

Radio.Group = RadioGroup;

export default Radio;
