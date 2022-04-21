import { component, library } from 'sunmao';

import OrganizationSettingsSidebar from './components/OrganizationSettingsSidebar';
import { SettingsProfile, SettingsRoleDetails, SettingsRoles } from './pages/settings';

import './style/index.scss';

@library({
  name: 'organization',
  description: '',
  namespace: 'cn.asany.ui.admin.organization',
})
class Organization {
  @component({ name: 'OrganizationSettingsSidebar' })
  OrganizationSettingsSidebar = OrganizationSettingsSidebar;
  @component({ name: 'settings.Profile' })
  SettingsProfile = SettingsProfile;
  @component({ name: 'settings.Roles' })
  SettingsRoles = SettingsRoles;
  @component({ name: 'settings.RoleDetails' })
  SettingsRoleDetails = SettingsRoleDetails;
}

export default new Organization();
