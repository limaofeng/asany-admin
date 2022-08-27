import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'user',
  description: '',
  namespace: 'cn.asany.ui.admin.user',
})
class User {
  @component({
    title: '侧边栏',
    tags: ['用户中心'],
  })
  UserSettingsSidebar = dynamic({
    loader: () => import('./components/UserSettingsSidebar'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Profile',
    title: '基本信息',
    tags: ['用户中心'],
  })
  UserProfile = dynamic({
    loader: () => import('./pages/settings/Profile'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Account',
    title: '账号',
    tags: ['用户中心'],
  })
  UserAccount = dynamic({
    loader: () => import('./pages/settings/Account'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Emails',
    title: '电子邮件',
    tags: ['用户中心'],
  })
  UserEmails = dynamic({
    loader: () => import('./pages/settings/Emails'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Notifications',
    title: '通知',
    tags: ['用户中心'],
  })
  UserNotifications = dynamic({
    loader: () => import('./pages/settings/Notifications'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Organizations',
    title: '组织',
    tags: ['用户中心'],
  })
  UserOrganizations = dynamic({
    loader: () => import('./pages/settings/Organizations'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Preferences',
    title: '偏好设置',
    tags: ['用户中心'],
  })
  UserPreferences = dynamic({
    loader: () => import('./pages/settings/Preferences'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Security',
    title: '安全',
    tags: ['用户中心'],
  })
  UserSecurity = dynamic({
    loader: () => import('./pages/settings/Security'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.SessionDetails',
    title: '会话详情',
    tags: ['用户中心'],
  })
  SessionDetails = dynamic({
    loader: () => import('./pages/settings/SessionDetails'),
    loading: LoadingComponent,
  });
  @component({
    name: 'UserAccountMenu',
    title: ' 用户菜单',
    tags: ['用户中心/其他'],
  })
  UserAccountMenu = dynamic({
    loader: () => import('./components/UserAccountMenu'),
    loading: LoadingComponent,
  });
}

export default new User();
