import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'screen',
  description: '',
  namespace: 'cn.asany.ui.admin.screen',
})
class Screen {
  @component({ name: 'ScreenDetails' })
  ScreenDetails = dynamic({
    loader: () => import('./ScreenDetails'),
    loading: LoadingComponent,
  });
}

export default new Screen();
