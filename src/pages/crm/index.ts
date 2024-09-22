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
    name: 'CustomerManagementView',
    title: '客户管理',
    tags: ['客户管理/客户管理'],
  })
  CustomerManagementView = dynamic({
    loader: () => import('./views/CustomerManagementView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'CustomerDashboardView',
    title: '概览',
    tags: ['客户管理/概览'],
  })
  CustomerDashboardView = dynamic({
    loader: () => import('./views/CustomerDashboardView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'CustomerInformationView',
    title: '客户详情',
    tags: ['客户管理/客户详情'],
  })
  CustomerInformationView = dynamic({
    loader: () => import('./views/CustomerInformationView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'CustomerStoreListView',
    title: '门店管理',
    tags: ['客户管理/门店管理'],
  })
  CustomerStoreListView = dynamic({
    loader: () => import('./views/CustomerStoreListView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'CustomerUserListView',
    title: '人员管理',
    tags: ['客户管理/人员管理'],
  })
  CustomerUserListView = dynamic({
    loader: () => import('./views/CustomerUserListView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'CustomerDeviceListView',
    title: '设备管理',
    tags: ['客户管理/设备管理'],
  })
  CustomerDeviceListView = dynamic({
    loader: () => import('./views/CustomerDeviceListView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'CustomerTicketListView',
    title: '服务单管理',
    tags: ['客户管理/服务单管理'],
  })
  CustomerTicketListView = dynamic({
    loader: () => import('./views/CustomerTicketListView'),
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
