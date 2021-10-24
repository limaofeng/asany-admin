import { component, library } from 'sunmao';

import HomeBuilder from './components/builder/HomeBuilder';

@library({
  name: 'admin',
  description: '',
  namespace: 'cn.asany.ui.admin',
})
class Admin {
  @component({ name: 'Home' })
  HomeBuilder = HomeBuilder;
}

export default new Admin();
