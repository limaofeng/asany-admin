import { useEffect } from 'react';

import { Link } from '@umijs/max';
import classnames from 'classnames';

import type { MenuComponent as Menu } from '../Menu';

type BreadcrumbItemProps = {
  className?: string;
  href?: string;
  overlay?: React.ReactElement<Menu>;
  onClick?: (e: MouseEvent) => void;
  children?: React.ReactNode;
};

function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { children, className, href, overlay } = props;

  useEffect(() => {
    if (overlay) {
      console.warn('overlay 还未实现');
    }
  }, [overlay]);

  return (
    <li className={classnames('breadcrumb-item', className)}>
      {href ? (
        <Link to={href} className={classnames(className)}>
          {children}
        </Link>
      ) : (props as any).isLast ? (
        children
      ) : (
        <a className="">{children}</a>
      )}
    </li>
  );
}

export default BreadcrumbItem;
