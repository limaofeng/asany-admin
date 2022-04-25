import React, { useMemo } from 'react';

import classnames from 'classnames';

import { unpack, uuid } from '../utils';

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
  fit?: boolean;
  rounded?: boolean;
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: EventCallback<SelectEvent>;
  onClick?: EventCallback<ClickEvent>;
  onOpenChange?: OpenCallback;
};

const InternalMenu = React.forwardRef(function (props: any, ref: any) {
  const { children, className, mode = 'vertical', rounded = true, fit } = props;

  const _children = useMemo(() => {
    const newChildren = [];
    const originalChildren: any[] = React.Children.toArray(children);
    for (const child of originalChildren) {
      if (!child) {
        continue;
      }
      if (child.type === React.Fragment) {
        newChildren.push(
          ...unpack(child.props.children).map((x) => {
            const key = x.props['data-key'] || x.key.replace(/^[^$]+[$]/, '');
            return React.cloneElement(x, {
              menuKey: key || uuid(),
              path: key + '/',
            });
          }),
        );
      } else {
        const key = child.props['data-key'] || child.key.replace(/^[^$]+[$]/, '');
        newChildren.push(
          React.cloneElement(child, {
            menuKey: key || uuid(),
            path: key + '/',
          }),
        );
      }
    }
    return newChildren;

    // return React.Children.map(
    //   children,
    //   (item: any) =>
    //     item &&
    //     React.cloneElement(item, {
    //       menuKey: item.key || uuid(),
    //       path: item.key + '/',
    //     }),
    // ).filter((item: any) => !!item);
  }, [children]);
  return (
    <div
      ref={ref}
      className={classnames('menu', className, {
        'menu-column': mode == 'vertical',
        'menu-rounded': rounded,
        'menu-sub menu-sub-dropdown': props.dropdown,
      })}
    >
      {props.dropdown ? (
        _children
      ) : (
        <div className={classnames({ 'menu-fit': fit })}>{_children}</div>
      )}
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
