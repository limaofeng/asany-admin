import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import type { RouteComponentProps } from 'react-router-dom';

import { useModel, useParams } from '@umijs/max';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { ContentWrapper } from '@/layouts/components';

import NoContacts from '../components/NoContacts';
import UserList from '../components/UserList';
import { useContacts } from '../hooks';
import type { ContactListState, ContactRouteParams } from '../typings';

type MainContactsProps = RouteComponentProps<ContactRouteParams> & {
  children: React.ReactNode;
};

function MainContacts(props: MainContactsProps) {
  const { children, history } = props;

  const book = useModel('contacts', (model) => model.state.book);

  const { id } = useParams();

  console.log('MainContacts book', book, id);

  const state = useRef<ContactListState>({
    activeIndex: -1,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [pagination, loading, useContact, { loadContact }] = useContacts(book);

  const token = useMemo(() => book, [book]);

  const handleScrollToIndex = useCallback(
    async (e: any) => {
      if (state.current.activeIndex === e.index) {
        return;
      }
      const _contact = await loadContact(e.index);
      state.current.activeIndex = e.index;
      if (token === _contact.id) {
        forceRender();
        return;
      }
      navigate(`/contacts/${_contact.id}`);
    },
    [history, loadContact, token],
  );

  const handleClick = useCallback(
    (index: number) => {
      handleScrollToIndex({ index });
    },
    [handleScrollToIndex],
  );

  const contact = useContact(state.current.activeIndex);

  console.log('MainContacts book', book, id);

  console.log(pagination, loading);

  const { activeIndex } = state.current;

  return (
    <ContentWrapper className="app-contacts-main" footer={false} header={false}>
      <div className="content-body row g-7">
        <div className="col-lg-6 col-xl-3">
          <UserList
            loading={loading}
            useContact={useContact}
            pagination={pagination}
            activeIndex={activeIndex}
            onItemClick={handleClick}
            onScrollToIndex={handleScrollToIndex}
          />
        </div>
        <OverlayScrollbarsComponent
          className="col-xl-9 content-view-details custom-scrollbar"
          options={{
            scrollbars: { autoHide: 'scroll' },
          }}
        >
          {id ? (
            React.cloneElement(children as any, {
              pagination,
              activeIndex,
              contact,
            })
          ) : (
            <NoContacts />
          )}
        </OverlayScrollbarsComponent>
      </div>
    </ContentWrapper>
  );
}

export default MainContacts;
