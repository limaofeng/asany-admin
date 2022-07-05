import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './pages/style/App.scss';
import './style/index.scss';

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
  @component({ name: 'settings.Overview' })
  Overview = dynamic({
    loader: () => import('./pages/settings/Overview'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Profile' })
  Profile = dynamic({
    loader: () => import('./pages/settings/Profile'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.ClientSecrets' })
  ClientSecrets = dynamic({
    loader: () => import('./pages/settings/ClientSecrets'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.MenuTree' })
  MenuTree = dynamic({
    loader: () => import('./pages/settings/MenuTree'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.RouteTree' })
  RouteTree = dynamic({
    loader: () => import('./pages/settings/RouteTree'),
    loading: LoadingComponent,
  });
}

export default new App();
