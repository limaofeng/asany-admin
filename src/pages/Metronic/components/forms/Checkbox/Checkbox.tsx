import { useCallback, useRef } from 'react';
import type { CSSProperties } from 'react';

import classnames from 'classnames';

import { uuid } from '../../utils';

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
};

function Checkbox(props: CheckboxProps) {
  const { solid, size, label, style, disabled, value = '1', className, onChange, onClick } = props;

  const id = useRef<string>(uuid());
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(
    (e) => {
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
        'form-check': solid,
        [`form-check-${size}`]: size,
      })}
    >
      <input
        ref={ref}
        id={id.current}
        disabled={disabled}
        style={style}
        className="form-check-input"
        type="checkbox"
        checked={onChange ? props.checked || false : undefined}
        value={value}
        onClick={onClick}
        onChange={handleClick}
      />
      {label && (
        <label htmlFor={id.current} style={{ userSelect: 'none' }} className="form-check-label">
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
