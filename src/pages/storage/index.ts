import { component, library } from 'sunmao';

import ListFiles from './view/ListFiles';
import FileManager from './view/FileManager';
import CloudStorage from './view/CloudStorage';
import Sidebar from './components/Sidebar';

@library({
  name: 'storage',
  description: '',
  namespace: 'cn.asany.ui.admin.storage',
})
class Storage {
  @component({ name: 'Sidebar' })
  Sidebar = Sidebar;
  @component({ name: 'CloudStorage' })
  CloudStorage = CloudStorage;
  @component({ name: 'FileManager' })
  FileManager = FileManager;
  @component({ name: 'ListFiles' })
  ListFiles = ListFiles;
}

export default new Storage();
