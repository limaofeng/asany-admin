import { component, library } from 'sunmao';

import MailMessageDetails from './pages/MailMessageDetails';
import Sidebar from './components/Sidebar';
import Mailbox from './pages/Mailbox';
import ComposeMail from './pages/ComposeMail';

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
  @component()
  MailMessageDetails = MailMessageDetails;
  @component()
  Compose = ComposeMail;
}

export default new Contacts();
