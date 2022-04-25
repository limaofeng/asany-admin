import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'email',
  description: '邮箱',
  namespace: 'cn.asany.ui.admin.mail',
})
class Contacts {
  @component()
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });
  @component()
  Mailbox = dynamic({
    loader: () => import('./pages/Mailbox'),
    loading: LoadingComponent,
  });
  @component()
  MailMessageDetails = dynamic({
    loader: () => import('./pages/MailMessageDetails'),
    loading: LoadingComponent,
  });
  @component()
  Compose = dynamic({
    loader: () => import('./pages/ComposeMail'),
    loading: LoadingComponent,
  });
}

export default new Contacts();
