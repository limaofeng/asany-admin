import { component, library } from '@asany/sunmao';

import LoadingComponent from '@/components/PageLoading';
import dynamic from '@/utils/dynamic';

@library({
  name: 'cms',
  description: '',
  namespace: 'cn.asany.ui.admin.cms',
})
class Cms {
  @component({
    name: 'Layout',
    title: 'CMS 布局',
    tags: ['布局'],
  })
  Layout = dynamic({
    loader: () => import('./views/Layout'),
    loading: LoadingComponent,
  });

  @component({
    name: 'ArticleList',
    title: '文章列表',
    tags: ['内容管理'],
  })
  ArticleList = dynamic({
    loader: () => import('./views/ArticleList'),
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
    loader: () => import('./views/ArticleNew'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleEdit',
    title: '文章修改',
    tags: ['内容管理'],
  })
  ArticleEdit = dynamic({
    loader: () => import('./views/ArticleEdit'),
    loading: LoadingComponent,
  });
  @component({
    name: 'breadcrumb.ArticleCategoryBreadcrumbItem',
    title: '栏目面包屑转义',
    tags: ['内容管理/其他'],
  })
  ArticleCategoryBreadcrumbItem = dynamic({
    loader: () =>
      import('./components/breadcrumb/ArticleCategoryBreadcrumbItem'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleChannelNew',
    title: '栏目新增',
    tags: ['内容管理'],
  })
  ArticleChannelNew = dynamic({
    loader: () => import('./views/ArticleCategoryNew'),
    loading: LoadingComponent,
  });
  @component({
    name: 'ArticleChannelEdit',
    title: '栏目编辑',
    tags: ['内容管理'],
  })
  ArticleChannelEdit = dynamic({
    loader: () => import('./views/ArticleCategoryEdit'),
    loading: LoadingComponent,
  });
  @component({
    title: '草稿箱',
    tags: ['内容管理'],
  })
  MyDrafts = dynamic({
    loader: () => import('./views/MyDrafts'),
    loading: LoadingComponent,
  });
  @component({
    title: '我的发布',
    tags: ['内容管理'],
  })
  MyPublished = dynamic({
    loader: () => import('./views/MyPublished'),
    loading: LoadingComponent,
  });
}

export default new Cms();
