import { useAppQuery } from '../../hooks';

import BreadcrumbItem from '@/metronic/Breadcrumb/BreadcrumbItem';
import type { Route } from '@/types';

type AppBreadcrumbItemProps = {
  className: string;
  route: Route;
  params: any;
  isLast: boolean;
  url: string;
};

function AppBreadcrumbItem(props: AppBreadcrumbItemProps) {
  const { isLast, route, url, params } = props;

  const { data, loading } = useAppQuery({ variables: { id: params.id } });

  return (
    <BreadcrumbItem className={props.className} href={isLast ? undefined : url} key={route.id}>
      {loading ? <>加载中...</> : <>{data?.app?.title}</>}
    </BreadcrumbItem>
  );
}

export default AppBreadcrumbItem;
