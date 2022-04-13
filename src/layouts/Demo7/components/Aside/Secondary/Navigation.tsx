import React, { useMemo } from 'react';

import { getMatchMenu } from '@umijs/route-utils';
import { useLocation } from 'umi';

import type { MenuData } from '@/.umi/app/typings';
import { Menu } from '@/pages/Metronic/components';

type MenuPaneProps = {
  title: string;
  menus: MenuData[];
};

export function renderMenuItem(item: MenuData) {
  if (item.type === 'SECTION') {
    return <Menu.Section key={item.id} title={item.name} />;
  }
  if (item.type === 'URL') {
    return (
      <Menu.Item bullet={true} key={item.id} icon={item.icon} title={item.name} url={item.path} />
    );
  }
  if (item.type === 'SEPARATOR') {
    return <Menu.Separator />;
  }
  if (item.type === 'MENU') {
    return (
      <Menu.SubMenu bullet={true} key={item.id} icon={item.icon} title={item.name}>
        {(item.routes || []).map(renderMenuItem)}
      </Menu.SubMenu>
    );
  }
  throw new Error('不支持的 MenuType' + item.type);
}

function Navigation({ menus, title }: MenuPaneProps) {
  const location = useLocation();

  const routeMatchedMenus = useMemo(() => {
    return getMatchMenu(location.pathname, menus, true);
  }, [menus, location.pathname]);

  return (
    <>
      <div className="m-0">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">{title}</h1>
      </div>
      <Menu
        className="menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
        selectedKeys={routeMatchedMenus.map((item) => item.key!)}
      >
        {menus.map(renderMenuItem)}
      </Menu>
    </>
  );
}

export default React.memo(Navigation);
