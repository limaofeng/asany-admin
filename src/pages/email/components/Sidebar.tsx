import { useMemo } from 'react';

import { Icon } from '@asany/icons';
import { useRouteMatch } from 'umi';

import { AsideWorkspace, Badge, Button, Menu } from '@/pages/Metronic/components';

function SidebarFooter() {
  return (
    <div className="email-sidebar-footer">
      <span className="mail-preferences">偏好设置</span>
    </div>
  );
}

function Sidebar() {
  // const {
  //   match: {
  //     params: { folder },
  //   },
  // } = props;

  const match = useRouteMatch<{ folder?: string }>({
    path: '/email/:folder',
    strict: true,
    sensitive: true,
  });

  const selectedKeys = useMemo(() => {
    if (!match?.params.folder) {
      return [];
    }
    return [match.params.folder];
  }, [match]);

  console.log(selectedKeys);

  return (
    <AsideWorkspace width={275} collapsible={false} className="email-sidebar-aside" padding={false}>
      <div className="email-sidebar">
        <Button className="email-compose text-uppercase">写信</Button>
        <div className="email-sidebar-body hover-scroll-y">
          <Menu
            className="menu-title-gray-600 menu-icon-gray-400 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary mb-10"
            accordion={false}
            rounded
            selectable="AllMenu"
            selectedKeys={selectedKeys}
          >
            <Menu.Item
              className="mb-3"
              url="/email/inbox"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/com010" />}
              key="inbox"
            >
              收件箱
            </Menu.Item>
            <Menu.Section>文件夹</Menu.Section>
            <Menu.Item
              className="mb-3"
              url="/email/marked"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/abs024" />}
              key="marked"
            >
              星标邮件
            </Menu.Item>
            <Menu.Item
              className="mb-3"
              url="/email/sent"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/gen016" />}
              key="sent"
            >
              已发送
            </Menu.Item>
            <Menu.Item
              className="mb-3"
              url="/email/drafts"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/gen009" />}
              key="drafts"
            >
              草稿
            </Menu.Item>
            <Menu.Item
              className="mb-3"
              url="/email/archive"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/fil016" />}
              key="archive"
            >
              归档
            </Menu.Item>
            <Menu.Item
              className="mb-3"
              url="/email/spam"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/gen027" />}
              key="spam"
            >
              垃圾邮件
            </Menu.Item>
          </Menu>
          <Menu rounded={true} className="menu-state-bg menu-state-title-primary">
            <Menu.Section>标签</Menu.Section>
            <Menu.Item
              className="mb-3"
              titleClassName="fw-bold"
              icon={<Icon className="svg-icon-6 svg-icon-danger me-3" name="Duotune/abs009" />}
              badge={<Badge lightStyle="danger">6</Badge>}
            >
              工作项
            </Menu.Item>
            <Menu.Item
              className="mb-3"
              titleClassName="fw-bold"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/arr087" />}
            >
              添加标签
            </Menu.Item>
          </Menu>
        </div>
        <SidebarFooter />
      </div>
    </AsideWorkspace>
  );
}

export default Sidebar;
