import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './pages/style/App.scss';

@library({
  name: 'app',
  description: '',
  namespace: 'cn.asany.ui.admin.app',
})
class App {
  @component({ name: 'AppList' })
  AppList = dynamic({
    loader: () => import('./pages/AppList'),
    loading: LoadingComponent,
  });
  @component({ name: 'AppView' })
  AppView = dynamic({
    loader: () => import('./pages/AppView'),
    loading: LoadingComponent,
  });
  @component({ name: 'Overview' })
  Overview = dynamic({
    loader: () => import('./pages/Overview'),
    loading: LoadingComponent,
  });
  @component({ name: 'MenuTree' })
  MenuTree = dynamic({
    loader: () => import('./pages/MenuTree'),
    loading: LoadingComponent,
  });
  @component({ name: 'RouteTree' })
  RouteTree = dynamic({
    loader: () => import('./pages/RouteTree'),
    loading: LoadingComponent,
  });
}

export default new App();
