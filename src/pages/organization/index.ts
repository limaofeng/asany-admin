import dynamic from '@/utils/dynamic';
import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';

import './style/index.scss';

@library({
  name: 'organization',
  description: '',
  namespace: 'cn.asany.ui.admin.organization',
})
class Organization {
  @component({
    name: 'OrganizationSettingsSidebar',
    title: '侧边栏',
    tags: ['组织设置'],
  })
  OrganizationSettingsSidebar = dynamic({
    loader: () => import('./components/OrganizationSettingsSidebar'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Profile',
    title: '基本信息',
    tags: ['组织设置'],
  })
  SettingsProfile = dynamic({
    loader: () => import('./pages/settings/Profile'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Roles',
    title: '角色管理',
    tags: ['组织设置'],
  })
  SettingsRoles = dynamic({
    loader: () => import('./pages/settings/Roles'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.RoleDetails',
    title: '角色详情',
    tags: ['组织设置'],
  })
  SettingsRoleDetails = dynamic({
    loader: () => import('./pages/settings/RoleDetails'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.Permissions',
    title: '权限管理',
    tags: ['组织设置'],
  })
  Permissions = dynamic({
    loader: () => import('./pages/settings/Permissions'),
    loading: LoadingComponent,
  });
}

export default new Organization();
