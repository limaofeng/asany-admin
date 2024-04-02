import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'icon',
  description: '',
  namespace: 'cn.asany.ui.admin.icon',
})
class IconLibrary {
  @component({ name: 'Libraries' })
  Libraries = dynamic({
    loader: () => import('./pages/Libraries'),
    loading: LoadingComponent,
  });
  @component({ name: 'LibraryDetails' })
  LibraryDetails = dynamic({
    loader: () => import('./pages/LibraryDetails'),
    loading: LoadingComponent,
  });
}

export default new IconLibrary();
