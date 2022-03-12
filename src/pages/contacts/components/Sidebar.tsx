import { useCallback, useMemo, useState } from 'react';

import Tree from '@asany/tree';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useBookQuery, useBooksQuery } from '../hooks';

import { AsideWorkspace, Tabs } from '@/pages/Metronic/components';
import type { ContactBook } from '@/types';
import * as utils from '@/utils';

const { TabPane } = Tabs;

type SidebarFooterProps = {
  onAction: () => void;
};

function SidebarFooter(props: SidebarFooterProps) {
  const { onAction } = props;
  return (
    <div className="app-sidebar-footer">
      <span className="mail-settings" onClick={onAction}>
        偏好设置
      </span>
    </div>
  );
}

function EnterpriseContactGroups(props: ContactGroupsProps) {
  const { book } = props;

  const [state, setState] = useState({ namespace: book.namespaces[0].id });

  const { data } = useBookQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: book.id,
      namespace: state.namespace,
    },
  });

  const handleChangeNamespace = useCallback((activeKey: string) => {
    console.log('activeKey', activeKey);
    setState({ namespace: activeKey });
  }, []);

  console.log(state.namespace, data?.book?.groups);

  const treeData = useMemo(() => {
    const groups = data?.book?.groups;
    if (!groups) {
      return [];
    }
    const _treeData = utils.tree(
      groups.map((item) => ({ ...item })),
      {
        idKey: 'id',
        pidKey: 'parentId',
        converter: ({ id: key, ...item }) => ({
          ...item,
          key,
          title: item.name,
        }),
      },
    );
    return _treeData;
  }, [data?.book?.groups]);

  return (
    <Tabs
      activeKey={state.namespace}
      onChange={handleChangeNamespace}
      className="nav-line-tabs-2x mx-5"
    >
      {book.namespaces.map((item) => (
        <TabPane tab={item.name} key={item.id}>
          <OverlayScrollbarsComponent
            className="custom-scrollbar px-5"
            options={{
              scrollbars: { autoHide: 'scroll' },
            }}
          >
            <Tree treeData={treeData} />
          </OverlayScrollbarsComponent>
        </TabPane>
      ))}
    </Tabs>
  );
}

type ContactGroupsProps = {
  book: ContactBook;
};

function ContactGroupsAdapter(props: ContactGroupsProps) {
  const { book } = props;

  console.log(book.namespaces);

  if (book.type == 'ENTERPRISE') {
    return <EnterpriseContactGroups book={book} />;
  }

  return <div>xxx</div>;
}

function Sidebar() {
  const { data } = useBooksQuery({ fetchPolicy: 'cache-and-network' });

  const books = data?.books || [];

  const book = useMemo(() => {
    return books[0];
  }, [books]);

  return (
    <AsideWorkspace width={280} className="app-sidebar app-contacts-sidebar">
      {/* <div className="app-sidebar-body"> */}
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">通讯录</h1>
      </div>
      <div className="app-sidebar-body flex-column-fluid d-flex flex-column">
        {book && <ContactGroupsAdapter book={book as ContactBook} />}
      </div>
      <SidebarFooter books={books} onAction={() => {}} />
    </AsideWorkspace>
  );
}

export default Sidebar;
