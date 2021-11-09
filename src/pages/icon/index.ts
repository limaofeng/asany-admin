import { component, library } from 'sunmao';

import Libraries from './pages/Libraries';
import LibraryDetails from './pages/LibraryDetails';

@library({
  name: 'cms',
  description: '',
  namespace: 'cn.asany.ui.admin.icon',
})
class IconLibrary {
  @component({ name: 'Libraries' })
  Libraries = Libraries;
  @component({ name: 'LibraryDetails' })
  LibraryDetails = LibraryDetails;
}

export default new IconLibrary();
