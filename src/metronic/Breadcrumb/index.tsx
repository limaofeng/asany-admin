import type { ReactNode } from 'react';

import type { MenuDataItem } from '@umijs/route-utils';
import classnames from 'classnames';
import { match } from 'path-to-regexp';
import { generatePath } from 'react-router';
import { useReactComponent } from '@asany/sunmao';
import type { Route } from 'umi';

import BreadcrumbItem from './BreadcrumbItem';

import type { Component } from '@/types';

import './style.scss';

type BreadcrumbItemRender = (
  route: Route,
  params: any,
  routes: Route[],
  paths: string[],
) => ReactNode;

type BreadcrumbProps = {
  className?: string;
  type?: 'line' | 'dot' | 'separatorless';
  itemRender?: BreadcrumbItemRender;
  separator?: React.ReactNode;
  routes?: MenuDataItem[];
  children?: React.ReactNode;
};

type CustomBreadcrumbProps = Component & {
  className: string;
};

function CustomBreadcrumb({ template, blocks, ...props }: CustomBreadcrumbProps) {
  const ReactComponent = useReactComponent(template, blocks as any);
  return <ReactComponent {...props} />;
}

function Breadcrumb(props: BreadcrumbProps) {
  const { className, routes, children } = props;

  return (
    <ol className={classnames('breadcrumb', className)}>
      {!!routes
        ? routes
            .filter((item) => !item.hideInBreadcrumb && !!item.name)
            .map((item, index, array) => {
              const urlMatch = match(item.path!, {
                end: false,
                decode: decodeURIComponent,
              });

              const isMatch = urlMatch(location.pathname);

              if (isMatch == false) {
                return null;
              }

              const params = (isMatch as any).params;
              const url = !!item.path ? generatePath(item.path, params) : undefined;
              const isLast = array.length == index + 1;

              if (item.breadcrumb) {
                return (
                  <CustomBreadcrumb
                    className={classnames({
                      'text-muted': !isLast,
                      'text-dark': isLast,
                    })}
                    {...item.breadcrumb}
                    route={item}
                    url={url}
                    isLast={isLast}
                    params={params}
                    key={item.key}
                  />
                );
              }

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
