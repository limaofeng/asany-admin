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
  @component({
    title: '侧边栏',
    tags: ['活动管理'],
  })
  Sidebar = dynamic({
    loader: () => import('./components/WebSiteSidebar'),
    loading: LoadingComponent,
  });
  @component({
    name: 'landing.PageList',
    title: '活动列表页',
    tags: ['活动管理'],
  })
  PageList = dynamic({
    loader: () => import('./pages/landing/PageList'),
    loading: LoadingComponent,
  });
  @component({
    name: 'landing.PageDetails',
    title: '活动详情页',
    tags: ['活动管理'],
  })
  PageDetails = dynamic({
    loader: () => import('./pages/landing/PageDetails'),
    loading: LoadingComponent,
  });
  @component({
    name: 'landing.PosterList',
    title: '海报列表',
    tags: ['活动管理'],
  })
  PosterList = dynamic({
    loader: () => import('./pages/landing/PosterList'),
    loading: LoadingComponent,
  });
  @component({
    name: 'landing.PosterDetails',
    title: '海报详情',
    tags: ['活动管理'],
  })
  PosterDetails = dynamic({
    loader: () => import('./pages/landing/PosterDetails'),
    loading: LoadingComponent,
  });
  @component({
    name: 'landing.StoreList',
    title: '门店列表',
    tags: ['活动管理'],
  })
  StoreList = dynamic({
    loader: () => import('./pages/landing/StoreList'),
    loading: LoadingComponent,
  });
  @component({
    name: 'landing.StoreDetails',
    title: '门店详情',
    tags: ['活动管理'],
  })
  StoreDetails = dynamic({
    loader: () => import('./pages/landing/StoreDetails'),
    loading: LoadingComponent,
  });
}

export default new Activitie();
