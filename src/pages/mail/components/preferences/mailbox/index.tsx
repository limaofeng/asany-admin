import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Shortcuts } from '@asany/shortcuts';
import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { cloneDeep } from 'lodash';

import MailboxFooter from './MailboxFooter';

import { Checkbox, TreeList } from '@/metronic';
import { useMailboxesQuery, useUpdateMyFavoriteMailboxesMutation } from '@/pages/mail/hooks';
import { DEFAULT_MAILBOXES_ALL } from '@/pages/mail/utils';
import type { Mailbox } from '@/types';

const NAMESPACES: any[] = [
  {
    key: '#private',
    title: '默认文件夹',
    children: [],
  },
  {
    key: '#smart',
    title: '智能文件夹',
    children: [],
  },
  {
    key: '#custom',
    title: '自定义文件夹',
    children: [],
  },
];

type MailboxFolderProps = {
  user: string;
  mailboxes: string[];
};

function MailboxFolder(props: MailboxFolderProps) {
  const { user } = props;

  const container = useRef<HTMLDivElement>(null);

  const { data } = useMailboxesQuery();

  const [activeKey] = useState<string>();
  const [checkedKeys, setCheckedKeys] = useState<string[]>(props.mailboxes);

  const [updateMyFavorites] = useUpdateMyFavoriteMailboxesMutation({
    updateQueries: {
      mailUser: (prev, { mutationResult }) => {
        return {
          ...prev,
          mailUser: {
            ...prev.mailUser,
            settings: {
              ...prev.mailUser.settings,
              mailboxes: mutationResult!.data!.mailboxes,
            },
          },
        };
      },
    },
    // update(cache, { data: result }) {
    //   cache.modify({
    //     fields: {
    //       mailUser(user: any) {
    //         const mailUser = (cache as any).data.data[user.__ref];
    //         console.log('mailUser', mailUser);
    //         const newMailUser = {
    //           ...mailUser,
    //           settings: { ...mailUser.settings, mailboxes: [...mailUser.settings.mailboxes] },
    //         };
    //         console.log('newMailUser', newMailUser);
    //         newMailUser.settings.mailboxes = result!.mailboxes;
    //         console.log(result);
    //         // return = cache.writeFragment({
    //         //   id: id._ref,
    //         //   data: newMailUser,
    //         //   fragment: MyFavoriteMailboxesFragmentDoc,
    //         // });
    //         // console.log(x);
    //         return { ...user, ...newMailUser };
    //       },
    //     },
    //   });
    // },
  });

  const handleSuccess = useCallback(async (mailbox?: Mailbox) => {
    console.log(mailbox);
    // await refresh();
    // if (calendarSet) {
    //   setActiveKey(calendarSet.id);
    //   setEditing(calendarSet.id);
    // } else {
    //   data.length && setActiveKey(data[0].id);
    // }
  }, []);

  const handleShortcut = useCallback((action: string) => {
    console.log(action);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('handleChange', e.target.checked, e.target.value);
      updateMyFavorites({
        variables: {
          mailboxes: [e.target.value],
          mode: e.target.checked ? 'ADD' : 'REMOVE',
        },
      });
    },
    [updateMyFavorites],
  );

  const treeData = useMemo(() => {
    if (!data?.mailboxes) {
      return cloneDeep(NAMESPACES);
    }
    const namespaces = cloneDeep(NAMESPACES);
    for (const mailbox of data.mailboxes) {
      const namespace = namespaces.find((item) => item.key == mailbox.namespace);
      if (mailbox.name == 'Outbox' || mailbox.name == 'INBOX') {
        continue;
      }
      if (!namespace?.children) {
        console.warn('错误的命名空间', namespace);
        continue;
      }
      namespace.children.push({
        ...mailbox,
        type: 'mailbox',
        key: mailbox.id,
        title: mailbox.name,
      });
    }
    namespaces[0].children = namespaces[0]
      .children!.map((item: any) => {
        const zindex = DEFAULT_MAILBOXES_ALL.findIndex((m) => m.id == item.name);
        const details = DEFAULT_MAILBOXES_ALL[zindex];
        return {
          ...item,
          zindex,
          title: details.name,
          icon: details.name,
        };
      })
      .sort((l: any, r: any) => l.zindex - r.zindex);
    return namespaces.filter((item) => item.children?.length);
  }, [data?.mailboxes]);

  useEffect(() => {
    setCheckedKeys(props.mailboxes);
  }, [props.mailboxes]);

  return (
    <div className="settings-mailbox-container">
      <div className="settings-mailbox-notes">
        设置默认文件夹的显示与隐藏，并可以添加自定义的文件夹
      </div>
      <div className="d-flex">
        <Shortcuts
          tag={
            <div
              ref={container}
              className={classnames('flex-left settings-mailbox', {
                editing: false, // !!editing,
              })}
            />
          }
          name="MAIL_PREFERENCES"
          handler={handleShortcut}
        >
          <div className="settings-mailbox-header d-flex">
            <div className="field-folder">文件夹</div>
            <div className="field-favorites">收藏</div>
          </div>
          <OverlayScrollbarsComponent
            className="settings-mailbox-body custom-scrollbar"
            options={{
              scrollbars: { autoHide: 'scroll' },
            }}
          >
            <TreeList
              className="mailbox-treelist"
              rowKey="id"
              expandedKeys={['#private', '#smart', '#custom']}
              draggable={false}
              iconRender={(_, nodeState) => {
                if (nodeState.isDirectory) {
                  return;
                }
                // console.log(_, nodeState);
                return '';
              }}
              columns={[
                {
                  key: 'title',
                  title: '名称',
                  render: (title) => {
                    return (
                      <div className="title d-flex">
                        <span className="text-gray-800">{title}</span>
                      </div>
                    );
                  },
                },
                {
                  key: 'actions',
                  title: '操作',
                  className: 'min-w-100px',
                  render(_, record: any) {
                    if (record.type == 'directory') {
                      return <div />;
                    }
                    return (
                      <Checkbox
                        value={record.namespace + '.' + record.name}
                        checked={checkedKeys.includes(record.namespace + '.' + record.name)}
                        onChange={handleChange}
                        className="mailbox-check"
                        size="sm"
                      />
                    );
                  },
                },
              ]}
              dataSource={treeData}
            />
          </OverlayScrollbarsComponent>
          <MailboxFooter user={user} onSuccess={handleSuccess} selectedKey={activeKey} />
        </Shortcuts>
      </div>
    </div>
  );
}

export default MailboxFolder;
