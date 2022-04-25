import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'drive',
  description: '',
  namespace: 'cn.asany.ui.admin.drive',
})
class Drive {
  @component({ name: 'Sidebar' })
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });
  @component({ name: 'FileList' })
  FileList = dynamic({
    loader: () => import('./pages/FileList'),
    loading: LoadingComponent,
  });
  @component({ name: 'DriveStarred' })
  DriveStarred = dynamic({
    loader: () => import('./pages/DriveStarred'),
    loading: LoadingComponent,
  });
  @component({ name: 'DriveTrash' })
  DriveTrash = dynamic({
    loader: () => import('./pages/DriveTrash'),
    loading: LoadingComponent,
  });
}

export default new Drive();
