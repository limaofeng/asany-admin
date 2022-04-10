import { component, library } from 'sunmao';

import Demo7 from './Demo7/Demo7';

@library({
  name: 'layout',
  description: '',
  namespace: 'cn.asany.ui.admin.layout',
})
class Layout {
  @component()
  Demo7 = Demo7;
}

export default new Layout();
