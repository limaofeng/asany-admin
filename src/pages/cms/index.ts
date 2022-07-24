import { component, library } from '@asany/sunmao';
import { dynamic } from 'umi';

import LoadingComponent from '@/components/PageLoading';

@library({
  name: 'cms',
  description: '',
  namespace: 'cn.asany.ui.admin.cms',
})
class Cms {
  @component({
    name: 'ArticleList',
    title: '文章列表',
    tags: ['内容管理'],
  })
  ArticleList = dynamic({
    loader: () => import('./pages/ArticleList'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleView',
    title: '文章详情',
    tags: ['内容管理'],
  })
  ArticleView = dynamic({
    loader: () => import('./article/ArticleView'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleSidebar',
    title: '内容管理侧边栏',
    tags: ['内容管理'],
  })
  ArticleSidebar = dynamic({
    loader: () => import('./article/ArticleSidebar'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleChannel',
    title: '栏目页',
    tags: ['内容管理'],
  })
  ArticleChannel = dynamic({
    loader: () => import('./article/ArticleChannel'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleNew',
    title: '文章新增',
    tags: ['内容管理'],
  })
  ArticleNew = dynamic({
    loader: () => import('./pages/ArticleNew'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleEdit',
    title: '文章修改',
    tags: ['内容管理'],
  })
  ArticleEdit = dynamic({
    loader: () => import('./pages/ArticleEdit'),
    loading: LoadingComponent,
  });
  @component({
    name: 'breadcrumb.ArticleCategoryBreadcrumbItem',
    title: '栏目面包屑转义',
    tags: ['内容管理/其他'],
  })
  ArticleCategoryBreadcrumbItem = dynamic({
    loader: () => import('./components/breadcrumb/ArticleCategoryBreadcrumbItem'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleChannelNew',
    title: '栏目新增',
    tags: ['内容管理'],
  })
  ArticleChannelNew = dynamic({
    loader: () => import('./pages/ArticleCategoryNew'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleChannelEdit',
    title: '栏目编辑',
    tags: ['内容管理'],
  })
  ArticleChannelEdit = dynamic({
    loader: () => import('./pages/ArticleCategoryEdit'),
    loading: LoadingComponent,
  });
  @component({
    title: '草稿箱',
    tags: ['内容管理'],
  })
  MyDrafts = dynamic({
    loader: () => import('./pages/MyDrafts'),
    loading: LoadingComponent,
  });
  @component({
    title: '我的发布',
    tags: ['内容管理'],
  })
  MyPublished = dynamic({
    loader: () => import('./pages/MyPublished'),
    loading: LoadingComponent,
  });
}

export default new Cms();
