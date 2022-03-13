import React, { useCallback, useMemo, useReducer, useRef } from 'react';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useModel, useRouteMatch } from 'umi';
import type { RouteComponentProps } from 'react-router-dom';

import UserList from '../components/UserList';
import NoContacts from '../components/NoContacts';
import { useContactsQuery } from '../useContactsQuery';
import type { ContactListState, ContactRouteParams } from '../typings';

import { ContentWrapper } from '@/pages/Metronic/components';

type MainContactsProps = RouteComponentProps<ContactRouteParams> & {
  children: React.ReactNode;
};

function MainContacts(props: MainContactsProps) {
  const { children, history } = props;

  const book = useModel('contacts', (model) => model.state.book);

  const match = useRouteMatch<ContactRouteParams>({
    path: '/contacts/:id',
    strict: true,
    sensitive: true,
  });

  const { id } = match?.params || {};

  const state = useRef<ContactListState>({
    activeIndex: -1,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [pagination, loading, useContact, { loadContact }] = useContactsQuery(book);

  const token = useMemo(() => book, [book]);

  const handleScrollToIndex = useCallback(
    async (e) => {
      if (state.current.activeIndex == e.index) {
        return;
      }
      const _contact = await loadContact(e.index);
      state.current.activeIndex = e.index;
      if (token == _contact.id) {
        forceRender();
        return;
      }
      history.push(`/contacts/${_contact.id}`);
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
