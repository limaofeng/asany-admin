import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'wmf',
  description: 'WMF福腾宝相关组件',
  namespace: 'cn.asany.ui.admin.wmf',
})
class WMF {
  @component({
    name: 'ConformitySidebar',
    title: '项目侧边栏',
    tags: ['客户关系管理/侧边栏'],
  })
  ConformitySidebar = dynamic({
    loader: () => import('./components/ConformitySidebar'),
    loading: LoadingComponent,
  });

  @component({
    name: 'ConformityList',
    title: '仪表盘',
    tags: ['项目管理'],
  })
  ConformityList = dynamic({
    loader: () => import('./views/ConformityList'),
    loading: LoadingComponent,
  });
}

export default new WMF();
