import '@fullcalendar/react/dist/vdom';
import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'calendar',
  description: '日历',
  namespace: 'cn.asany.ui.admin.calendar',
})
class Contacts {
  @component({
    title: '侧边栏',
    tags: ['日程'],
  })
  Sidebar = dynamic({
    loader: () => import('./components/Sidebar'),
    loading: LoadingComponent,
  });

  @component({ name: 'MainCalendar', title: '日历', tags: ['日程'] })
  MainCalendar = dynamic({
    loader: () => import('./pages/MainCalendar'),
    loading: LoadingComponent,
  });
}

export default new Contacts();
