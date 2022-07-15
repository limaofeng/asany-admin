import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'admin',
  description: '',
  namespace: 'cn.asany.ui.admin',
})
class Admin {
  @component({
    name: 'Home',
    title: '首页',
    tags: ['门户'],
  })
  HomeBuilder = dynamic({
    loader: () => import('./components/builder/HomeBuilder'),
    loading: LoadingComponent,
  });
}

export default new Admin();
