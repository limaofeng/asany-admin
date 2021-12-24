import { component, library } from 'sunmao';

import UserList from './pages/UserList';

@library({
  name: 'contacts',
  description: '通讯录',
  namespace: 'cn.asany.ui.admin.contacts',
})
class Contacts {
  @component()
  UserList = UserList;
}

export default new Contacts();
