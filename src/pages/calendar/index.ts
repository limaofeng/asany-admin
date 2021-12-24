import { component, library } from 'sunmao';

import Sidebar from './components/Sidebar';
import MainCalendar from './pages/MainCalendar';

import './style/index.scss';

@library({
  name: 'calendar',
  description: '日历',
  namespace: 'cn.asany.ui.admin.calendar',
})
class Contacts {
  @component()
  Sidebar = Sidebar;

  @component()
  MainCalendar = MainCalendar;
}

export default new Contacts();
