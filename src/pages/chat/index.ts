import dynamic from '@/utils/dynamic';
import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'chat',
  description: '',
  namespace: 'cn.asany.ui.admin.chat',
})
class Chat {
  @component({
    title: '聊天应用',
    tags: ['消息'],
  })
  ChatApp = dynamic({
    loader: () => import('./pages/ChatApp'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ChatDrawer',
    title: 'Mini聊天框',
    tags: ['消息'],
  })
  ChatDrawer = dynamic({
    loader: () => import('./components/ChatDrawer'),
    loading: LoadingComponent,
  });
}

export default new Chat();
