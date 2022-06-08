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
  inputClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

function Radio(props: RadioProps) {
  const {
    onClick,
    solid,
    size,
    value,
    checked: defaultChecked,
    children,
    className,
    inputClassName,
  } = props;

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
          className={classnames('form-check-input', inputClassName)}
          type="radio"
          value={value}
          onChange={() => {}}
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
  options?: { label: string; value: string }[];
  children?: React.ReactNode;
  className?: string;
}

function RadioGroup(props: RadioGroupProps) {
  const { onChange, options = [], size, value: defaultValue, solid, children, className } = props;

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
    <div className={classnames('form-radio-group', className)}>
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
      {children}
    </div>
  );
}

Radio.Group = RadioGroup;

export default Radio;
