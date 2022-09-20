import React, { useCallback, useEffect, useMemo, useState } from 'react';

import type { RouteComponentProps } from 'react-router';
import { matchPath } from 'react-router';

import { useModuleQuery } from '../hooks/api';

import { MicroApp } from '@/layouts/Demo7';
import { BlockUI, Menu, Symbol } from '@/metronic';

import '../style/index.scss';

type ModuleViewProps = RouteComponentProps<{ id: string }> & {
  children: React.ReactNode;
};

function ModuleView(props: ModuleViewProps) {
  const {
    children,
    location,
    match: {
      params: { id },
    },
  } = props;

  const { data = {}, loading } = useModuleQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  const module = data.module;

  const menuKey = useMemo(() => {
    const match = matchPath<{ id: string; feat: string }>(location.pathname, {
      path: '/modules/:id/:feat',
      exact: false,
      strict: true,
    });
    if (match) {
      return match.params.feat;
    }
    return '';
  }, [location.pathname]);

  const [selectedKey, setSelectedKey] = useState<string>(menuKey);

  useEffect(() => {
    if (!menuKey) {
      return;
    }
    setSelectedKey(menuKey);
  }, [menuKey]);

  const handleSelect = useCallback((e: any) => {
    console.log('selectedKey', e.key);
    setSelectedKey(e.key);
  }, []);

  return (
    <MicroApp className="module-view-app" loading={loading}>
      {module && (
        <>
          <MicroApp.Sidebar className="module-view-app-sidebar" collapsible={false} width={216}>
            <BlockUI
              zIndex={10}
              className="mt-5 p-5"
              overlayClassName="bg-white bg-opacity-25"
              loading={false}
            >
              <div className="pb-5">
                <div className="d-flex align-items-center">
                  <Symbol.Avatar alt="啥地方" className="me-5" size={40} />
                  <div className="flex-grow-1">
                    <a className="text-dark fw-bolder text-hover-primary fs-6">{module.name}</a>
                    <span
                      className="text-muted d-block fw-bold fs-8"
                      dangerouslySetInnerHTML={{ __html: module.description || '&nbsp;' }}
                    />
                  </div>
                </div>
              </div>
              <div className="module-view-app-sidebar__menu_container">
                <Menu
                  fit
                  accordion={false}
                  selectable="AllMenu"
                  className="menu-title-gray-600 menu-icon-gray-400 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0"
                  selectedKeys={selectedKey ? [selectedKey] : []}
                  onSelect={handleSelect}
                  // openKeys={openKeys}
                  // onOpenChange={handleOpenChange}
                >
                  <Menu.Item
                    key="schema"
                    bullet={true}
                    icon="Fonticon/layers"
                    title="架构"
                    url={`/modules/${module.id}/schema`}
                  />
                  <Menu.Item
                    bullet={true}
                    key="content"
                    icon="Fonticon/alignment-right"
                    title="内容管理"
                    url={`/modules/${module.id}/content`}
                  />
                  <Menu.Item
                    key="assets"
                    bullet={true}
                    icon="Fonticon/attachments"
                    title="静态资源"
                    url={`/modules/${module.id}/assets`}
                  />
                  {/* <Menu.Section contentClassName="pt-6 pb-0">基础功能</Menu.Section>
                <Menu.Item bullet={true} title="目标" url={`/projects/${module.id}/targets`} />
                <Menu.Item bullet={true} title="任务" url={`/projects/${module.id}/tasks`} />
                <Menu.Item bullet={true} title="预算" url={`/projects/${module.id}/budget`} />
                <Menu.Item bullet={true} title="成员" url={`/projects/${module.id}/users`} />
                <Menu.Item bullet={true} title="文档" url={`/projects/${module.id}/files`} />
                <Menu.Item bullet={true} title="活动" url={`/projects/${module.id}/activity`} /> */}
                </Menu>
                <Menu
                  fit
                  accordion={false}
                  className="menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-bg menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0"
                  selectedKeys={menuKey ? [menuKey] : []}
                >
                  <Menu.Item
                    key="settings"
                    bullet={true}
                    icon="Bootstrap/gear"
                    title="模块设置"
                    url={`/modules/${module.id}/settings`}
                  />
                </Menu>
              </div>
            </BlockUI>
          </MicroApp.Sidebar>
          <div style={{ zIndex: 99 }} className="position-relative d-flex flex-row flex-row-fluid">
            <div
              style={{
                position: 'fixed',
                height: '100vh',
                width: '1px',
                zIndex: 105,
              }}
            >
              <MicroApp.Sidebar.Toggle className="start-0" />
            </div>
            {React.Children.map(children, (o: any) => {
              o.props.location.state = {
                module,
                baseUrl: '/modules/' + id,
              };
              return o;
            })}
          </div>
        </>
      )}
    </MicroApp>
  );
}

export default ModuleView;
