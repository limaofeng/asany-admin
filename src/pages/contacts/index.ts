import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'contacts',
  description: '通讯录',
  namespace: 'cn.asany.ui.admin.contacts',
})
class Contacts {
  @component()
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });
  @component()
  MainContacts = dynamic({
    loader: () => import('./pages/MainContacts'),
    loading: LoadingComponent,
  });
  @component()
  ViewContact = dynamic({
    loader: () => import('./pages/ViewContact'),
    loading: LoadingComponent,
  });
}

export default new Contacts();
