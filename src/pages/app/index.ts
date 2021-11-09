import { component, library } from 'sunmao';

import AppList from './pages/AppList';
import AppView from './pages/AppView';
import Overview from './pages/Overview';
import MenuTree from './pages/MenuTree';
import RouteTree from './pages/RouteTree';

@library({
  name: 'cms',
  description: '',
  namespace: 'cn.asany.ui.admin.app',
})
class App {
  @component({ name: 'AppList' })
  AppList = AppList;
  @component({ name: 'AppView' })
  AppView = AppView;
  @component({ name: 'Overview' })
  Overview = Overview;
  @component({ name: 'MenuTree' })
  MenuTree = MenuTree;
  @component({ name: 'RouteTree' })
  RouteTree = RouteTree;
}

export default new App();
