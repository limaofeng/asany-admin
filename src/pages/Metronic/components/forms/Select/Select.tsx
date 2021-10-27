import { useCallback, useEffect, useRef } from 'react';

import classnames from 'classnames';
import $ from 'jquery';
import 'select2';

import './Select.scss';

$.fn.select2.defaults.set('theme', 'bootstrap5');
$.fn.select2.defaults.set('width', '100%');
$.fn.select2.defaults.set('selectionCssClass', ':all:');

type OptionData = {
  label: string;
  value: string | number;
};

type SelectProps = {
  className?: string;
  placeholder?: string;
  width?: number | string;
  solid?: boolean;
  size?: 'sm' | 'lg';
  options?: OptionData[];
  onChange?: (value: string | number, option: OptionData | OptionData[]) => void;
  onSelect?: (value: string | number, option: OptionData) => void;
};

function Select(props: SelectProps) {
  const {
    width,
    solid,
    size,
    placeholder,
    className,
    onChange,
    onSelect,
    options,
    ...selectProps
  } = props;
  const ref = useRef<HTMLSelectElement>(null);

  const handleSelect = useCallback((e) => {
    const data = e.params.data;
    onSelect && onSelect(data.id, data as any);
    onChange && onChange(data.id, data as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const instance = $(ref.current!)
      .select2({ placeholder, minimumResultsForSearch: Infinity, width: width as any })
      .on('select2:select', handleSelect);
    const select2 = instance.data('select2') as any;
    return () => {
      select2.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: any) => {
    console.log('props', e);
  };

  return (
    <select
      {...selectProps}
      ref={ref}
      className={classnames('form-select', className, {
        [`form-select-${size}`]: !!size,
        'form-select-solid': solid,
      })}
      onChange={handleChange}
    >
      {options?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
