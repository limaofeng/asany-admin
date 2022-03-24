import { component, library } from 'sunmao';

import Sidebar from './components/Sidebar';
import DriveStarred from './pages/DriveStarred';
import DriveTrash from './pages/DriveTrash';
import FileList from './pages/FileList';

import './style/index.scss';

@library({
  name: 'drive',
  description: '',
  namespace: 'cn.asany.ui.admin.drive',
})
class Drive {
  @component({ name: 'Sidebar' })
  Sidebar = Sidebar;
  @component({ name: 'FileList' })
  FileList = FileList;
  @component({ name: 'DriveStarred' })
  DriveStarred = DriveStarred;
  @component({ name: 'DriveTrash' })
  DriveTrash = DriveTrash;
}

export default new Drive();
