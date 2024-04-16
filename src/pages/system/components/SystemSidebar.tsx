import { useCallback, useMemo, useState } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu } from '@/metronic';

type SystemSidebarProps = {
  menuKey: {
    key: string;
    params: any;
  };
};

function SystemSidebar(props: SystemSidebarProps) {
  const { menuKey } = props;

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  const selectedKey = useMemo(() => {
    switch (menuKey.key) {
      case 'category':
        return menuKey.params.cid;
      default:
        return menuKey.key;
    }
  }, [menuKey]);

  console.log('selectedKey', selectedKey, menuKey);

  return (
    <AsideWorkspace>
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">系统管理</h1>
      </div>
      <OverlayScrollbarsComponent
        className="custom-scrollbar flex-column-fluid px-10 mb-5"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Menu
          className="cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0"
          openKeys={openKeys}
          selectedKeys={selectedKey ? [selectedKey] : []}
          onOpenChange={handleOpenChange}
          accordion={false}
          selectable="AllMenu"
          fit={true}
        >
          <Menu.Item
            url="/system/users"
            icon="Duotune/com013"
            key="system-users"
          >
            用户管理
          </Menu.Item>
          {/*
          <Menu.Item
            icon="Duotune/gen048"
            key="system-roles"
          >
            角色管理
          </Menu.Item>
          <Menu.Item icon="Duotune/gen005" key="system-audit-log">
            审计日志
          </Menu.Item>
          */}
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default SystemSidebar;
