import { component, library } from 'sunmao';

import UserAccountMenu from './components/UserAccountMenu';

import './style/index.scss';

@library({
  name: 'user',
  description: '',
  namespace: 'cn.asany.ui.admin.user',
})
class User {
  @component({ name: 'UserAccountMenu' })
  UserAccountMenu = UserAccountMenu;
}

export default new User();
