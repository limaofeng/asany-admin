import { component, library } from 'sunmao';

import Sidebar from './components/Sidebar';
import Mailbox from './pages/Mailbox';

import './style/index.scss';

@library({
  name: 'email',
  description: '邮箱',
  namespace: 'cn.asany.ui.admin.email',
})
class Contacts {
  @component()
  Sidebar = Sidebar;
  @component()
  Mailbox = Mailbox;
}

export default new Contacts();
