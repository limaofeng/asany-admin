import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'authentication',
  description: '',
  namespace: 'cn.asany.ui.admin.authentication',
})
class Authentication {
  @component({
    name: 'AsideLayoutSignIn',
    title: '登陆',
    tags: ['身份认证'],
  })
  AsideLayoutSignIn = dynamic({
    loader: () => import('./sign-in/CreativeSignin'),
    loading: LoadingComponent,
  });
}

export default new Authentication();
