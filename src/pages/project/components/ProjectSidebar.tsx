import { useCallback, useState } from 'react';

import { Icon } from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Button, Menu } from '@/metronic';

function ProjectSidebar() {
  const [selectedKey, setSelectedKey] = useState<string>('draft');
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleSelect = useCallback((e: any) => {
    setSelectedKey(e.key);
  }, []);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  const loading = true;

  return (
    <AsideWorkspace width={280} className="app-sidebar app-contacts-sidebar">
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">项目管理</h1>
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
            url="/projects/dashboard"
            icon="Bootstrap/speedometer2"
            key="dashboard"
          >
            首页
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/list-task"
            key="mytasks"
          >
            我的任务
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/inbox"
            key="upcoming"
          >
            收件箱
          </Menu.Item>
          <Menu.Item
            url="/projects/my/tasks"
            icon="Bootstrap/journal-check"
            key="logs"
          >
            日志薄
          </Menu.Item>
          <Menu.Section contentClassName="pt-6 pb-0">我参与的项目</Menu.Section>
          <Menu.Item bullet url="/cms/my/drafts" key="draft1">
            草稿箱
          </Menu.Item>
          <Menu.Section contentClassName="pt-6 pb-0">收藏的项目</Menu.Section>
          <Menu.Item bullet url="/cms/my/drafts" key="draft2">
            草稿箱
          </Menu.Item>
          <Menu.Item bullet url="/cms/my/published" key="published1">
            已发布
          </Menu.Item>
          <Menu.Section contentClassName="pt-6 pb-0">管理</Menu.Section>
          <Menu.Item bullet url="/cms/my/published" key="published2">
            项目列表
          </Menu.Item>
          <Menu.Section className="d-flex align-items-center">
            <span className="menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid">
              信息栏目 {loading && ' - loading...'}
            </span>
            <Button
              icon={
                <Icon
                  style={{ marginRight: '.2rem' }}
                  name="Duotune/arr087"
                  className=""
                />
              }
              size="sm"
              variant="white"
              className="py-1 px-3 me-n4"
            >
              新增
            </Button>
          </Menu.Section>
          <Menu.Section contentClassName="pt-6 pb-0">设置</Menu.Section>
          <Menu.Item bullet key="project_settings_types">
            项目类型
          </Menu.Item>
          <Menu.Item bullet key="project_settings_tags">
            标签
          </Menu.Item>
          <Menu.Item bullet key="project_settings_workflow">
            工作流
          </Menu.Item>
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default ProjectSidebar;
