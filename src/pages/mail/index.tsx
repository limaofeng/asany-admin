import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'email',
  description: '邮箱',
  namespace: 'cn.asany.ui.admin.mail',
})
class Mail {
  @component({
    title: '侧边栏',
    tags: ['邮件'],
  })
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });
  @component({
    title: '邮件列表',
    tags: ['邮件'],
  })
  Mailbox = dynamic({
    loader: () => import('./pages/Mailbox'),
    loading: LoadingComponent,
  });
  @component({
    title: '邮件详情',
    tags: ['邮件'],
  })
  MailMessageDetails = dynamic({
    loader: () => import('./pages/MailMessageDetails'),
    loading: LoadingComponent,
  });
  @component({
    title: '写邮件',
    tags: ['邮件'],
  })
  Compose = dynamic({
    loader: () => import('./pages/ComposeMail'),
    loading: LoadingComponent,
  });
}

export default new Mail();
