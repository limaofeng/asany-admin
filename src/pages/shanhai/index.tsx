import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'shanhai',
  description: '',
  namespace: 'cn.asany.ui.admin.shanhai',
})
class Shanhai {
  @component({ name: 'MenuSidebar' })
  MenuSidebar = dynamic({
    loader: () => import('./MenuSidebar'),
    loading: LoadingComponent,
  });
}

export default new Shanhai();
