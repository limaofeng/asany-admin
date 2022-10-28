import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'module',
  description: '',
  namespace: 'cn.asany.ui.admin.module',
})
class Module {
  @component({ name: 'ModuleList', title: '模块列表', tags: ['自定义模块'] })
  ModuleList = dynamic({
    loader: () => import('./views/ModuleList'),
    loading: LoadingComponent,
  });
  @component({ name: 'ModuleView', title: '模块详情', tags: ['自定义模块'] })
  ModuleView = dynamic({
    loader: () => import('./views/ModuleView'),
    loading: LoadingComponent,
  });
  @component({
    name: 'breadcrumb.ModuleBreadcrumbItem',
    title: '模块面包屑转义',
    tags: ['自定义模块/其他'],
  })
  ModuleBreadcrumbItem = dynamic({
    loader: () => import('./components/breadcrumb/ModuleBreadcrumbItem'),
    loading: LoadingComponent,
  });
  @component({
    name: 'breadcrumb.ModelBreadcrumbItem',
    title: '实体面包屑转义',
    tags: ['自定义模块/其他'],
  })
  ModelBreadcrumbItem = dynamic({
    loader: () => import('./components/breadcrumb/ModelBreadcrumbItem'),
    loading: LoadingComponent,
  });
  @component({ name: 'details.ModuleSchema', title: '架构', tags: ['自定义模块/详情'] })
  ModuleSchema = dynamic({
    loader: () => import('./views/details/Schema/Layout'),
    loading: LoadingComponent,
  });
  @component({
    name: 'details.ModuleSchemaModelOverview',
    title: '模型总览',
    tags: ['自定义模块/详情/架构'],
  })
  ModuleSchemaModelOverview = dynamic({
    loader: () => import('./views/details/Schema/ModelOverview'),
    loading: LoadingComponent,
  });
  @component({
    name: 'details.ModuleSchemaModel',
    title: '模型详情',
    tags: ['自定义模块/详情/架构'],
  })
  ModuleSchemaModel = dynamic({
    loader: () => import('./views/details/Schema/ModelView'),
    loading: LoadingComponent,
  });
  @component({ name: 'details.ModuleContent', title: '内容', tags: ['自定义模块/详情'] })
  ModuleContent = dynamic({
    loader: () => import('./views/details/Content/Layout'),
    loading: LoadingComponent,
  });
  @component({
    name: 'details.ModuleContentView',
    title: '视图',
    tags: ['自定义模块/详情/内容'],
  })
  ModuleContentView = dynamic({
    loader: () => import('./views/details/Content/View'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.ModuleSettings', title: '布局', tags: ['自定义模块/设置'] })
  ModuleSettings = dynamic({
    loader: () => import('./views/details/settings/Layout'),
    loading: LoadingComponent,
  });
  @component({ name: 'settings.ModuleInformation', title: '详情', tags: ['自定义模块/设置'] })
  ModuleInformation = dynamic({
    loader: () => import('./views/details/settings/Information'),
    loading: LoadingComponent,
  });
  @component({
    name: 'templates.DefaultListView',
    title: '默认列表模版',
    tags: ['自定义模块/显示模版'],
  })
  DefaultListView = dynamic({
    loader: () => import('./views/details/Content/templates/DefaultListView'),
    loading: LoadingComponent,
  });
}

export default new Module();
