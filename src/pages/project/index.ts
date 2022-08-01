import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'project',
  description: '',
  namespace: 'cn.asany.ui.admin.project',
})
class Project {
  @component({
    name: 'ProjectList',
    title: '项目列表',
    tags: ['项目管理'],
  })
  Permissions = dynamic({
    loader: () => import('./pages/ProjectList'),
    loading: LoadingComponent,
  });
}

export default new Project();
