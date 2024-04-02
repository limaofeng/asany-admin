import { useMemo } from 'react';

import { getMatchMenu, type MenuDataItem } from '@umijs/route-utils';
import { useLocation } from 'react-router';

import { useCurrentuser } from '@/hooks';
import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu, Symbol } from '@/metronic';
import type { Menu as MenuData } from '@/types';
import { getFileThumbnailUrlById } from '@/utils';

type UserSettingsSidebarProps = {
  menu: MenuData;
};

function renderMenuItem(item: MenuDataItem) {
  if (item.type === 'SECTION') {
    return <Menu.Section key={item.id}>{item.name}</Menu.Section>;
  }
  if (item.type === 'URL') {
    return (
      <Menu.Item
        bullet={true}
        key={item.id}
        icon={item.icon}
        title={item.name}
        url={item.path!}
      />
    );
  }
  if (item.type === 'SEPARATOR') {
    return <Menu.Separator key={item.id} className="my-1" />;
  }
  if (item.type === 'MENU') {
    return (
      <Menu.SubMenu
        bullet={true}
        key={item.id}
        icon={item.icon}
        title={item.name}
      >
        {(item.children || []).map(renderMenuItem)}
      </Menu.SubMenu>
    );
  }
  throw new Error('不支持的 MenuType' + item.type);
}

const initMenus: MenuDataItem[] = [];

function UserSettingsSidebar(props: UserSettingsSidebarProps) {
  const { menu } = props;

  const menus = (menu?.children as MenuDataItem[]) || initMenus;
  const location = useLocation();

  const { data: user } = useCurrentuser();

  const routeMatchedMenus = useMemo(() => {
    return getMatchMenu(location.pathname, menus, true);
  }, [menus, location.pathname]);

  return (
    <AsideWorkspace>
      <div className="mt-5 px-10 pt-5 mb-6 d-flex align-items-center">
        <Symbol.Avatar
          size={50}
          className="me-5"
          src={getFileThumbnailUrlById(user?.avatar?.id, { size: '300x300' })}
          alt={user?.name}
        />
        <div className="d-flex flex-column">
          <div className="fw-bolder d-flex align-items-center fs-5">
            {user?.name}
            {/* <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span> */}
          </div>
          <a className="fw-bold text-muted text-hover-primary fs-7">
            {user?.email || ' '}
          </a>
        </div>
      </div>
      <Menu
        className="menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
        selectedKeys={routeMatchedMenus.map((item) => item.key!)}
      >
        {menus.filter((item) => !item.hideInMenu).map(renderMenuItem)}
      </Menu>
    </AsideWorkspace>
  );
}

export default UserSettingsSidebar;
