import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

import './pages/style/App.scss';
import './style/index.scss';

@library({
  name: 'app',
  description: '',
  namespace: 'cn.asany.ui.admin.app',
})
class App {
  @component({
    name: 'AppList',
    title: '应用列表',
    tags: ['应用管理'],
    cover: 'https://share.cleanshot.com/HIBw6c/download',
  })
  AppList = dynamic({
    loader: () => import('./pages/AppList'),
    loading: LoadingComponent,
  });
  @component({
    name: 'AppView',
    title: '应用详情布局',
    tags: ['应用管理'],
    cover: 'https://share.cleanshot.com/OXqGNn/download',
  })
  AppView = dynamic({
    loader: () => import('./pages/AppView'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Overview', title: '概述', tags: ['应用管理/应用详情'] })
  Overview = dynamic({
    loader: () => import('./pages/settings/Overview'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.Profile', title: '基础信息', tags: ['应用管理/应用详情'] })
  Profile = dynamic({
    loader: () => import('./pages/settings/Profile'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.ClientSecrets',
    title: '开发信息',
    tags: ['应用管理/应用详情'],
    cover: 'https://share.cleanshot.com/2F4AQd/download',
  })
  ClientSecrets = dynamic({
    loader: () => import('./pages/settings/ClientSecrets'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.MenuTree',
    title: '菜单设置',
    tags: ['应用管理/应用详情'],
    cover: 'https://share.cleanshot.com/MU8BE1/download',
  })
  MenuTree = dynamic({
    loader: () => import('./pages/settings/MenuTree'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.RouteTree',
    title: '路由设置',
    tags: ['应用管理/应用详情'],
    cover: 'https://share.cleanshot.com/YDyqGB/download',
  })
  RouteTree = dynamic({
    loader: () => import('./pages/settings/RouteTree'),
    loading: LoadingComponent,
  });
  @component({
    name: 'settings.ComponentList',
    title: '组件设置',
    cover: 'https://share.cleanshot.com/daQwOK/download',
    tags: ['应用管理/应用详情'],
  })
  ComponentList = dynamic({
    loader: () => import('./pages/settings/ComponentList'),
    loading: LoadingComponent,
  });
  @component({
    name: 'breadcrumb.AppBreadcrumbItem',
    title: '应用详情',
    tags: ['应用管理/小组件'],
  })
  AppBreadcrumbItem = dynamic({
    loader: () => import('./components/breadcrumb/AppBreadcrumbItem'),
    loading: LoadingComponent,
  });
}

export default new App();
