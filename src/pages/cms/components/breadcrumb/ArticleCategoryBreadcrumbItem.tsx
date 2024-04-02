import BreadcrumbItem from '@/metronic/Breadcrumb/BreadcrumbItem';
import type { Route } from '@/types';

import { useArticleCategoryQuery } from '../../hooks';

type ArticleCategoryBreadcrumbItemProps = {
  className: string;
  route: Route;
  params: any;
  isLast: boolean;
  url: string;
};

function ArticleCategoryBreadcrumbItem(
  props: ArticleCategoryBreadcrumbItemProps,
) {
  const { isLast, route, url, params } = props;

  const { data, loading } = useArticleCategoryQuery({
    variables: { id: params.cid },
  });

  return (
    <BreadcrumbItem
      className={props.className}
      href={isLast ? undefined : url}
      key={route.id}
    >
      {loading ? <>加载中...</> : <>{data?.category?.name}</>}
    </BreadcrumbItem>
  );
}

export default ArticleCategoryBreadcrumbItem;
