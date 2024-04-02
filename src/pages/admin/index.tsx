import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

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
