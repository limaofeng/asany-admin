import classnames from 'classnames';
import { Link } from 'umi';

import type { MenuComponent as Menu } from '../Menu';

type BreadcrumbItemProps = {
  className?: string;
  href?: string;
  overlay?: React.ReactElement<Menu>;
  onClick?: (e: MouseEvent) => void;
  children?: React.ReactNode;
};

function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { children, className, href } = props;
  return (
    <li className={classnames('breadcrumb-item', className)}>
      {href ? (
        <Link to={href} className={classnames(className)}>
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
}

export default BreadcrumbItem;
