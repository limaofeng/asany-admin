import { useMemo } from 'react';

import { getMatchMenu } from '@umijs/route-utils';
import { Link, useCurrentuser } from 'umi';
import { generatePath, useLocation, useRouteMatch } from 'react-router-dom';

import type { MenuData } from '@/.umi/app/typings';
import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu, Symbol } from '@/components/Metronic';

type OrganizationSettingsSidebarProps = {
  menu: MenuData;
};

function renderMenuItem(item: MenuData, params: any) {
  if (item.type === 'SECTION') {
    return <Menu.Section key={item.id} title={item.name} />;
  }
  if (item.type === 'URL') {
    return (
      <Menu.Item
        as={Link}
        bullet={true}
        key={item.id}
        icon={item.icon}
        title={item.name}
        url={generatePath(item.path, params)}
      />
    );
  }
  if (item.type === 'SEPARATOR') {
    return <Menu.Separator key={item.id} />;
  }
  if (item.type === 'MENU') {
    return (
      <Menu.SubMenu bullet={true} key={item.id} icon={item.icon} title={item.name}>
        {(item.routes || []).map((_item) => renderMenuItem(_item, params))}
      </Menu.SubMenu>
    );
  }
  throw new Error('不支持的 MenuType' + item.type);
}

const initMenus: MenuData[] = [];

function OrganizationSettingsSidebar(props: OrganizationSettingsSidebarProps) {
  const { menu } = props;

  const menus = menu?.routes || initMenus;
  const location = useLocation();

  const user = useCurrentuser();

  const routeMatchedMenus = useMemo(() => {
    return getMatchMenu(location.pathname, menus, true);
  }, [menus, location.pathname]);

  const match = useRouteMatch<{ id: string }>({
    path: '/organizations/:id/settings',
    strict: true,
    sensitive: true,
  });

  return (
    <AsideWorkspace>
      <div className="mt-5 px-10 pt-5 mb-6 d-flex align-items-center">
        {/* <h1 className="text-gray-800 fw-bold mb-6 mx-5">内容管理</h1> */}
        <Symbol.Avatar size={50} className="me-5" src="/assets/media/avatars/300-1.jpg" />
        <div className="d-flex flex-column">
          <div className="fw-bolder d-flex align-items-center fs-5">
            {user?.name}
            {/* <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span> */}
          </div>
          <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
            企业账户
          </a>
        </div>
      </div>
      <Menu
        className="menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 pb-6 my-5 my-lg-0"
        selectedKeys={routeMatchedMenus.map((item) => item.key!)}
      >
        {menus
          .filter((item) => !item.hideInMenu)
          .map((item) => renderMenuItem(item, match?.params || { id: 'id' }))}
      </Menu>
    </AsideWorkspace>
  );
}

export default OrganizationSettingsSidebar;
