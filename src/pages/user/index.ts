import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'user',
  description: '',
  namespace: 'cn.asany.ui.admin.user',
})
class User {
  @component()
  UserSettingsSidebar = dynamic({
    loader: () => import('./components/UserSettingsSidebar'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Profile' })
  UserProfile = dynamic({
    loader: () => import('./pages/settings/Profile'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Account' })
  UserAccount = dynamic({
    loader: () => import('./pages/settings/Account'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Emails' })
  UserEmails = dynamic({
    loader: () => import('./pages/settings/Emails'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Notifications' })
  UserNotifications = dynamic({
    loader: () => import('./pages/settings/Notifications'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Organizations' })
  UserOrganizations = dynamic({
    loader: () => import('./pages/settings/Organizations'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Preferences' })
  UserPreferences = dynamic({
    loader: () => import('./pages/settings/Preferences'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Security' })
  UserSecurity = dynamic({
    loader: () => import('./pages/settings/Security'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.SessionDetails' })
  SessionDetails = dynamic({
    loader: () => import('./pages/settings/SessionDetails'),
    loading: LoadingComponent,
  });
}

export default new User();
