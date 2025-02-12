import { useCallback, useMemo, useReducer, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Resizer } from '@asany/sunmao';
import { useModel } from '@umijs/max';
import classnames from 'classnames';
import { debounce } from 'lodash';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { Contact } from '@/types';

import UserList from '../components/UserList';
import { useContactsQuery } from '../hooks';
import type { ContactListState } from '../typings';

const MIN_WIDTH = 320;
const MAX_WIDTH = 500;

function ContactList() {
  const state = useRef<ContactListState>({
    width: MIN_WIDTH,
    items: [],
    activeIndex: -1,
  });

  const navigate = useNavigate();

  const { data: contacts, group: groupId } = useModel(
    'contacts',
    (model) => model.state,
  );

  const [, forceRender] = useReducer((s) => s + 1, 0);

  const { data, loading } = useContactsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: contacts?.id,
      group: groupId,
    },
    skip: !contacts?.id || !groupId,
  });

  state.current.items = data?.result?.contacts || [];

  const useContact = useCallback((index: number): Contact | undefined => {
    return state.current.items[index];
  }, []);

  const { activeIndex } = state.current;

  const forceResize = useMemo(
    () =>
      debounce(() => {
        forceRender();
      }, 10),
    [],
  );

  const handleResize = useCallback(
    (x: number) => {
      state.current.width += x;
      forceResize();
    },
    [forceResize],
  );

  const handleResizeEnd = useCallback(() => {
    state.current.width = Math.min(
      MAX_WIDTH,
      Math.max(MIN_WIDTH, state.current.width),
    );
  }, []);

  const handleItemClick = useCallback(
    (index: number) => {
      state.current.activeIndex = index;
      const data = state.current.items[index];
      forceRender();
      navigate(`/contacts/${groupId}/${data.id}`);
    },
    [groupId],
  );

  const handleScrollToIndex = useCallback(
    async (e: any) => {
      console.log('scroll to index', e);
      if (state.current.activeIndex === e.index) {
        return;
      }
      // const _message = await loadMessage(e.index);
      state.current.activeIndex = e.index;
      forceRender();
      const data = state.current.items[e.index];
      navigate(`/contacts/${groupId}/${data.id}`);
    },
    [navigate, groupId],
  );

  const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, state.current.width));

  const group = useMemo(() => {
    if (!contacts || !groupId) {
      return undefined;
    }
    return contacts.groups.find((g) => g.id === groupId);
  }, [contacts, groupId]);

  return (
    <>
      <Resizer
        className={classnames('d-flex flex-column flex-lg-row')}
        style={{ width }}
        onResize={handleResize}
        onResizeEnd={handleResizeEnd}
      >
        <UserList
          group={group}
          loading={loading}
          data={(data?.result?.contacts || []) as Contact[]}
          activeIndex={activeIndex}
          onScrollToIndex={handleScrollToIndex}
          onItemClick={handleItemClick}
          useContact={useContact}
        />
      </Resizer>
      <OverlayScrollbarsComponent
        className="col-xl-9 content-view-details custom-scrollbar"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Outlet
          context={{
            contacts,
            group,
            contact: {},
          }}
        />
      </OverlayScrollbarsComponent>
    </>
  );
}

export default ContactList;
