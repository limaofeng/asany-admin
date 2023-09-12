import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'fples',
  description: '',
  namespace: 'cn.asany.ui.admin.fples',
})
class Screen {
  @component({ name: 'SignIn' })
  SignIn = dynamic({
    loader: () => import('./SignIn'),
    loading: LoadingComponent,
  });
  @component({ name: 'ScreenList' })
  ScreenList = dynamic({
    loader: () => import('./ScreenList'),
    loading: LoadingComponent,
  });
  @component({ name: 'ScreenView' })
  ScreenView = dynamic({
    loader: () => import('./ScreenDetails'),
    loading: LoadingComponent,
  });
}

export default new Screen();
