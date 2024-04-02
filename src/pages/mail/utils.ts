import { parseEmailTag } from '@asany/tags-input';

type DEFAULT_MAILBOXE_TYPE = {
  id: string;
  name: string;
  icon: string;
  badge: string;
};

export const DEFAULT_MAILBOXES = {
  INBOX: {
    id: 'INBOX',
    name: '收件箱',
    icon: 'Duotune/com010',
    badge: 'success',
  },
  Sent: {
    id: 'Sent',
    name: '已发送',
    icon: 'Duotune/gen016',
  },
  Drafts: {
    id: 'Drafts',
    name: '草稿',
    icon: 'Duotune/gen009',
    badge: 'primary',
  },
  Archive: {
    id: 'Archive',
    name: '归档',
    icon: 'Duotune/lay010',
  },
  Spam: {
    id: 'Spam',
    name: '垃圾邮件',
    icon: 'Duotune/gen044',
  },
  Trash: {
    id: 'Trash',
    name: '回收站',
    icon: 'Duotune/gen027',
    badge: 'warning',
  },
  Outbox: {
    id: 'Outbox',
    name: '发件箱',
    icon: 'Duotune/gen027',
  },
  Later: {
    id: 'Later',
    name: '待办',
    icon: 'Duotune/gen027',
  },
  Blocked: {
    id: 'Blocked',
    name: '已屏蔽',
    icon: 'Duotune/gen027',
  },
};

export const DEFAULT_MAILBOXES_ALL: DEFAULT_MAILBOXE_TYPE[] = Object.keys(
  DEFAULT_MAILBOXES,
).map((name) => DEFAULT_MAILBOXES[name]);

export function displayName(item: string) {
  const mail = parseEmailTag(item);
  return (
    mail.name ||
    (mail.address && mail.address.substring(0, mail.address.indexOf('@')))
  );
}
