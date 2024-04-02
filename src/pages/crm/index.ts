import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'project',
  description: '',
  namespace: 'cn.asany.ui.admin.crm',
})
class Crm {
  @component({
    name: 'CrmSidebar',
    title: '项目侧边栏',
    tags: ['客户关系管理/侧边栏'],
  })
  ProjectSidebar = dynamic({
    loader: () => import('./components/CrmSidebar'),
    loading: LoadingComponent,
  });

  @component({
    name: 'Dashboard',
    title: '仪表盘',
    tags: ['项目管理'],
  })
  Dashboard = dynamic({
    loader: () => import('./views/Dashboard'),
    loading: LoadingComponent,
  });
}

export default new Crm();
