import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/Landing.scss';

@library({
  name: 'activitie',
  description: '',
  namespace: 'cn.asany.ui.admin.activitie',
})
class Activitie {
  @component()
  Sidebar = dynamic({
    loader: () => import('./components/WebSiteSidebar'),
    loading: LoadingComponent,
  });
  @component({ name: 'landing.PageList' })
  PageList = dynamic({
    loader: () => import('./pages/landing/PageList'),
    loading: LoadingComponent,
  });
  @component({ name: 'landing.PageDetails' })
  PageDetails = dynamic({
    loader: () => import('./pages/landing/PageDetails'),
    loading: LoadingComponent,
  });
  @component({ name: 'landing.PosterList' })
  PosterList = dynamic({
    loader: () => import('./pages/landing/PosterList'),
    loading: LoadingComponent,
  });
  @component({ name: 'landing.PosterDetails' })
  PosterDetails = dynamic({
    loader: () => import('./pages/landing/PosterDetails'),
    loading: LoadingComponent,
  });
  @component({ name: 'landing.StoreList' })
  StoreList = dynamic({
    loader: () => import('./pages/landing/StoreList'),
    loading: LoadingComponent,
  });
  @component({ name: 'landing.StoreDetails' })
  StoreDetails = dynamic({
    loader: () => import('./pages/landing/StoreDetails'),
    loading: LoadingComponent,
  });
}

export default new Activitie();
