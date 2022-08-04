import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

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
}

export default new Chat();
