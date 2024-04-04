import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'pim',
  description: '产品管理',
  namespace: 'cn.asany.ui.admin.pim',
})
class ProductInformationManagement {
  @component({
    name: 'PIMSidebar',
    title: '默认侧边栏',
    tags: ['产品管理/侧边栏'],
  })
  PIMSidebar = dynamic({
    loader: () => import('./components/PIMSidebar'),
    loading: LoadingComponent,
  });

  @component({
    name: 'DeviceQrCodeListView',
  })
  DeviceQrCodeListView = dynamic({
    loader: () => import('./views/DeviceQrCodeListView'),
    loading: LoadingComponent,
  });
}

export default new ProductInformationManagement();
