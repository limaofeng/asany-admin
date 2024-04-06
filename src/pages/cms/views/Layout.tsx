import { Outlet } from 'react-router-dom';

import { useApp } from '@umijs/max';

import { MicroApp } from '@/layouts/Demo7';
import { ArticleCategory } from '@/types';

import ArticleSidebar from '../article/ArticleSidebar';
import { useArticleCategoriesQuery, useArticleCategoryQuery } from '../hooks';

function CmsLayout() {
  const app = useApp();

  const module = app.modules.find((module) => module.key === 'cms');

  const rootCategorySlug = module?.configuration.rootCategory;

  const { data: { category: rootCategory } = {} } = useArticleCategoryQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: rootCategorySlug,
    },
  });

  const { data = { categories: [] }, loading } = useArticleCategoriesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: rootCategorySlug,
    },
  });

  const categories = (data?.categories as ArticleCategory[]) || [];

  return (
    <MicroApp className="micro-app-website">
      <MicroApp.Sidebar>
        <ArticleSidebar loading={loading} categories={categories} />
      </MicroApp.Sidebar>
      <Outlet
        context={{
          rootCategoryId: rootCategory?.id,
          categories,
          baseUrl: '/cms',
          breadcrumbs: [
            {
              title: '内容管理',
              url: '/cms',
            },
          ],
        }}
      />
    </MicroApp>
  );
}

export default CmsLayout;
