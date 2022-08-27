import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'workflow',
  description: '工作流',
  namespace: 'cn.asany.ui.admin.workflow',
})
class Workflow {
  @component({
    title: '默认侧边栏',
    tags: ['工作流/侧边栏'],
  })
  DefaultSidebar = dynamic({
    loader: () => import('./components/DefaultSidebar'),
    loading: LoadingComponent,
  });

  @component({
    title: '流程发起',
    tags: ['工作流'],
  })
  Launcher = dynamic({
    loader: () => import('./pages/Launcher'),
    loading: LoadingComponent,
  });

  @component({
    title: '设计器',
    tags: ['工作流'],
  })
  FlowDesign = dynamic({
    loader: () => import('./pages/FlowDesign'),
    loading: LoadingComponent,
  });
}

export default new Workflow();
