import type { ReactNode } from 'react';

import classnames from 'classnames';
import type { Route } from 'umi';

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
};

function Breadcrumb(props: BreadcrumbProps) {
  const { className } = props;
  return (
    <ol className={classnames('breadcrumb', className)}>
      <li className="breadcrumb-item text-muted">
        <a href="#" className="text-muted">
          Home
        </a>
      </li>
      <li className="breadcrumb-item text-muted">
        <a href="#" className="text-muted">
          Library
        </a>
      </li>
      <li className="breadcrumb-item text-dark">Active</li>
    </ol>
  );
}

export default Breadcrumb;
