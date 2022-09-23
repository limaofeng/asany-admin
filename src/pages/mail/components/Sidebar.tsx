import { useCallback, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Link, useRouteMatch } from 'umi';

import { useCountUnreadQuery, useMailboxesQuery, useMailUserQuery } from '../hooks';
import { DEFAULT_MAILBOXES, DEFAULT_MAILBOXES_ALL } from '../utils';

import Preferences from './preferences';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Badge, Button, Menu } from '@/metronic';

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
    path: '/mail/:folder',
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
  const { data: mailboxesData } = useMailboxesQuery({ fetchPolicy: 'cache-and-network' });
  const { data: countUnread } = useCountUnreadQuery({ fetchPolicy: 'cache-and-network' });

  const handleClosePreferences = useCallback(() => {
    setVisiblePreferences(false);
  }, []);

  const handleOpenPreferences = useCallback(() => {
    setVisiblePreferences(true);
  }, []);

  const mailboxes = useMemo(() => {
    if (!data?.mailUser || !mailboxesData?.mailboxes) {
      const inbox = DEFAULT_MAILBOXES.INBOX;
      const outbox = DEFAULT_MAILBOXES.Outbox;
      return {
        inbox: { ...inbox, title: inbox.name, key: inbox.id.toLowerCase() },
        outbox: { ...outbox, title: outbox.name, key: outbox.id.toLowerCase() },
        private: DEFAULT_MAILBOXES_ALL.filter((item) => !['Outbox', 'INBOX'].includes(item.id)).map(
          (item) => ({ ...item, title: item.name, key: item.id.toLowerCase(), count: 0 }),
        ),
        smart: [],
        custom: [],
      };
    }
    const allMailboxes = mailboxesData.mailboxes
      .map((item) => {
        if (item.namespace == '#private') {
          const index = DEFAULT_MAILBOXES_ALL.findIndex((m) => m.id == item.name);
          return {
            ...item,
            index,
            title: DEFAULT_MAILBOXES_ALL[index].name,
            icon: DEFAULT_MAILBOXES_ALL[index].icon,
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
  }, [data?.mailUser, mailboxesData?.mailboxes]);

  const unreadNumber = useMemo(() => countUnread?.inbox?.unread || 0, [countUnread?.inbox?.unread]);

  // console.log('mailboxes', mailboxes, 'selectedKeys', selectedKeys);

  return (
    <AsideWorkspace width={280} collapsible={false} className="email-sidebar-aside">
      <div className="email-sidebar">
        <Button as={Link} to="/mail/compose" className="email-compose text-uppercase">
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
              url="/mail/inbox"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/com010" />}
              badge={
                !!unreadNumber && (
                  <Badge size="sm" lightStyle={DEFAULT_MAILBOXES.INBOX.badge as any}>
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
              const lightStyle = DEFAULT_MAILBOXES[item.name]?.badge;
              return (
                <Menu.Item
                  className="mb-1"
                  url={`/mail/${item.key}`}
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
                    className="mb-1"
                    url={`/mail/${item.key}`}
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
              className="mb-2"
              titleClassName="fw-bold"
              icon={<Icon className="svg-icon-6 svg-icon-danger me-3" name="Duotune/abs009" />}
              badge={<Badge lightStyle="danger">6</Badge>}
            >
              工作项
            </Menu.Item>
            <Menu.Item
              className="mb-2"
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
