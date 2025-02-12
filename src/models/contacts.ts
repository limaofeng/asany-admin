import { useCallback, useReducer, useRef } from 'react';

import { Contacts } from '@/types';

type ContactsState = {
  data?: Contacts;
  group?: string;
};

export default function useContactsModel() {
  const state = useRef<ContactsState>({});
  const [version, forceRender] = useReducer((s) => s + 1, 0);

  const handleSetBook = useCallback((book: Contacts, group: string) => {
    state.current.data = book;
    state.current.group = group;
    forceRender();
  }, []);

  return {
    state: { ...state.current },
    version,
    setContacts: handleSetBook,
  };
}
