import { useCallback, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import { useRouteMatch } from 'umi';

import { useMailUserQuery } from '../hooks';
import { DEFAULT_MAILBOXES } from '../utils';

import Preferences from './preferences';

import { AsideWorkspace, Badge, Button, Menu } from '@/pages/Metronic/components';

type SidebarFooterProps = {
  onAction: () => void;
};

function SidebarFooter(props: SidebarFooterProps) {
  const { onAction } = props;
  return (
    <div className="email-sidebar-footer">
      <span className="mail-settings" onClick={onAction}>
        偏好设置
      </span>
    </div>
  );
}

function Sidebar() {
  const [visiblePreferences, setVisiblePreferences] = useState<boolean>(true);

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

  const { data } = useMailUserQuery({ fetchPolicy: 'cache-and-network' });

  console.log(selectedKeys, data?.mailUser, data?.mailboxes);

  const handleClosePreferences = useCallback(() => {
    setVisiblePreferences(false);
  }, []);

  const handleOpenPreferences = useCallback(() => {
    setVisiblePreferences(true);
  }, []);

  const mailboxes = useMemo(() => {
    if (!data?.mailboxes || !data?.mailboxes) {
      const inbox = DEFAULT_MAILBOXES.find((item) => item.id == 'INBOX')!;
      const outbox = DEFAULT_MAILBOXES.find((item) => item.id == 'Outbox')!;
      return {
        inbox: { ...inbox, title: inbox.name },
        outbox: { ...outbox, title: outbox.name },
        private: DEFAULT_MAILBOXES.filter((item) => !['Outbox', 'INBOX'].includes(item.id)).map(
          (item) => ({ ...item, title: inbox.name }),
        ),
        smart: [],
        custom: [],
      };
    }
    const allMailboxes = data.mailboxes
      .map((item) => {
        if (item.namespace == '#private') {
          const index = DEFAULT_MAILBOXES.findIndex((m) => m.id == item.name);
          return {
            ...item,
            index,
            title: DEFAULT_MAILBOXES[index].name,
            icon: DEFAULT_MAILBOXES[index].icon,
          };
        }
        return { ...item, title: item.name!, index: 0, icon: undefined };
      })
      .filter((item) => {
        if (['Outbox', 'INBOX'].includes(item.name!)) {
          return true;
        }
        console.log('...', data?.mailUser?.settings?.mailboxes);
        return data?.mailUser?.settings?.mailboxes.includes(item.namespace + '.' + item.name);
      })
      .sort((l, r) => l.index - r.index);

    const defaultMailboxes = allMailboxes.filter((item) => item.namespace == '#private');
    return {
      inbox: defaultMailboxes.find((item) => item.name == 'INBOX')!,
      outbox: defaultMailboxes.find((item) => item.name == 'Outbox')!,
      private: defaultMailboxes.filter((item) => !['Outbox', 'INBOX'].includes(item.name!)),
      smart: allMailboxes.filter((item) => item.namespace == '#smart'),
      custom: allMailboxes.filter((item) => item.namespace == '#custom'),
    };
  }, [data?.mailUser, data?.mailboxes]);

  console.log('mailboxes', mailboxes);

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
              {mailboxes.inbox.title}
            </Menu.Item>
            <Menu.Section>文件夹</Menu.Section>
            {mailboxes.private.map((item) => (
              <Menu.Item
                className="mb-3"
                url={`/email/${item.name!.toLowerCase()}`}
                titleClassName="fw-bolder"
                icon={<Icon className="svg-icon-2 me-3" name={item.icon!} />}
                key={item.name}
              >
                {item.title}
              </Menu.Item>
            ))}
            {/* <Menu.Item
              className="mb-3"
              url="/email/marked"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/abs024" />}
              key="marked"
            >
              星标邮件
            </Menu.Item> */}
            {/* <Menu.Item
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
            </Menu.Item> */}
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
        <SidebarFooter onAction={handleOpenPreferences} />
      </div>
      <Preferences
        mailUser={data?.mailUser as any}
        visible={visiblePreferences}
        onCancel={handleClosePreferences}
      />
    </AsideWorkspace>
  );
}

export default Sidebar;
