import { useCallback, useState } from 'react';
import { useMatch } from 'react-router-dom';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu } from '@/metronic';

function CRMSidebar() {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  const selectedKey = useMatch('/crm/:key')?.params?.key || 'customers';

  return (
    <AsideWorkspace width={280} className="app-sidebar app-contacts-sidebar">
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">客户管理</h1>
      </div>
      <OverlayScrollbarsComponent
        className="custom-scrollbar flex-column-fluid my-5 p-5"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Menu
          className="menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
          openKeys={openKeys}
          selectedKeys={selectedKey ? [selectedKey] : []}
          onOpenChange={handleOpenChange}
          accordion={false}
          selectable="AllMenu"
          fit={true}
        >
          <Menu.Item
            url="/crm/customers"
            icon="Bootstrap/speedometer2"
            key="customers"
          >
            客户管理
          </Menu.Item>
          <Menu.Item
            url="/crm/customer-stores"
            icon="Bootstrap/list-task"
            key="customer-stores"
          >
            门店管理
          </Menu.Item>
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default CRMSidebar;
