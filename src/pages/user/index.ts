import { component, library } from 'sunmao';

import UserSettingsSidebar from './components/UserSettingsSidebar';
import {
  SessionDetails,
  UserAccount,
  UserEmails,
  UserNotifications,
  UserOrganizations,
  UserPreferences,
  UserProfile,
  UserSecurity,
} from './pages/settings';

import './style/index.scss';

@library({
  name: 'user',
  description: '',
  namespace: 'cn.asany.ui.admin.user',
})
class User {
  @component()
  UserSettingsSidebar = UserSettingsSidebar;
  @component({ name: 'settings.Profile' })
  UserProfile = UserProfile;
  @component({ name: 'settings.Account' })
  UserAccount = UserAccount;
  @component({ name: 'settings.Emails' })
  UserEmails = UserEmails;
  @component({ name: 'settings.Notifications' })
  UserNotifications = UserNotifications;
  @component({ name: 'settings.Organizations' })
  UserOrganizations = UserOrganizations;
  @component({ name: 'settings.Preferences' })
  UserPreferences = UserPreferences;
  @component({ name: 'settings.Security' })
  UserSecurity = UserSecurity;
  @component({ name: 'settings.SessionDetails' })
  SessionDetails = SessionDetails;
}

export default new User();
