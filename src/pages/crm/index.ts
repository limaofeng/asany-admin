import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'CRM',
  description: '',
  namespace: 'cn.asany.ui.admin.crm',
})
class Crm {
  @component({
    name: 'CRMSidebar',
    title: '客户管理侧边栏',
    tags: ['客户管理/侧边栏'],
  })
  CrmSidebar = dynamic({
    loader: () => import('./components/CrmSidebar'),
    loading: LoadingComponent,
  });

  @component({
    name: 'CustomerListView',
    title: '客户管理',
    tags: ['客户管理/客户管理'],
  })
  CustomerListView = dynamic({
    loader: () => import('./views/CustomerListView'),
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
