import { useCallback, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import { Link, useRouteMatch } from 'umi';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useMailUserQuery } from '../hooks';
import { DEFAULT_MAILBOXES, getDefaultMailboxBadgeStyle } from '../utils';

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
  const [visiblePreferences, setVisiblePreferences] = useState<boolean>(false);

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
        inbox: { ...inbox, title: inbox.name, key: inbox.name.toLowerCase() },
        outbox: { ...outbox, title: outbox.name, key: outbox.name.toLowerCase() },
        private: DEFAULT_MAILBOXES.filter((item) => !['Outbox', 'INBOX'].includes(item.id)).map(
          (item) => ({ ...item, title: item.name, key: item.name.toLowerCase(), count: 0 }),
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
            key: item.name!.toLowerCase(),
          };
        }
        return {
          ...item,
          title: item.name!,
          index: 0,
          icon: undefined,
          key: item.name!.toLowerCase(),
        };
      })
      .filter((item) => {
        if (['Outbox', 'INBOX'].includes(item.name!)) {
          return true;
        }
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

  const unreadNumber = useMemo(() => data?.inbox?.unread || 0, [data?.inbox?.unread]);

  console.log('mailboxes', mailboxes, 'selectedKeys', selectedKeys);

  return (
    <AsideWorkspace width={275} collapsible={false} className="email-sidebar-aside" padding={false}>
      <div className="email-sidebar">
        <Button as={Link} to="/email/compose" className="email-compose text-uppercase">
          写信
        </Button>
        <OverlayScrollbarsComponent
          className="email-sidebar-body custom-scrollbar"
          options={{
            scrollbars: { autoHide: 'scroll' },
          }}
        >
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
              badge={
                !!unreadNumber && (
                  <Badge size="sm" lightStyle={getDefaultMailboxBadgeStyle('inbox')! as any}>
                    {unreadNumber}
                  </Badge>
                )
              }
              key="inbox"
            >
              {mailboxes.inbox.title}
            </Menu.Item>
            <Menu.Section>文件夹</Menu.Section>
            {mailboxes.private.map((item) => {
              const lightStyle = getDefaultMailboxBadgeStyle(item.key);
              return (
                <Menu.Item
                  className="mb-3"
                  url={`/email/${item.key}`}
                  titleClassName="fw-bolder"
                  icon={<Icon className="svg-icon-2 me-3" name={item.icon!} />}
                  badge={
                    !!lightStyle &&
                    !!item.count && (
                      <Badge size="sm" lightStyle={lightStyle as any}>
                        {item.count}
                      </Badge>
                    )
                  }
                  key={item.key}
                >
                  {item.title}
                </Menu.Item>
              );
            })}
            {mailboxes.custom.length && (
              <>
                <Menu.Section>自定义</Menu.Section>
                {mailboxes.custom.map((item) => (
                  <Menu.Item
                    className="mb-3"
                    url={`/email/${item.key}`}
                    titleClassName="fw-bolder"
                    key={item.key}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </>
            )}
          </Menu>
          {/* <Menu rounded={true} className="menu-state-bg menu-state-title-primary">
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
          </Menu> */}
        </OverlayScrollbarsComponent>
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
