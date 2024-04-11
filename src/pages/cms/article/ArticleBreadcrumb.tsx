import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Breadcrumb } from '@/metronic';
import { ArticleCategory } from '@/types';

import { ArticleOutletContextParams } from '../typings';

export type BreadcrumbData = {
  key?: string;
  title: string;
  url?: string;
};

type ArticleBreadcrumbProps = {
  categoryId?: string;
  append?: React.ReactNode;
};

function ArticleBreadcrumb(props: ArticleBreadcrumbProps) {
  const { categoryId, append } = props;

  const {
    rootCategoryId,
    categories,
    baseUrl,
    breadcrumbs: prefix,
  } = useOutletContext<ArticleOutletContextParams>();

  const breadcrumbCategories: ArticleCategory[] = useMemo(() => {
    const category = categories.find((item) => item.id === categoryId);
    return (category?.path?.split('/') || [])
      .map((_categoryId) => categories.find((item) => item.id === _categoryId)!)
      .filter((item) => item);
  }, [categories, categoryId]);

  return (
    <Breadcrumb className="fw-bold fs-base text-muted my-1">
      {prefix.map((item) => (
        <Breadcrumb.Item href={item.url} key={item.title}>
          {item.title}
        </Breadcrumb.Item>
      ))}
      {breadcrumbCategories ? (
        <>
          {breadcrumbCategories
            .filter((item) => item.id !== rootCategoryId)
            .map((item) => (
              <Breadcrumb.Item
                href={`${baseUrl}/categories/${item.id}/articles`}
                key={item.id}
              >
                {item.name}
              </Breadcrumb.Item>
            ))}
        </>
      ) : (
        <Breadcrumb.Item>加载中...</Breadcrumb.Item>
      )}
      {append}
    </Breadcrumb>
  );
}

export default ArticleBreadcrumb;
