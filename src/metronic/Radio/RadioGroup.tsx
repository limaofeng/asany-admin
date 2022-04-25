import { useCallback, useEffect, useState } from 'react';

import Radio from './Radio';

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

export default RadioGroup;
