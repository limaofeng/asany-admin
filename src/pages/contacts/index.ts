import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

import './style/index.scss';

@library({
  name: 'contacts',
  description: '通讯录',
  namespace: 'cn.asany.ui.admin.contacts',
})
class Contacts {
  @component({
    title: '侧边栏',
    tags: ['通讯录'],
  })
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });
  @component({
    title: '主题界面',
    tags: ['通讯录'],
  })
  MainContacts = dynamic({
    loader: () => import('./pages/MainContacts'),
    loading: LoadingComponent,
  });
  @component({
    title: '联系人详情',
    tags: ['通讯录'],
  })
  ViewContact = dynamic({
    loader: () => import('./pages/ViewContact'),
    loading: LoadingComponent,
  });
}

export default new Contacts();
