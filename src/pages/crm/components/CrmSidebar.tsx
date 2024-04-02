import { useCallback, useState } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu } from '@/metronic';

function ProjectSidebar() {
  const [selectedKey, setSelectedKey] = useState<string>('draft');
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleSelect = useCallback((e: any) => {
    setSelectedKey(e.key);
  }, []);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  return (
    <AsideWorkspace width={280} className="app-sidebar app-contacts-sidebar">
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">客户关系</h1>
      </div>
      <OverlayScrollbarsComponent
        className="custom-scrollbar flex-column-fluid my-5 p-5"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Menu
          className="menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
          onSelect={handleSelect}
          openKeys={openKeys}
          selectedKeys={selectedKey ? [selectedKey] : []}
          onOpenChange={handleOpenChange}
          accordion={false}
          selectable="AllMenu"
          fit={true}
        >
          <Menu.Item
            url="/crm/dashboard"
            icon="Bootstrap/speedometer2"
            key="dashboard"
          >
            仪表盘
          </Menu.Item>
          <Menu.Item url="/crm/tasks" icon="Bootstrap/list-task" key="mytasks">
            待办事项
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/inbox"
            key="upcoming"
          >
            线索
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/journal-check"
            key="logs1"
          >
            客户
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/journal-check"
            key="logs2"
          >
            联系人
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/journal-check"
            key="logs3"
          >
            公海
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/journal-check"
            key="logs4"
          >
            商机
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/journal-check"
            key="logs5"
          >
            合同
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/journal-check"
            key="logs6"
          >
            回款
          </Menu.Item>
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default ProjectSidebar;
