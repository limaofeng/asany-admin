import { component, library } from 'sunmao';

import MenuSidebar from './MenuSidebar';

@library({
  name: 'shanhai',
  description: '',
  namespace: 'cn.asany.ui.admin.shanhai',
})
class Shanhai {
  @component({ name: 'MenuSidebar' })
  MenuSidebar = MenuSidebar;
}

export default new Shanhai();
