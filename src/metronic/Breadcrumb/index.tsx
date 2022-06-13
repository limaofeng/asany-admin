import type { ReactNode } from 'react';

import type { MenuDataItem } from '@umijs/route-utils';
import classnames from 'classnames';
import { generatePath } from 'react-router';
import type { Route } from 'umi';

import BreadcrumbItem from './BreadcrumbItem';

type BreadcrumbItemRender = (
  route: Route,
  params: any,
  routes: Route[],
  paths: string[],
) => ReactNode;

type BreadcrumbProps = {
  className?: string;
  params?: any;
  type?: 'line' | 'dot' | 'separatorless';
  itemRender?: BreadcrumbItemRender;
  separator?: React.ReactNode;
  routes?: MenuDataItem[];
  children?: React.ReactNode;
};

function Breadcrumb(props: BreadcrumbProps) {
  const { className, routes, children, params } = props;

  return (
    <ol className={classnames('breadcrumb', className)}>
      {!!routes
        ? routes
            .filter((item) => !item.hideInBreadcrumb && !!item.name)
            .map((item, index, array) => {
              const url = !!item.path ? generatePath(item.path, params) : undefined;

              const isLast = array.length == index + 1;

              return (
                <BreadcrumbItem
                  className={classnames({
                    'text-muted': !isLast,
                    'text-dark': isLast,
                  })}
                  href={isLast ? undefined : url}
                  key={item.key}
                >
                  {item.name}
                </BreadcrumbItem>
              );
            })
        : children}
    </ol>
  );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
