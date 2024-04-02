import { useMemo } from 'react';

import { useLocation } from '@umijs/max';
import { getMatchMenu } from '@umijs/route-utils';

import Menu from '@/metronic/Menu';
import type { Menu as MenuData } from '@/types';

function renderMenuItem(item: MenuData) {
  if (item.type === 'SECTION') {
    return <Menu.Section key={item.id} title={item.name} />;
  }
  if (item.type === 'URL') {
    return (
      <Menu.Item
        bullet={true}
        key={item.id}
        icon={item.icon}
        title={item.name}
        url={item.path}
      />
    );
  }
  if (item.type === 'SEPARATOR') {
    return <Menu.Separator key={item.id} />;
  }
  if (item.type === 'MENU') {
    return (
      <Menu.SubMenu
        bullet={true}
        key={item.id}
        icon={item.icon}
        title={item.name}
      >
        {(item.routes || []).map(renderMenuItem)}
      </Menu.SubMenu>
    );
  }
  throw new Error('不支持的 MenuType' + item.type);
}

type MenuBarProps = {
  menus?: MenuData[];
};

const initMenus: MenuData[] = [];

function MenuBar(props: MenuBarProps) {
  const { menus = initMenus } = props;

  const location = useLocation();

  const routeMatchedMenus = useMemo(() => {
    return getMatchMenu(location.pathname, menus, true);
  }, [menus, location.pathname]);

  const selectedKeys = routeMatchedMenus.map((item) => item.key!);

  return (
    <Menu
      className="menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
      selectedKeys={selectedKeys}
    >
      {menus.filter((item) => !item.hideInMenu).map(renderMenuItem)}
    </Menu>
  );
}

export default MenuBar;
