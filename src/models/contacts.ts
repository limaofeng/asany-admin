import { useCallback, useReducer, useRef } from 'react';

type ContactsState = {
  book?: string;
};

export default function useContactsModel() {
  const state = useRef<ContactsState>({});
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleSetBook = useCallback((bookId) => {
    if (state.current.book == bookId) {
      return;
    }
    state.current.book = bookId;
    forceRender();
  }, []);

  return {
    state: state.current,
    setBook: handleSetBook,
  };
}
