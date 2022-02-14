import React, { useCallback, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';

import { Dropdown } from '../../base/Dropdown';
import Menu from '../../base/Menu';
import type { Placement } from '../../base/Dropdown/Dropdown';

import type { OptionData, OptionItemRender } from './typings';

type SelectMenuBodyProps = {
  value?: string;
  onSelect: (key: string) => void;
  closeDropdown?: () => void;
  options: OptionData[];
  itemRender?: OptionItemRender;
};

function renderMenus(options: OptionData[], itemRender?: OptionItemRender) {
  return options.map((option) => {
    if (option.type == 'separator') {
      return <Menu.Separator key={option.type} className="mx-1" />;
    }
    return (
      <Menu.Item icon="Duotune/arr085" className="px-3" key={option.value}>
        {itemRender ? itemRender(option) : option.label}
      </Menu.Item>
    );
  });
}

const SelectMenuBody = React.forwardRef(function (props: SelectMenuBodyProps, ref: any) {
  const { options, closeDropdown, onSelect, itemRender, value } = props;

  const handleSelect = useCallback(
    (menu) => {
      closeDropdown!();
      onSelect(menu.key);
    },
    [closeDropdown, onSelect],
  );

  return (
    <Menu
      className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-auto py-4"
      ref={ref}
      onSelect={handleSelect}
      selectedKeys={value ? [value] : []}
    >
      {renderMenus(options, itemRender)}
    </Menu>
  );
});

type DropdownSelectProps = {
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

function DropdownSelect(
  props: DropdownSelectProps,
  ref: React.ForwardedRef<HTMLDivElement | null>,
) {
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

  useEffect(() => {
    if (value == props.value) {
      return;
    }
    setValue(props.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

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

  return (
    <div
      tabIndex={-1}
      ref={ref}
      className={classnames('form-select', className, {
        [`form-select-${size}`]: !!size,
        'form-select-solid': solid,
      })}
    >
      <Dropdown
        overlay={
          <SelectMenuBody
            value={value}
            itemRender={itemRender}
            onSelect={handleSelect}
            options={options}
          />
        }
        placement={placement}
      >
        <a
          data-kt-menu-offset={offset ? offset.join(',') : undefined}
          onClick={handleClick}
          className="current-option text-gray-700"
        >
          {displayText}
        </a>
      </Dropdown>
    </div>
  );
}

export default React.forwardRef(DropdownSelect);
