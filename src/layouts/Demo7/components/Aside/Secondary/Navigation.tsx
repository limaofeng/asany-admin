import React from 'react';

import type { MenuData } from '@/.umi/app/typings';
import { Menu } from '@/pages/Metronic/components';

type MenuPaneProps = {
  title: string;
  menus: MenuData[];
};

function renderMenuItem(item: MenuData) {
  if (item.type === 'SECTION') {
    return <Menu.Section key={item.id} title={item.name} />;
  }
  if (item.type === 'URL') {
    return (
      <Menu.Item bullet={true} key={item.id} icon={item.icon} title={item.name} url={item.path} />
    );
  }
  if (item.type === 'MENU') {
    return (
      <Menu.SubMenu bullet={true} key={item.id} icon={item.icon} title={item.name}>
        {(item.children || []).map(renderMenuItem)}
      </Menu.SubMenu>
    );
  }
  throw new Error('不支持的 MenuType' + item.type);
}

function Navigation({ menus, title }: MenuPaneProps) {
  return (
    <>
      <div className="m-0">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">{title}</h1>
      </div>
      <Menu
        className="menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-5 px-6 my-5 my-lg-0"
        defaultSelectedKeys={['1']}
      >
        {menus.map(renderMenuItem)}
      </Menu>
    </>
  );
}

export default React.memo(Navigation);
