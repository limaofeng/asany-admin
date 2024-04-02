import { useCallback, useEffect, useMemo, useState } from 'react';

import Tree from '@asany/tree';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useModel } from '@umijs/max';

import { useBookQuery, useBooksQuery } from '../hooks';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Select, Tabs } from '@/metronic';
import type { OptionData } from '@/metronic/typings';
import type { ContactBook } from '@/types';
import * as utils from '@/utils';

const { TabPane } = Tabs;

type SidebarFooterProps = {
  books: ContactBook[];
  onAction: () => void;
};

function SidebarFooter(props: SidebarFooterProps) {
  const { books } = props;

  const currentBook = useModel('contacts', ({ state }) => state.book);

  const handleSelect = useCallback((key: string) => {
    if (key.startsWith('contacts-')) {
      console.log(key);
      // setCalendarSet(key.substring('contacts-'.length));
    } else {
      // onAction(key);
      return false;
    }
    return true;
  }, []);

  const options = useMemo(() => {
    return [
      ...books.map((item) => ({
        value: `contacts-${item.id}`,
        label: item.name,
      })),
      { type: 'separator' },
      { value: 'manage-contacts', label: '偏好设置' },
    ] as OptionData[];
  }, [books]);

  return (
    <div className="app-sidebar-footer">
      <Select
        onChange={handleSelect}
        placement="topCenter"
        value={currentBook ? `contacts-${currentBook}` : undefined}
        options={options}
      />
    </div>
  );
}

type GroupsOfTreeProps = {
  book: ContactBook;
  namespace: string;
};

function GroupsOfTree(props: GroupsOfTreeProps) {
  const { book, namespace } = props;
  const { data } = useBookQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: book.id,
      namespace,
    },
  });

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

  return <Tree treeData={treeData} />;
}

function EnterpriseContactGroups(props: ContactGroupsProps) {
  const { book } = props;

  const [activeKey, setActiveKey] = useState(book.namespaces[0].id);

  const handleChangeNamespace = useCallback((_activeKey: string) => {
    console.log('activeKey', _activeKey);
    setActiveKey(_activeKey);
  }, []);

  return (
    <Tabs
      activeKey={activeKey}
      onChange={handleChangeNamespace}
      className="nav-line-tabs-2x mx-5 mb-5 fs-6"
    >
      {book.namespaces.map((item) => (
        <TabPane tab={item.name} key={item.id}>
          <OverlayScrollbarsComponent
            className="custom-scrollbar"
            options={{
              scrollbars: { autoHide: 'scroll' },
            }}
          >
            <GroupsOfTree book={book} namespace={item.id} />
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

  const bookId = useModel('contacts', ({ state }) => state.book);
  const setBook = useModel('contacts', (model) => model.setBook);

  useEffect(() => {
    if (!data?.books) {
      return;
    }
    const books = data?.books;
    if (!books.some((item) => item.id == bookId)) {
      setBook(books[0].id);
    }
  }, [data?.books, bookId, setBook]);

  const book = useMemo(() => {
    if (!data?.books || !bookId) {
      return;
    }
    return data.books.find((item) => item.id == bookId);
  }, [data?.books, bookId]);

  console.log('books', data?.books, book, bookId);

  return (
    <AsideWorkspace width={280} className="app-sidebar app-contacts-sidebar">
      {/* <div className="app-sidebar-body"> */}
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">通讯录</h1>
      </div>
      <div className="app-sidebar-body flex-column-fluid d-flex flex-column">
        {book && <ContactGroupsAdapter book={book as ContactBook} />}
      </div>
      <SidebarFooter books={(data?.books || []) as any} onAction={() => {}} />
    </AsideWorkspace>
  );
}

export default Sidebar;
