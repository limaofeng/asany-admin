import React from 'react';

import Menu from './Menu';

import type { MenuData } from '@/.umi/app/typings';

type MenuPaneProps = {
  menus: MenuData[];
};

function renderMenuItem(item: MenuData) {
  if (item.type === 'SECTION') {
    return <Menu.Section key={item.id} title={item.name} />;
  }
  if (item.type === 'URL') {
    return <Menu.Item key={item.id} icon={item.icon} title={item.name} />;
  }
  if (item.type === 'MENU') {
    return (
      <Menu.SubMenu key={item.id} icon={item.icon} title={item.name}>
        {(item.children || []).map(renderMenuItem)}
      </Menu.SubMenu>
    );
  }
  throw new Error('不支持的 MenuType' + item.type);
}

function Navigation({ menus }: MenuPaneProps) {
  console.log('Navigation', menus);
  return <Menu defaultSelectedKeys={['1']}>{menus.map(renderMenuItem)}</Menu>;
}

export default React.memo(Navigation);
