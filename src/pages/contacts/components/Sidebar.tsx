// import { useModel } from '@umijs/max';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useCallback, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router';

import Icon from '@asany/icons';
import { useModel } from '@umijs/max';
import classnames from 'classnames';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu, SelectEvent, Symbol } from '@/metronic';
import { Contacts } from '@/types';

import { useMyContactsQuery, useOrgContactsQuery } from '../hooks';

const appearance = {
  myContacts(namespace: string) {
    const styles: {
      [key: string]: {
        color: string;
        icon: string;
        bgColor: string;
      };
    } = {
      ['my-friends']: {
        color: 'primary',
        icon: 'Bootstrap/person-fill',
        bgColor: 'light-primary',
      },
      ['new-friends']: {
        color: 'warning',
        icon: 'Bootstrap/person-fill-add',
        bgColor: 'light-warning',
      },
      ['my-groups']: {
        color: 'primary',
        icon: 'Bootstrap/people-fill',
        bgColor: 'light-primary',
      },
    };
    return styles.hasOwnProperty(namespace)
      ? styles[namespace]
      : styles['my-friends'];
  },
};

function Sidebar() {
  const navigate = useNavigate();
  const setContacts = useModel('contacts', (model) => model.setContacts);

  const { data: myContactsData } = useMyContactsQuery({
    fetchPolicy: 'cache-and-network',
  });
  const { data: orgContactsData } = useOrgContactsQuery({
    fetchPolicy: 'cache-and-network',
  });

  const match = useMatch({ path: '/contacts/:group', end: false });

  const groupKey = match?.params.group || 'my-friends';

  const myContacts = myContactsData?.result;
  const orgContacts = orgContactsData?.result;

  useEffect(() => {
    if (groupKey.startsWith('org-')) {
      setContacts(orgContacts as Contacts, groupKey);
    } else {
      setContacts(myContacts as Contacts, groupKey);
    }
  }, [myContacts, orgContacts, groupKey]);

  const handleSelect = useCallback((e: SelectEvent) => {
    console.log('handleSelect', e.key, e);
    navigate(`/contacts/${e.key}`);
  }, []);

  return (
    <AsideWorkspace width={280} className="app-sidebar app-contacts-sidebar">
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">通讯录</h1>
      </div>
      <div className="app-sidebar-body flex-column-fluid d-flex flex-column px-4">
        <Menu
          className="menu-title-gray-800 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary"
          accordion={false}
          rounded
          selectable="AllMenu"
          onSelect={handleSelect}
          selectedKeys={[groupKey]}
        >
          {myContacts?.groups.map((group) => {
            const styles = appearance.myContacts(group.namespace!);
            return (
              <Menu.Item
                titleClassName="fw-medium"
                iconClassName={classnames(
                  'rounded-1 p-1 w-auto',
                  'bg-' + styles.bgColor,
                )}
                linkClassName="py-2"
                icon={
                  <Icon
                    className={classnames(
                      'svg-icon-2x',
                      'text-' + styles.color,
                    )}
                    name={styles.icon}
                  />
                }
                key={group.id}
              >
                {group.name}
              </Menu.Item>
            );
          })}
          {orgContacts && (
            <>
              <Menu.Section contentClassName="pb-0">企业内</Menu.Section>
              <Menu.Item
                titleClassName="fw-medium"
                iconClassName="w-auto"
                linkClassName="py-2"
                icon={
                  <Symbol.Image size={35} className="cursor-pointer" alt="群" />
                }
                key="org-info"
                title={orgContacts.name}
              />
              {orgContacts.groups.map((group) => {
                return (
                  <Menu.Item
                    titleClassName="fw-medium"
                    iconClassName="p-1 w-auto"
                    linkClassName="py-2"
                    icon={
                      <Icon
                        className="text-muted"
                        name="Bootstrap/arrow-return-right"
                      />
                    }
                    key={group.id}
                    title={group.name}
                  />
                );
              })}
            </>
          )}
        </Menu>
      </div>
    </AsideWorkspace>
  );
}

export default Sidebar;
