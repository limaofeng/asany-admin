import { useCallback, useEffect } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import { useMenuContext, useSelector } from './MenuContext';

export type MenuItemProps = {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
};

export function MenuSection(props: MenuItemProps) {
  const { title, children } = props;
  return (
    <div className="menu-item">
      <div className="menu-content pb-2">
        <span className="menu-section text-muted text-uppercase fs-8 ls-1">
          {title || children}
        </span>
      </div>
    </div>
  );
}

function MenuItem(props: MenuItemProps) {
  const { icon, children, title } = props;
  const { menuKey, path } = props as any;

  const context = useMenuContext();

  const selected = useSelector((state) => state.selectedKeys.includes(menuKey));

  useEffect(() => {
    context.addMenuData(menuKey, { key: menuKey, icon, title, path });
    return () => {
      context.removeMenuData(menuKey);
    };
  }, [context, menuKey, icon, title, path]);

  const handleClick = useCallback(
    (e) => {
      context.select(menuKey, e);
    },
    [context, menuKey],
  );

  return (
    <div className="menu-item">
      <a onClick={handleClick} className={classnames('menu-link', { active: selected })}>
        {icon ? (
          <span className="menu-icon">
            <Icon className="svg-icon-2" name={icon} />
          </span>
        ) : (
          <span className="menu-bullet">
            <span className="bullet bullet-dot" />
          </span>
        )}
        <span className="menu-title">{children || title}</span>
      </a>
    </div>
  );
}

export default MenuItem;