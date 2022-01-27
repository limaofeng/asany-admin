import { useCallback, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

import classnames from 'classnames';

import { uuid } from '../../utils';

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  size?: 'sm' | 'lg';
  value?: string;
  style?: CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

function Checkbox(props: CheckboxProps) {
  const { size, label, style, disabled, value = '1', className, onChange } = props;

  const id = useRef<string>(uuid());
  const ref = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(props.checked || false);

  const handleClick = useCallback(
    (e) => {
      e.target = ref.current!;
      if (props.checked !== undefined) {
        e.stopPropagation();
      } else {
        setChecked((_checked) => !_checked);
      }
      onChange && onChange(e);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange],
  );

  return (
    <div
      className={classnames('form-check form-check-custom form-check-solid', className, {
        'form-check-sm': size == 'sm',
        'form-check-lg': size == 'lg',
      })}
    >
      <input
        ref={ref}
        id={id.current}
        disabled={disabled}
        style={style}
        className="form-check-input"
        type="checkbox"
        checked={onChange ? props.checked : checked}
        value={value}
        onChange={handleClick}
      />
      {label && (
        <label onClick={handleClick} className="form-check-label">
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
