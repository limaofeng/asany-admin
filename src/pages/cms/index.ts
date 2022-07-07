import { component, library } from 'sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'cms',
  description: '',
  namespace: 'cn.asany.ui.admin.cms',
})
class Cms {
  @component({ name: 'ArticleList' })
  ArticleList = dynamic({
    loader: () => import('./pages/ArticleList'),
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleView' })
  ArticleView = dynamic({
    loader: () => import('./article/ArticleView'),
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleSidebar' })
  ArticleSidebar = dynamic({
    loader: () => import('./article/ArticleSidebar'),
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleChannel' })
  ArticleChannel = dynamic({
    loader: () => import('./article/ArticleChannel'),
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleNew' })
  ArticleNew = dynamic({
    loader: () => import('./pages/ArticleNew'),
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleEdit' })
  ArticleEdit = dynamic({
    loader: () => import('./pages/ArticleEdit'),
    loading: LoadingComponent,
  });
  @component({ name: 'breadcrumb.ArticleCategoryBreadcrumbItem' })
  ArticleCategoryBreadcrumbItem = dynamic({
    loader: () => import('./components/breadcrumb/ArticleCategoryBreadcrumbItem'),
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleChannelNew' })
  ArticleChannelNew = dynamic({
    loader: () => import('./pages/ArticleCategoryNew'),
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleChannelEdit' })
  ArticleChannelEdit = dynamic({
    loader: () => import('./pages/ArticleCategoryEdit'),
    loading: LoadingComponent,
  });
  @component({})
  MyDrafts = dynamic({
    loader: () => import('./pages/MyDrafts'),
    loading: LoadingComponent,
  });
  @component({})
  MyPublished = dynamic({
    loader: () => import('./pages/MyPublished'),
    loading: LoadingComponent,
  });
}

export default new Cms();
