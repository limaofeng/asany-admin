import { useCallback, useState } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu } from '@/metronic';

function DefaultSidebar() {
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
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">工作流</h1>
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
            url="/workflow/launcher"
            icon="Fonticon/send"
            key="started"
          >
            发起流程
          </Menu.Item>
          <Menu.Item
            url="/workflow/search"
            icon="Bootstrap/search"
            key="search"
          >
            流程查询
          </Menu.Item>
          <Menu.Separator className="my-1" />
          <Menu.Section contentClassName="pb-0">文件办理</Menu.Section>
          <Menu.Item bullet url="/workflow/my/upcoming" key="upcoming">
            待办文件
          </Menu.Item>
          <Menu.Item bullet url="/workflow/my/unread" key="unread">
            待阅文件
          </Menu.Item>
          <Menu.Item bullet url="/workflow/my/done" key="done">
            已办文件
          </Menu.Item>
          <Menu.Item bullet url="/workflow/my/readed" key="read">
            已阅文件
          </Menu.Item>
          <Menu.Item bullet url="/workflow/my/tasks" key="mytask">
            我的文件
          </Menu.Item>
          <Menu.Item bullet url="/workflow/my/follow" key="follow">
            关注文件
          </Menu.Item>
          <Menu.Item bullet url="/workflow/my/revoke" key="revoke">
            我退回的文件
          </Menu.Item>
          <Menu.Item bullet url="/workflow/my/drafts" key="draft">
            草稿箱
          </Menu.Item>
          <Menu.Separator className="my-1" />
          <Menu.Section contentClassName="pb-0">设计</Menu.Section>
          <Menu.Item bullet url="/workflow/my/models" key="workflow_models">
            我的模型
          </Menu.Item>
          <Menu.Separator className="my-1" />
          <Menu.Section contentClassName="pb-0">设置</Menu.Section>
          <Menu.Item bullet url="/workflow/design" key="project_settings_tags">
            设计器
          </Menu.Item>
          <Menu.Item
            bullet
            url="/workflow/settings/xxx"
            key="project_settings_workflow"
          >
            工作流
          </Menu.Item>
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default DefaultSidebar;
