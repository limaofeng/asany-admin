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

export function toPlainText(html: string) {
  //定义script的正则表达式，去除js可以防止注入
  const scriptRegex = '<script[^>]*?>[\\s\\S]*?<\\/script>';
  //定义style的正则表达式，去除style样式，防止css代码过多时只截取到css样式代码
  const styleRegex = '<style[^>]*?>[\\s\\S]*?<\\/style>';
  //定义HTML标签的正则表达式，去除标签，只提取文字内容
  const htmlRegex = '<[^>]+>';
  //定义空格,回车,换行符,制表符
  const spaceRegex = '\\s*|\t|\r|\n';
  // 过滤script标签
  let summary = html.replaceAll(new RegExp(scriptRegex, 'g'), '');
  // 过滤style标签
  summary = summary.replaceAll(new RegExp(styleRegex, 'g'), '');
  // 过滤html标签
  summary = summary.replaceAll(new RegExp(htmlRegex, 'g'), '');
  // 过滤空格等
  summary = summary.replaceAll(new RegExp(spaceRegex, 'g'), '');
  return summary.trim(); // 返回文本字符串
}
