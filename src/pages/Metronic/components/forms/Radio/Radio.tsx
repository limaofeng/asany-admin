import { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';

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
      className={classnames('form-check form-check-custom', className, {
        'form-check-solid': solid,
        [`form-check-${size}`]: !!size,
      })}
    >
      <input
        ref={inputRef}
        className="form-check-input"
        type="radio"
        value={value}
        onChange={handleClick}
        checked={checked}
      />
      <label onClick={handleClick} className="form-check-label">
        {children}
      </label>
    </div>
  );
}
export default Radio;
