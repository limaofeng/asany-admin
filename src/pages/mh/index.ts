import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'MH',
  description: '',
  namespace: 'cn.asany.ui.admin.mh',
})
class MH {
  @component({
    name: 'MainDashboard',
    title: '主仪表盘',
    tags: ['客户定制/麦禾/仪表盘'],
  })
  MainDashboard = dynamic({
    loader: () => import('./views/MainDashboard'),
    loading: LoadingComponent,
  });
}

export default new MH();
