import React, { useCallback, useEffect, useMemo, useState } from 'react';

import type { RouteComponentProps } from 'react-router';
import { matchPath } from 'react-router';

import { useProjectQuery } from '../hooks';

import { MicroApp } from '@/layouts/Demo7';
import { BlockUI, Menu, Symbol } from '@/metronic';

type ProjectViewProps = RouteComponentProps<{ id: string }> & {
  children: React.ReactNode;
};

function ProjectView(props: ProjectViewProps) {
  const {
    children,
    location,
    match: {
      params: { id },
    },
  } = props;

  const { data = {}, loading } = useProjectQuery({ variables: { id } });

  const project = data.project;

  const menuKey = useMemo(() => {
    const channelMatch = matchPath<{ sid: string; cid: string }>(location.pathname, {
      path: '/project/:id/:key',
      exact: false,
      strict: true,
    });
    console.log('channelMatch', channelMatch);
    if (channelMatch) {
      return `category_${channelMatch.params.cid}`;
    }
    return 'my-drive';
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
    <MicroApp loading={loading}>
      {project && (
        <>
          <MicroApp.Sidebar>
            <BlockUI
              zIndex={10}
              className="my-5 p-5"
              overlayClassName="bg-white bg-opacity-25"
              loading={false}
            >
              <div className="mx-5">
                <div className="d-flex align-items-center">
                  <Symbol.Avatar alt="啥地方" className="me-5" />
                  <div className="flex-grow-1">
                    <a className="text-dark fw-bolder text-hover-primary fs-6">{project.name}</a>
                    <span className="text-muted d-block fw-bold">{project.description}</span>
                  </div>
                </div>
              </div>
              <Menu
                fit
                accordion={false}
                selectable="AllMenu"
                className="pt-6 menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
                selectedKeys={selectedKey ? [selectedKey] : []}
                onSelect={handleSelect}
                // openKeys={openKeys}
                // onOpenChange={handleOpenChange}
              >
                <Menu.Item
                  bullet={true}
                  icon="Bootstrap/speedometer2"
                  title="仪表盘"
                  url={`/projects/${project.id}`}
                />
                <Menu.Section contentClassName="pt-6 pb-0">基础功能</Menu.Section>
                <Menu.Item bullet={true} title="目标" url={`/projects/${project.id}/targets`} />
                <Menu.Item bullet={true} title="任务" url={`/projects/${project.id}/tasks`} />
                <Menu.Item bullet={true} title="预算" url={`/projects/${project.id}/budget`} />
                <Menu.Item bullet={true} title="成员" url={`/projects/${project.id}/users`} />
                <Menu.Item bullet={true} title="文档" url={`/projects/${project.id}/files`} />
                <Menu.Item bullet={true} title="活动" url={`/projects/${project.id}/activity`} />
                <Menu.Section contentClassName="pt-6 pb-0">设置</Menu.Section>
                <Menu.Item
                  bullet={true}
                  title="基础信息"
                  url={`/projects/${project.id}/settings`}
                />
              </Menu>
            </BlockUI>
          </MicroApp.Sidebar>
          {React.Children.map(children, (o: any) => {
            o.props.location.state = {
              project,
              baseUrl: '/projects/' + id,
            };
            return o;
          })}
        </>
      )}
    </MicroApp>
  );
}

export default ProjectView;
