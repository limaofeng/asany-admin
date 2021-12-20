import React, { useCallback, useEffect, useRef } from 'react';

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
  value?: string;
  className?: string;
  placeholder?: string;
  width?: number | string;
  solid?: boolean;
  size?: 'sm' | 'lg';
  multiple?: boolean;
  options?: OptionData[];
  onChange?: (value: string[] | string | number, option: OptionData | OptionData[]) => void;
  onSelect?: (value: string[] | string | number, option: OptionData) => void;
};

function Select(props: SelectProps) {
  const {
    width,
    value,
    solid,
    size,
    multiple = false,
    placeholder,
    className,
    onChange,
    onSelect,
    options,
    ...selectProps
  } = props;
  const ref = useRef<HTMLSelectElement>(null);

  const handleSelect = useCallback((e) => {
    const params = e.params;
    if (!params._type) {
      return;
    }
    const ids = $(e.target)
      .select2('data')
      .map((item) => item.id);
    if (multiple) {
      onSelect && onSelect(ids, params);
      onChange && onChange(ids, params);
    } else {
      onSelect && onSelect(ids[0], params);
      onChange && onChange(ids[0], params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const instance = $(ref.current!)
      .select2({
        multiple,
        placeholder,
        minimumResultsForSearch: Infinity,
        width: width as any,
      })
      .on('select2:select', handleSelect)
      .on('select2:unselect', handleSelect);
    const select2 = instance.data('select2') as any;
    return () => {
      select2.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (multiple) {
      $(ref.current!).val(value!).trigger('change');
      const select2 = $(ref.current!).select2 as any;
      select2.apply($(ref.current!), ['val', value || []]);
    } else {
      $(ref.current!).val(value!).trigger('change');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, options]);

  return (
    <select
      {...selectProps}
      ref={ref}
      className={classnames('form-select', className, {
        [`form-select-${size}`]: !!size,
        'form-select-solid': solid,
      })}
    >
      {options?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default React.memo(Select);
