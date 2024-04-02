import dynamic from '@/utils/dynamic';
import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'project',
  description: '',
  namespace: 'cn.asany.ui.admin.project',
})
class Project {
  @component({
    name: 'ProjectSidebar',
    title: '项目侧边栏',
    tags: ['项目管理/侧边栏'],
  })
  ProjectSidebar = dynamic({
    loader: () => import('./components/ProjectSidebar'),
    loading: LoadingComponent,
  });

  @component({
    name: 'ProjectList',
    title: '项目列表',
    tags: ['项目管理'],
  })
  ProjectList = dynamic({
    loader: () => import('./pages/ProjectList'),
    loading: LoadingComponent,
  });

  @component({
    name: 'ProjectView',
    title: '详情布局',
    tags: ['项目管理/详情布局'],
  })
  ProjectView = dynamic({
    loader: () => import('./pages/ProjectView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'details.Dashboard',
    title: '仪表盘',
    tags: ['项目管理/详情'],
  })
  ProjectDetailsDashboard = dynamic({
    loader: () => import('./pages/details/Dashboard'),
    loading: LoadingComponent,
  });
}

export default new Project();
