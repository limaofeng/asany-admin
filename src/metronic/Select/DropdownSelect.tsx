import React, { useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';

import classnames from 'classnames';

import Dropdown from '../Dropdown';
import type { Placement } from '../Dropdown/Dropdown';
import Menu from '../Menu';
import { uuid } from '../utils';

import type { OptionData, OptionItemRender } from './typings';

type SelectMenuBodyProps = {
  value?: string;
  onSelect: (key: string) => void;
  closeDropdown?: () => void;
  className?: string;
  options: OptionData[];
  itemRender?: OptionItemRender;
};

function renderMenus(options: OptionData[], itemRender?: OptionItemRender) {
  return options.map((option) => {
    if (option.type == 'separator') {
      return <Menu.Separator key={option.type + '-' + uuid()} className="mx-1" />;
    }
    return (
      <Menu.Item icon="Duotune/arr085" data-key={option.value} className="px-3" key={option.value}>
        {itemRender ? itemRender(option) : option.label}
      </Menu.Item>
    );
  });
}

const SelectMenuBody = React.forwardRef(function (props: SelectMenuBodyProps, ref: any) {
  const { options, closeDropdown, onSelect, itemRender, value, className } = props;

  const handleSelect = useCallback(
    (menu) => {
      closeDropdown!();
      onSelect(menu.key);
    },
    [closeDropdown, onSelect],
  );

  return (
    <Menu
      fit
      rounded
      ref={ref}
      className={classnames(
        'menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold py-4 w-auto',
        className,
      )}
      onSelect={handleSelect}
      selectedKeys={value ? [value] : []}
    >
      {renderMenus(options, itemRender)}
    </Menu>
  );
});

export type SelectProps = {
  placeholder?: string;
  options: OptionData[];
  solid?: boolean;
  offset?: [number, number];
  size?: 'xs' | 'sm' | 'lg';
  className?: string;
  placement?: Placement;
  value?: string;
  itemRender?: OptionItemRender;
  onChange?: (value: string, option: OptionData) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type SelectRef = {};

function DropdownSelect(props: SelectProps, ref: React.ForwardedRef<SelectRef | null>) {
  const { placement, offset, options, itemRender, size, className, solid, onChange, placeholder } =
    props;

  const [value, setValue] = useState(props.value);

  const handleSelect = useCallback(
    (key: string) => {
      onChange && onChange(key, options.find((item) => item.value == key)!);
    },
    [onChange, options],
  );

  const handleClick = useCallback((e: React.MouseEvent) => {
    (e.target as HTMLAnchorElement).parentElement?.focus();
  }, []);

  const resetDefaults = useCallback(
    (_options: OptionData[]) => {
      const key = _options[0]?.value;
      if (key) {
        setValue(key);
        onChange && onChange(key, (_options || []).find((item) => item.value == key)!);
      }
    },
    [setValue, onChange],
  );

  useEffect(() => {
    if (!props.value && !placeholder) {
      resetDefaults(options);
      return;
    }
    if (props.value && !options.some((it) => it.value == props.value)) {
      resetDefaults(options);
      return;
    }
    if (value == props.value) {
      return;
    }
    setValue(props.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value, options]);

  const displayText = useMemo(() => {
    if (!value) {
      return null;
    }
    const opt = options.find((item) => item.value == value);
    if (!opt) {
      return placeholder;
    }
    return (itemRender && itemRender(opt, true)) || opt.label;
  }, [value, options, itemRender, placeholder]);

  useImperativeHandle(ref, () => ({}));

  return (
    <Dropdown
      overlay={
        <SelectMenuBody
          value={value}
          className="form-select-popover"
          itemRender={itemRender}
          onSelect={handleSelect}
          options={options}
        />
      }
      placement={placement}
    >
      <div
        tabIndex={-1}
        className={classnames('form-select', className, {
          [`form-select-${size}`]: !!size,
          'form-select-solid': solid,
        })}
      >
        <a
          data-kt-menu-offset={offset ? offset.join(',') : undefined}
          onClick={handleClick}
          className="current-option text-gray-700"
        >
          {displayText}
        </a>
      </div>
    </Dropdown>
  );
}

const DropdownSelectForwardRef = React.forwardRef(DropdownSelect);

export default DropdownSelectForwardRef;
