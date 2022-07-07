import { useWebsiteQuery } from '../../hooks';

import BreadcrumbItem from '@/metronic/Breadcrumb/BreadcrumbItem';
import type { Route } from '@/types';

type WebsiteBreadcrumbItemProps = {
  className: string;
  route: Route;
  params: any;
  isLast: boolean;
  url: string;
};

function WebsiteBreadcrumbItem(props: WebsiteBreadcrumbItemProps) {
  const { isLast, route, url, params } = props;

  const { data, loading } = useWebsiteQuery({ variables: { id: params.sid } });

  return (
    <BreadcrumbItem className={props.className} href={isLast ? undefined : url} key={route.id}>
      {loading ? <>加载中...</> : <>{data?.website?.name}</>}
    </BreadcrumbItem>
  );
}

export default WebsiteBreadcrumbItem;
