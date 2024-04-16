import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'system',
  description: '',
  namespace: 'cn.asany.ui.admin.system',
})
class System {
  @component({ name: 'Sidebar', title: '侧边栏', tags: ['系统管理'] })
  Sidebar = dynamic({
    loader: () => import('./components/SystemSidebar'),
    loading: LoadingComponent,
  });
  @component({
    name: 'message.MessageTypeList',
    title: '消息类型',
    tags: ['系统管理/消息管理'],
  })
  WebsiteList = dynamic({
    loader: () => import('./message/pages/MessageTypeList'),
    loading: LoadingComponent,
  });

  @component({
    name: 'MainSystem',
    title: '消息列表',
    tags: ['系统管理/消息管理'],
  })
  MainSystem = dynamic({
    loader: () => import('./views/MainSystem'),
    loading: LoadingComponent,
  });

  @component({
    name: 'UserListView',
    title: '用户列表',
    tags: ['系统管理/用户管理'],
  })
  UserListView = dynamic({
    loader: () => import('./views/UserListView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'UserNewView',
    title: '新建用户',
    tags: ['系统管理/用户管理'],
  })
  UserNewView = dynamic({
    loader: () => import('./views/UserNewView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'UserEditView',
    title: '编辑用户',
    tags: ['系统管理/用户管理'],
  })
  UserEditView = dynamic({
    loader: () => import('./views/UserEditView'),
    loading: LoadingComponent,
  });
}

export default new System();
