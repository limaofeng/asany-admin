import { useCallback, useEffect } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';
import { useHistory } from 'react-router';

import type { BulletProps } from '../Bullet';
import { Bullet } from '../Bullet';

import { useMenuContext, useSelector } from './MenuContext';

export type MenuItemProps = {
  url?: string;
  icon?: string;
  title?: string;
  className?: string;
  linkClassName?: string;
  bullet?: boolean | BulletProps;
  children?: React.ReactNode;
};

export function MenuSection(props: MenuItemProps) {
  const { title, children, className } = props;
  const content = title || children;
  return (
    <div className="menu-item">
      <div className={classnames('menu-content pb-2', className)}>
        {typeof content === 'string' ? (
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">{content}</span>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

function MenuItem(props: MenuItemProps) {
  const { url, icon, children, title, bullet, className, linkClassName } = props;
  const { menuKey, path } = props as any;

  const context = useMenuContext();
  const history = useHistory();

  const selected = useSelector((state) => state.selectedKeys.includes(menuKey));

  useEffect(() => {
    context.addMenuData(menuKey, { key: menuKey, icon, title, path });
    return () => {
      context.removeMenuData(menuKey);
    };
  }, [context, menuKey, icon, title, path]);

  const handleClick = useCallback(
    (e) => {
      menuKey && context.select(menuKey, e);
      url && history.push(url);
    },
    [context, menuKey, url, history],
  );

  return (
    <div className={classnames('menu-item', className)}>
      <a
        onClick={handleClick}
        className={classnames('menu-link', linkClassName, { active: selected })}
      >
        {icon ? (
          <span className="menu-icon">
            <Icon className="svg-icon-2" name={icon} />
          </span>
        ) : (
          bullet && (
            <span className="menu-bullet">
              <Bullet {...(typeof bullet !== 'boolean' ? bullet : {})} />
            </span>
          )
        )}
        <span className="menu-title">{children || title}</span>
      </a>
    </div>
  );
}

export default MenuItem;