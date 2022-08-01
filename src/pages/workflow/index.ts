import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'workflow',
  description: '',
  namespace: 'cn.asany.ui.admin.workflow',
})
class Workflow {
  @component({
    title: '网站列表',
    tags: ['网站'],
  })
  FlowDesign = dynamic({
    loader: () => import('./pages/FlowDesign'),
    loading: LoadingComponent,
  });
}

export default new Workflow();
