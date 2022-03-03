export const DEFAULT_MAILBOXES = [
  {
    id: 'INBOX',
    name: '收件箱',
    icon: 'Duotune/com010',
    badge: 'success',
  },
  {
    id: 'Sent',
    name: '已发送',
    icon: 'Duotune/gen016',
  },
  {
    id: 'Drafts',
    name: '草稿',
    icon: 'Duotune/gen009',
    badge: 'primary',
  },
  {
    id: 'Archive',
    name: '归档',
    icon: 'Duotune/lay010',
  },
  {
    id: 'Spam',
    name: '垃圾邮件',
    icon: 'Duotune/gen044',
  },
  {
    id: 'Trash',
    name: '回收站',
    icon: 'Duotune/gen027',
    badge: 'warning',
  },
  {
    id: 'Outbox',
    name: '发件箱',
    icon: 'Duotune/gen027',
  },
];

export function getDefaultMailboxBadgeStyle(id: string) {
  const mailbox = DEFAULT_MAILBOXES.find((item) => item.id.toLowerCase() == id);
  return mailbox?.badge;
}
