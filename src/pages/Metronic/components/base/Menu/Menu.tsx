import React from 'react';

import classnames from 'classnames';

import type { SelectableType } from './MenuContext';
import { MenuProvider } from './MenuContext';
import MenuItem, { MenuSection } from './MenuItem';
import SubMenu from './SubMenu';
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
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: EventCallback<SelectEvent>;
  onClick?: EventCallback<ClickEvent>;
  onOpenChange?: OpenCallback;
};

function InternalMenu(props: any) {
  const { children, className, mode = 'vertical' } = props;
  const _children = React.Children.map(children, (item: any) =>
    React.cloneElement(item, {
      menuKey: item.key,
      path: item.key + '/',
    }),
  );

  return (
    <div
      ref={props.dropdown}
      className={classnames('menu', className, {
        'menu-column': mode == 'vertical',
        'menu-rounded': true,
      })}
    >
      {props.dropdown ? _children : <div className="menu-fit">{_children}</div>}
    </div>
  );
}

function Menu(props: MenuProps) {
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
    defaultOpenKeys,
    defaultSelectedKeys,
    ...otherProps
  } = props;

  return (
    <MenuProvider
      state={{
        accordion,
        selectable,
        selectedKeys: defaultSelectedKeys!,
        openKeys: defaultOpenKeys!,
      }}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      onClick={onClick}
      onOpenChange={onOpenChange}
    >
      <InternalMenu {...otherProps} className={classnames(className, { 'menu-tree': !accordion })}>
        {children}
      </InternalMenu>
    </MenuProvider>
  );
}

Menu.defaultProps = {
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
};

Menu.Section = MenuSection;
Menu.SubMenu = SubMenu;
Menu.Item = MenuItem;

export default Menu;