/* eslint-disable @typescript-eslint/no-unused-vars */
import { dynamic } from 'umi';
import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';

import './style/website.scss';

@library({
  name: 'website',
  description: '',
  namespace: 'cn.asany.ui.admin.website',
})
class Website {
  @component({
    title: '网站列表',
    tags: ['网站'],
  })
  WebsiteList = dynamic({
    loader: () => import('./pages/WebsiteList'),
    loading: LoadingComponent,
  });
  @component({
    title: '网站详情',
    tags: ['网站/网站管理'],
  })
  WebsiteManage = dynamic({
    loader: () => import('./pages/WebsiteManage'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.WebsiteGeneral', title: '基础信息', tags: ['网站/网站管理'] })
  WebsiteGeneral = dynamic({
    loader: () => import('./pages/settings/WebsiteGeneral'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.WebsiteNavigation', title: '导航', tags: ['网站/网站管理'] })
  WebsiteNavigation = dynamic({
    loader: () => import('./pages/settings/WebsiteNavigation'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.WebsiteFileManager', title: '文件管理', tags: ['网站/网站管理'] })
  WebsiteFileManager = dynamic({
    loader: () => import('./pages/settings/WebsiteFileManager'),
    loading: LoadingComponent,
  });
  @component({
    name: 'breadcrumb.WebsiteBreadcrumbItem',
    title: '网站面包屑转义',
    tags: ['网站/其他'],
  })
  WebsiteBreadcrumbItem = dynamic({
    loader: () => import('./components/breadcrumb/WebsiteBreadcrumbItem'),
    loading: LoadingComponent,
  });
}

export default new Website();
