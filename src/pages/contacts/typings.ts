import { Contact } from '@/types';

export type ContactRouteParams = {
  id: string;
};

export type OutletContextState = {
  book: string;
  type: string;
  group: string;
  contact: Contact;
};

export type ContactListState = {
  activeIndex: number;
  items: Contact[];
  width: number;
};
