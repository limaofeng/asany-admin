import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/website.scss';

@library({
  name: 'website',
  description: '',
  namespace: 'cn.asany.ui.admin.website',
})
class Website {
  @component()
  WebsiteList = dynamic({
    loader: () => import('./pages/WebsiteList'),
    loading: LoadingComponent,
  });
  @component()
  WebsiteManage = dynamic({
    loader: () => import('./pages/WebsiteManage'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.WebsiteGeneral' })
  WebsiteGeneral = dynamic({
    loader: () => import('./pages/settings/WebsiteGeneral'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.WebsiteNavigation' })
  WebsiteNavigation = dynamic({
    loader: () => import('./pages/settings/WebsiteNavigation'),
    loading: LoadingComponent,
  });
}

export default new Website();
