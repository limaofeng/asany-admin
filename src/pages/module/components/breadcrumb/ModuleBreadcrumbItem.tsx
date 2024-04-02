import { useEffect, useMemo } from 'react';

import { useLocation } from 'umi';

import { useModuleLazyQuery } from '../../hooks';

import BreadcrumbItem from '@/metronic/Breadcrumb/BreadcrumbItem';
import type { Module, Route } from '@/types';

type ModuleBreadcrumbItemProps = {
  className: string;
  route: Route;
  params: any;
  isLast: boolean;
  url: string;
};

function ModuleBreadcrumbItem(props: ModuleBreadcrumbItemProps) {
  const { isLast, route, url, params } = props;

  const location = useLocation<{ module: Module; baseUrl: string }>();

  const [loadModule, { data, loading: xloading }] = useModuleLazyQuery({
    variables: { id: params.id },
  });

  const module = useMemo(() => {
    if (location.state?.module?.id == params.id) {
      return location.state?.module;
    }
    return data?.module;
  }, [data?.module, location.state?.module, params.id]);

  const loading = useMemo(() => {
    if (module) {
      return false;
    }
    return xloading;
  }, [module, xloading]);

  useEffect(() => {
    if (!module) {
      loadModule({
        variables: { id: params.id },
      });
    }
  }, [loadModule, module, params.id]);

  return (
    <BreadcrumbItem
      className={props.className}
      href={isLast ? undefined : url}
      key={route.id}
    >
      {loading ? <>加载中...</> : <>{module?.name}</>}
    </BreadcrumbItem>
  );
}

export default ModuleBreadcrumbItem;
