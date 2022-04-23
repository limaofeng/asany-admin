import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'authentication',
  description: '',
  namespace: 'cn.asany.ui.admin.authentication',
})
class Authentication {
  @component({ name: 'AsideLayoutSignIn' })
  AsideLayoutSignIn = dynamic({
    loader: () => import('./sign-in/AsideLayoutSignIn'),
    loading: LoadingComponent,
  });
}

export default new Authentication();
