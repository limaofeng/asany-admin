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
    loader: () => import('./components/ArticleList'),
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
    loader: async () => (await import('./article/ArticleEditor')).ArticleNew,
    loading: LoadingComponent,
  });
  @component({ name: 'ArticleEdit' })
  ArticleEdit = dynamic({
    loader: async () => (await import('./article/ArticleEditor')).ArticleEdit,
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
