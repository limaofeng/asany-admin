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
}

export default new Module();
