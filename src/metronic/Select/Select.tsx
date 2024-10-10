import React, { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import $ from 'jquery';
import 'select2';
import { OptGroupData, SearchOptions } from 'select2';

import type { OptionData } from './typings';

import './Select.scss';

$.fn.select2.defaults.set('theme', 'bootstrap5');
$.fn.select2.defaults.set('selectionCssClass', ':all:');

type SelectProps = {
  value?: string;
  className?: string;
  placeholder?: string;
  width?: number | string;
  solid?: boolean;
  size?: 'sm' | 'lg';
  multiple?: boolean;
  options?: OptionData[];
  labelProp?: string;
  valueProp?: string;
  childrenProp?: string;
  selectClassName?: string;
  dropdownClassName?: string;
  matcher?: (
    params: SearchOptions,
    data: OptGroupData | OptionData,
  ) => OptGroupData | OptionData | any;
  onChange?: (
    value: string[] | string | number,
    option: OptionData | OptionData[],
  ) => void;
  onSelect?: (value: string[] | string | number, option: OptionData) => void;
};

function Select(props: SelectProps) {
  const {
    width = 'resolve',
    value,
    solid,
    size,
    multiple = false,
    matcher,
    placeholder,
    className,
    selectClassName,
    dropdownClassName,
    onChange,
    onSelect,
    options,
    labelProp = 'label',
    valueProp = 'value',
    ...selectProps
  } = props;
  const ref = useRef<HTMLSelectElement>(null);

  const [visible, setVisible] = useState(false);

  const handleSelect = useCallback((e: any) => {
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
        matcher,
        language: {
          noResults: () => '无匹配结果',
        },
        minimumResultsForSearch: matcher ? 10 : Infinity,
        closeOnSelect: multiple ? false : undefined,
        width: width as any,
        dropdownAutoWidth: true,
        dropdownCssClass: classnames(
          'form-select-dropdown-container',
          dropdownClassName,
        ),
      })
      .on('select2:select', handleSelect)
      .on('select2:unselect', handleSelect);

    const select2 = instance.data('select2') as any;
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current && select2.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownClassName, placeholder, visible]);

  useEffect(() => {
    // console.log('multiple', multiple, value);
    if (multiple) {
      $(ref.current!).val(value!).trigger('change');
      // const select2 = $(ref.current!).select2 as any;
      // select2.apply($(ref.current!), ['val', value || []]);
    } else {
      $(ref.current!).val(value!).trigger('change');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, options]);

  useEffect(() => {
    const selector = $(ref.current!);
    const timer = setInterval(function () {
      const visible = selector.is(':visible');
      setVisible(visible);
      if (visible) {
        clearInterval(timer);
      }
    }, 120);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classnames('form-select-wrapper', className)}>
      <select
        {...selectProps}
        ref={ref}
        className={classnames('form-select', selectClassName, {
          'form-select-transparent': !solid,
          [`form-select-${size}`]: !!size,
          'form-select-solid': solid,
        })}
      >
        {options?.map((item) => (
          <option key={item[valueProp]} value={item[valueProp]}>
            {item[labelProp]}
          </option>
        ))}
      </select>
    </div>
  );
}

const SelectMemo = React.memo(Select);

export default SelectMemo;
