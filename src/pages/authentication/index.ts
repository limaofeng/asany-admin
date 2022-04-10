import { component, library } from 'sunmao';

import AsideLayoutSignIn from './sign-in/AsideLayoutSignIn';

@library({
  name: 'authentication',
  description: '',
  namespace: 'cn.asany.ui.admin.authentication',
})
class Authentication {
  @component({ name: 'AsideLayoutSignIn' })
  AsideLayoutSignIn = AsideLayoutSignIn;
}

export default new Authentication();
