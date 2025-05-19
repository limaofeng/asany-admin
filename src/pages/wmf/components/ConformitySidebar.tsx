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
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">电子说明书</h1>
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
          <Menu.Item url="/conformity" icon="Duotune/abs051" key="conformity">
            电子说明书管理
          </Menu.Item>
          <Menu.Item url="/drive/my-drive" icon="Duotune/fil020" key="drive">
            文件管理
          </Menu.Item>
          <Menu.Section>其他</Menu.Section>
          <Menu.Item icon="Duotune/abs008" key="settings">
            设置
          </Menu.Item>
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default ProjectSidebar;
