import { component, library } from 'sunmao';

import Sidebar from './components/Sidebar';
import MainContacts from './pages/MainContacts';

import './style/index.scss';

@library({
  name: 'contacts',
  description: '通讯录',
  namespace: 'cn.asany.ui.admin.contacts',
})
class Contacts {
  @component()
  Sidebar = Sidebar;
  @component()
  MainContacts = MainContacts;
}

export default new Contacts();