import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'layout',
  description: '',
  namespace: 'cn.asany.ui.admin.layout',
})
class Layout {
  @component()
  Demo7 = dynamic({
    loader: () => import('./Demo7/Demo7'),
    loading: LoadingComponent,
  });
}

export default new Layout();
