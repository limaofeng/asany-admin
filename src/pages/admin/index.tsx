import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'admin',
  description: '',
  namespace: 'cn.asany.ui.admin.design',
})
class Admin {
  @component({
    name: 'AsanyEditor',
    title: 'AsanyEditor',
    tags: ['设计'],
  })
  AsanyEditor = dynamic({
    loader: () => import('./components/builder/HomeBuilder'),
    loading: LoadingComponent,
  });
}

export default new Admin();
