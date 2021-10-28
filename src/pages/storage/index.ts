import { component, library } from 'sunmao';

import FileManager from './view/FileManager';

@library({
  name: 'storage',
  description: '',
  namespace: 'cn.asany.ui.admin.storage',
})
class Storage {
  @component({ name: 'FileManager' })
  FileManager = FileManager;
}

export default new Storage();
