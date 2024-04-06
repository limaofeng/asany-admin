import { useMemo } from 'react';

import { MenuDataItem } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { getMatchMenu } from '@umijs/route-utils';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace, renderMenuItem } from '@/layouts/Demo7';
import { Menu } from '@/metronic';
import type { Menu as MenuData } from '@/types';

type PIMSidebarProps = {
  menu: MenuData;
};

function PIMSidebar(props: PIMSidebarProps) {
  const { menu } = props;
  const { children: menus } = menu;

  const location = useLocation();

  const selectedKey = useMemo(() => {
    return getMatchMenu(location.pathname, menus as MenuDataItem[], true).map(
      (item) => item.key!,
    );
  }, [menus, location.pathname]);

  return (
    <AsideWorkspace>
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">设备与产品管理</h1>
      </div>
      <OverlayScrollbarsComponent
        className="custom-scrollbar flex-column-fluid px-10 mb-5"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Menu
          className="menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0"
          selectedKeys={selectedKey}
          accordion={false}
          selectable="AllMenu"
          fit={true}
        >
          {menus.map(renderMenuItem)}
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default PIMSidebar;
