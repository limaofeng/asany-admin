import { useCallback, useEffect, useReducer, useRef } from 'react';

import EventEmitter from 'events';

import { useContactsLazyQuery } from '../hooks';

import type { Contact, ContactConnection } from '@/types';
import { sleep } from '@/utils';

const DEFAULT_PAGINATION = {
  totalCount: 0,
  pageSize: 0,
  totalPage: 0,
  currentPage: 0,
};

export type PaginationType = typeof DEFAULT_PAGINATION;

export type UseContact = (index: number) => Contact | undefined;

export type LoadContact = (index: number) => Promise<Contact>;

type LoadContactUtils = {
  refetch: (page: number) => Promise<void>;
  refetchWithRemove: (index: number) => Promise<void>;
  loadContact: LoadContact;
};

type UseContactsQuery = [PaginationType, boolean, UseContact, LoadContactUtils];

export function useContacts(token?: string): UseContactsQuery {
  const emitter = useRef(new EventEmitter());
  const state = useRef<{
    page: number;
    token?: string;
    loading: boolean;
    contacts: Contact[];
    pagination: PaginationType;
  }>({
    page: 1,
    token,
    loading: false,
    contacts: [],
    pagination: { ...DEFAULT_PAGINATION },
  });

  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [_loadContacts, { data, loading, refetch }] = useContactsLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  state.current.loading = loading;

  const parseData = useCallback((pagination: ContactConnection) => {
    pagination.edges
      .map((item) => item.node)
      .forEach((msg, _index) => {
        const index = pagination.pageSize * (pagination.currentPage - 1) + _index;
        state.current.contacts[index] = msg as any;
      });
    emitter.current.emit('updates');
    // console.log('updates', state.current.contacts);
  }, []);

  const handleRefetch = useCallback(
    async (page: number) => {
      if (state.current.loading && state.current.page == page) {
        return;
      }
      while (state.current.loading) {
        await sleep(120);
      }
      state.current.page = page;
      debugger;
      refetch({
        filter: {
          token: state.current.token,
        },
        page: state.current.page,
      });
    },
    [refetch],
  );

  const handleRefetchWithRemove = useCallback(
    async (index: number) => {
      const pageSize = state.current.pagination.pageSize;
      if (state.current.pagination.totalCount % state.current.pagination.pageSize == 1) {
        state.current.pagination.totalPage--;
      }
      state.current.pagination.totalCount--;
      state.current.contacts.splice(index, 1);
      const page = Math.ceil((index + 1) / pageSize);
      handleRefetch(page);
    },
    [handleRefetch],
  );

  const loadContacts = useCallback(
    async (page: number) => {
      while (state.current.loading) {
        await sleep(120);
      }
      if (state.current.page == page || page > state.current.pagination.totalPage) {
        return;
      }
      state.current.page = page;
      _loadContacts({
        variables: {
          filter: {
            token: state.current.token,
          },
          page: state.current.page,
        },
      });
    },
    [_loadContacts],
  );

  const loadContact = useCallback(
    async (index: number) => {
      let contact = state.current.contacts[index];

      if (!contact) {
        do {
          contact = state.current.contacts[index];
          if (!contact) {
            await loadContacts(Math.ceil((index + 1) / state.current.pagination.pageSize));
            await sleep(30);
          }
          if (index >= state.current.contacts.length) {
            console.log(`索引超出最大长度 [${index}/${state.current.contacts.length}]`);
            return state.current.contacts[index - 1];
          }
        } while (!contact);
      }

      return contact;
    },
    [loadContacts],
  );

  useEffect(() => {
    emitter.current.setMaxListeners(1000);
  }, []);

  useEffect(() => {
    if (state.current.token != token) {
      state.current.token = token;
      state.current.pagination = { ...DEFAULT_PAGINATION };
      state.current.contacts.length = 0;
      state.current.page = 1;
    }
    if (!token) {
      return forceRender();
    }
    _loadContacts({
      variables: {
        filter: {
          token,
        },
        page: state.current.page,
      },
    });
  }, [_loadContacts, token]);

  useEffect(() => {
    if (loading || !data?.contacts) {
      return;
    }
    state.current.pagination = { ...data.contacts } || state.current.pagination;
    parseData(data.contacts as any);
    forceRender();
  }, [parseData, data?.contacts, loading]);

  const UseContact = (index: number): Contact | undefined => {
    const [, _forceRender] = useReducer((s) => s + 1, 0);
    const latestSelectedState = useRef<{
      contact?: Contact;
      index: number;
      timer?: NodeJS.Timer;
    }>({ index });

    latestSelectedState.current.index = index;

    latestSelectedState.current.contact = state.current.contacts[index];

    useEffect(() => {
      if (index == -1) {
        return;
      }
      const _index = index + 1;

      let _timer: NodeJS.Timer;
      const checkResult = async () => {
        while (state.current.loading) {
          await sleep(300);
        }
        if (!!latestSelectedState.current.contact) {
          latestSelectedState.current.timer && clearTimeout(latestSelectedState.current.timer);
          return;
        }
        loadContacts(Math.ceil(_index / state.current.pagination.pageSize));
        _timer = setTimeout(checkResult, 300);
      };

      _timer = setTimeout(checkResult, 300);
      return () => {
        _timer && clearTimeout(_timer);
      };
    }, [index]);

    const checkForUpdates = useCallback(() => {
      const newSelectedState = state.current.contacts[latestSelectedState.current.index];
      if (newSelectedState == latestSelectedState.current.contact) {
        return;
      }
      latestSelectedState.current.contact = newSelectedState;
      _forceRender();
    }, []);

    useEffect(() => {
      emitter.current.addListener('updates', checkForUpdates);
      return () => {
        emitter.current.removeListener('updates', checkForUpdates);
      };
    }, [checkForUpdates]);

    return latestSelectedState.current.contact;
  };

  // console.log('pagination 1', state.current.pagination);

  return [
    state.current.pagination,
    loading,
    UseContact,
    {
      loadContact,
      refetch: handleRefetch,
      refetchWithRemove: handleRefetchWithRemove,
    },
  ];
}
