import { component, library } from 'sunmao';

import Sidebar from './components/Sidebar';
import FileList from './pages/FileList';

import './style/index.scss';

@library({
  name: 'storage',
  description: '',
  namespace: 'cn.asany.ui.admin.drive',
})
class Storage {
  @component({ name: 'Sidebar' })
  Sidebar = Sidebar;
  @component({ name: 'FileList' })
  FileList = FileList;
}

export default new Storage();
