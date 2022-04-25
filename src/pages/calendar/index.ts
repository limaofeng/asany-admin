import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'calendar',
  description: '日历',
  namespace: 'cn.asany.ui.admin.calendar',
})
class Contacts {
  @component()
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });

  @component({ name: 'MainCalendar' })
  MainCalendar = dynamic({
    loader: () => import('./pages/MainCalendar'),
    loading: LoadingComponent,
  });
}

export default new Contacts();
