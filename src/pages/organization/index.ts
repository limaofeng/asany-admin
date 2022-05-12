import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'organization',
  description: '',
  namespace: 'cn.asany.ui.admin.organization',
})
class Organization {
  @component({ name: 'OrganizationSettingsSidebar' })
  OrganizationSettingsSidebar = dynamic({
    loader: () => import('./components/OrganizationSettingsSidebar'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Profile' })
  SettingsProfile = dynamic({
    loader: () => import('./pages/settings/Profile'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Roles' })
  SettingsRoles = dynamic({
    loader: () => import('./pages/settings/Roles'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.RoleDetails' })
  SettingsRoleDetails = dynamic({
    loader: () => import('./pages/settings/RoleDetails'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Permissions' })
  Permissions = dynamic({
    loader: () => import('./pages/settings/Permissions'),
    loading: LoadingComponent,
  });
}

export default new Organization();
