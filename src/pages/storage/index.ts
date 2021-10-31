import { component, library } from 'sunmao';

import ListFiles from './view/ListFiles';
import FileManager from './view/FileManager';

@library({
  name: 'storage',
  description: '',
  namespace: 'cn.asany.ui.admin.storage',
})
class Storage {
  @component({ name: 'FileManager' })
  FileManager = FileManager;
  @component({ name: 'ListFiles' })
  ListFiles = ListFiles;
}

export default new Storage();
