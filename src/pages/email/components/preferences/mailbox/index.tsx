import { useCallback, useMemo, useRef, useState } from 'react';

import { Shortcuts } from '@asany/shortcuts';
import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { cloneDeep } from 'lodash';

import MailboxFooter from './MailboxFooter';

import { Checkbox, TreeList } from '@/pages/Metronic/components';
import type { Mailbox } from '@/types';
import { useMailboxesQuery } from '@/pages/email/hooks';
import { DEFAULT_MAILBOXES } from '@/pages/email/utils';

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

function Folder() {
  const container = useRef<HTMLDivElement>(null);

  const { data } = useMailboxesQuery();

  const [activeKey] = useState<string>();

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

  const treeData = useMemo(() => {
    if (!data?.mailboxes) {
      return cloneDeep(NAMESPACES);
    }
    const namespaces = cloneDeep(NAMESPACES);
    for (const mailbox of data.mailboxes) {
      const namespace = namespaces.find((item) => item.key == mailbox.namespace);
      if (mailbox.name == 'Outbox') {
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
        const zindex = DEFAULT_MAILBOXES.findIndex((m) => m.id == item.name);
        const details = DEFAULT_MAILBOXES[zindex];
        return { ...item, zindex, title: details.name, icon: details.name };
      })
      .sort((l: any, r: any) => l.zindex - r.zindex);
    return namespaces.filter((item) => item.children?.length);
  }, [data?.mailboxes]);

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
                console.log(_, nodeState);
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
                    console.log(record, record.type == 'directory');
                    if (record.type == 'directory') {
                      return <div />;
                    }
                    return (
                      <Checkbox
                        // checked={checked}
                        // onClick={handleVariofocus}
                        // onChange={handleChange}
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
          <MailboxFooter onSuccess={handleSuccess} selectedKey={activeKey!} />
        </Shortcuts>
      </div>
    </div>
  );
}

export default Folder;
