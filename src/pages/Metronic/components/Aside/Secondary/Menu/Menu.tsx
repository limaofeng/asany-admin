import React from 'react';
import { useEffect } from 'react';
import type { SelectableType } from './MenuContext';
import { MenuProvider, useDispatch } from './MenuContext';
import MenuItem, { MenuSection } from './MenuItem';
import SubMenu from './SubMenu';

export type SelectEvent = {
  item: any;
  key: string;
  keyPath: string;
  selectedKeys: string[];
  domEvent: any;
};

export type MenuProps = {
  children: React.ReactNode;
  accordion?: boolean;
  selectable?: SelectableType;
  triggerSubMenuAction?: 'hover' | 'click';
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: (event: SelectEvent) => void;
};

function InternalMenu({ children }: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'binding',
      payload: {
        children: React.Children.map(children, (item) => ({ id: (item as any).key })),
      },
    });
    return () => {
      dispatch({ type: 'reset' });
    };
  }, [children, dispatch]);
  return (
    <div className="menu menu-column menu-fit menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-5 px-6 my-5 my-lg-0">
      <div className="menu-fit">
        {React.Children.map(children, (item) =>
          React.cloneElement(item as any, {
            menuKey: (item as any).key,
          }),
        )}
      </div>
    </div>
  );
}

function Menu(props: MenuProps) {
  const {
    accordion = true,
    selectable = 'MenuItem',
    children,
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
    >
      <InternalMenu>{children}</InternalMenu>
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
