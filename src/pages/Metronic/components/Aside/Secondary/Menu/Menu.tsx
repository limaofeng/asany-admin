import React from 'react';

import classnames from 'classnames';

import type { SelectableType } from './MenuContext';
import { MenuProvider } from './MenuContext';
import MenuItem, { MenuSection } from './MenuItem';
import SubMenu from './SubMenu';
import type { EventCallback, OpenCallback, SelectEvent } from './typings';

export type MenuProps = {
  className?: string;
  children: React.ReactNode;
  accordion?: boolean;
  selectable?: SelectableType;
  triggerSubMenuAction?: 'hover' | 'click';
  openKeys?: string[];
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: EventCallback<SelectEvent>;
  onOpenChange?: OpenCallback;
};

function InternalMenu({ children, className }: any) {
  return (
    <div
      className={classnames(
        'menu menu-column menu-fit menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-5 px-6 my-5 my-lg-0',
        className,
      )}
    >
      <div className="menu-fit">
        {React.Children.map(children, (item: any) =>
          React.cloneElement(item, {
            menuKey: item.key,
            path: item.key + '/',
          }),
        )}
      </div>
    </div>
  );
}

function Menu(props: MenuProps) {
  const {
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
      onOpenChange={onOpenChange}
    >
      <InternalMenu className={classnames(className, { 'menu-tree': !accordion })}>
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
