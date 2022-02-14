import React, { useMemo } from 'react';

import classnames from 'classnames';

import { uuid } from '../../utils';

import type { SelectableType } from './MenuContext';
import { MenuProvider } from './MenuContext';
import type { ClickEvent, EventCallback, OpenCallback, SelectEvent } from './typings';

import './Menu.scss';

export type MenuProps = {
  className?: string;
  children: React.ReactNode;
  accordion?: boolean;
  selectable?: SelectableType;
  triggerSubMenuAction?: 'hover' | 'click';
  openKeys?: string[];
  mode?: 'horizontal' | 'vertical';
  dropdown?: boolean;
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: EventCallback<SelectEvent>;
  onClick?: EventCallback<ClickEvent>;
  onOpenChange?: OpenCallback;
};

const InternalMenu = React.forwardRef(function (props: any, ref: any) {
  const { children, className, mode = 'vertical' } = props;

  const _children = useMemo(() => {
    return React.Children.map(
      children,
      (item: any) =>
        item &&
        React.cloneElement(item, {
          menuKey: item.key || uuid(),
          path: item.key + '/',
        }),
    ).filter((item: any) => !!item);
  }, [children]);
  return (
    <div
      ref={ref}
      className={classnames('menu', className, {
        'menu-column': mode == 'vertical',
        'menu-rounded': true,
        'menu-sub menu-sub-dropdown': props.dropdown,
      })}
    >
      {props.dropdown ? _children : <div className="menu-fit">{_children}</div>}
    </div>
  );
});

function Menu(props: MenuProps, ref: React.ForwardedRef<HTMLDivElement | null>) {
  const {
    onClick,
    onSelect,
    onOpenChange,
    className,
    accordion = true,
    selectable = 'MenuItem',
    children,
    openKeys,
    selectedKeys,
    defaultOpenKeys = [],
    defaultSelectedKeys = [],
    ...otherProps
  } = props;

  return (
    <MenuProvider
      state={{
        accordion,
        selectable,
        dropdown: !!props.dropdown,
        selectedKeys: defaultSelectedKeys!,
        openKeys: defaultOpenKeys!,
      }}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      onClick={onClick}
      onOpenChange={onOpenChange}
    >
      <InternalMenu
        ref={ref}
        {...otherProps}
        className={classnames(className, { 'menu-tree': !accordion })}
      >
        {children}
      </InternalMenu>
    </MenuProvider>
  );
}

const menuForword = React.forwardRef(Menu);

export const internalMenu = menuForword as any;

export default menuForword;
