import { useModelQuery } from '../../hooks';

import BreadcrumbItem from '@/metronic/Breadcrumb/BreadcrumbItem';
import type { Route } from '@/types';

type ModuleBreadcrumbItemProps = {
  className: string;
  route: Route;
  params: any;
  isLast: boolean;
  url: string;
};

function ModuleBreadcrumbItem(props: ModuleBreadcrumbItemProps) {
  const { isLast, route, url, params } = props;

  const { data, loading } = useModelQuery({
    variables: { id: params.mid },
  });

  const model = data?.model;

  return (
    <BreadcrumbItem
      className={props.className}
      href={isLast ? undefined : url}
      key={route.id}
    >
      {loading ? <>加载中...</> : <>{model?.name}</>}
    </BreadcrumbItem>
  );
}

export default ModuleBreadcrumbItem;
