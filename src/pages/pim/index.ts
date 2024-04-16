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

  @component({
    name: 'DeviceListView',
  })
  DeviceListView = dynamic({
    loader: () => import('./views/DeviceListView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'BrandListView',
  })
  BrandListView = dynamic({
    loader: () => import('./views/BrandListView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'ProductListView',
  })
  ProductListView = dynamic({
    loader: () => import('./views/ProductListView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'ProductEditView',
  })
  ProductEditView = dynamic({
    loader: () => import('./views/ProductEditView'),
    loading: LoadingComponent,
  });

  @component({
    name: 'ProductNewView',
  })
  ProductNewView = dynamic({
    loader: () => import('./views/ProductNewView'),
    loading: LoadingComponent,
  });
}

export default new ProductInformationManagement();
