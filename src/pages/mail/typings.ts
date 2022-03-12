import type { MailboxMessage } from '@/types';

export type RefreshType = 'toFolder' | 'updateFlags' | 'delete';

export type RefreshEvent = {
  type: RefreshType;
  index: number;
  key: string;
};

export type UseMessage = (index: number) => MailboxMessage | undefined;
