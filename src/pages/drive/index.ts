import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'drive',
  description: '',
  namespace: 'cn.asany.ui.admin.drive',
})
class Drive {
  @component({ name: 'Sidebar', title: '侧边栏', tags: ['网盘'] })
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });
  @component({ name: 'FileList', title: '文件列表', tags: ['网盘'] })
  FileList = dynamic({
    loader: () => import('./pages/FileList'),
    loading: LoadingComponent,
  });
  @component({ name: 'DriveStarred', title: '星标', tags: ['网盘'] })
  DriveStarred = dynamic({
    loader: () => import('./pages/DriveStarred'),
    loading: LoadingComponent,
  });
  @component({ name: 'DriveTrash', title: '回收站', tags: ['网盘'] })
  DriveTrash = dynamic({
    loader: () => import('./pages/DriveTrash'),
    loading: LoadingComponent,
  });
}

export default new Drive();
