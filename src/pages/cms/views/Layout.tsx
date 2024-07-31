import { useMemo } from 'react';
import { Outlet, matchPath, useLocation } from 'react-router-dom';

import { useAppModule } from '@umijs/max';

import { MicroApp } from '@/layouts/Demo7';
import { ArticleCategory } from '@/types';

import { BreadcrumbData } from '../article/ArticleBreadcrumb';
import ArticleSidebar from '../article/ArticleSidebar';
import { useArticleCategoriesQuery, useArticleCategoryQuery } from '../hooks';

function CmsLayout() {
  const location = useLocation();

  const [module] = useAppModule('cms');
  const rootCategorySlug = module?.values.rootCategory;

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
    skip: !rootCategorySlug,
  });

  const menuKey = useMemo(() => {
    const isDrafts = matchPath(
      { path: '/cms/my/drafts', end: false },
      location.pathname,
    );
    if (isDrafts) {
      return {
        key: 'draft',
        params: isDrafts.params,
      };
    }
    const isPublished = matchPath(
      { path: '/cms/my/published', end: false },
      location.pathname,
    );
    if (isPublished) {
      return {
        key: 'published',
        params: isPublished.params,
      };
    }
    const isColumn = matchPath(
      {
        path: '/cms/categories/:cid/articles',
        end: false,
      },
      location.pathname,
    );
    if (isColumn) {
      return {
        key: 'category',
        params: isColumn.params,
      };
    }
    return {
      key: 'unknown',
      params: {},
    };
  }, [location.pathname]);

  const breadcrumbs = useMemo((): BreadcrumbData[] => {
    switch (menuKey.key) {
      case 'draft':
        return [
          {
            title: '我的草稿',
            url: '/cms/my/drafts',
          },
        ];
      case 'published':
        return [
          {
            title: '我的文章',
            url: '/cms/my/published',
          },
        ];
      case 'category':
        return [
          {
            title: '栏目',
          },
        ];
      default:
        return [];
    }
  }, [menuKey]);

  const categories = (data?.categories as ArticleCategory[]) || [];

  return (
    <MicroApp className="micro-app-website">
      <MicroApp.Sidebar>
        <ArticleSidebar
          menuKey={menuKey}
          loading={loading}
          categories={categories}
        />
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
            ...breadcrumbs,
          ],
        }}
      />
    </MicroApp>
  );
}

export default CmsLayout;
