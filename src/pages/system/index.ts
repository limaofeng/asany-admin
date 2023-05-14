import { dynamic } from 'umi';
import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'system',
  description: '',
  namespace: 'cn.asany.ui.admin.system',
})
class System {
  @component({ name: 'Sidebar', title: '侧边栏', tags: ['系统管理'] })
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
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
}

export default new System();
