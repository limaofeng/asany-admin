import React, { useCallback, useEffect } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';
import { useHistory } from 'react-router';
import { Link } from 'umi';

import type { BulletProps } from '../Bullet';
import Bullet from '../Bullet';

import { useMenuContext, useSelector } from './MenuContext';

export type MenuItemProps = {
  url?: string;
  icon?: string | React.ReactNode;
  title?: string | React.ReactNode;
  className?: string;
  as?: string | React.ComponentType<any>;
  titleClassName?: string;
  linkClassName?: string;
  contentClassName?: string;
  bullet?: boolean | BulletProps;
  children?: React.ReactNode;
  badge?: React.ReactNode;
  onClick?: () => void;
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
  const {
    icon,
    badge,
    url,
    as = 'span',
    children,
    title,
    bullet,
    className,
    linkClassName,
    contentClassName,
    titleClassName,
    onClick,
  } = props;
  const { menuKey, path } = props as any;

  const context = useMenuContext();
  const history = useHistory();

  const selected = useSelector((state) => {
    return state.selectedKeys.includes(menuKey);
  });

  useEffect(() => {
    context.addMenuData(menuKey, { key: menuKey, icon, title, path });
    return () => {
      context.removeMenuData(menuKey);
    };
  }, [context, menuKey, icon, title, path]);

  const isLink = as == Link;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      menuKey && context.select(menuKey, e);
      !isLink && url && history.push(url);
      onClick && onClick();
    },
    [menuKey, context, isLink, url, history, onClick],
  );

  const contented = React.Children.toArray(children).some(React.isValidElement);

  return (
    <div className={classnames('menu-item', className)}>
      {contented ? (
        <div className={classnames('menu-content', contentClassName)}>{children}</div>
      ) : (
        React.createElement(
          as,
          {
            to: isLink ? url : undefined,
            onClick: handleClick,
            className: classnames('menu-link', linkClassName, { active: selected }),
          },
          <>
            {icon ? (
              <span className="menu-icon">
                {typeof icon == 'string' ? <Icon className="svg-icon-4" name={icon} /> : icon}
              </span>
            ) : (
              bullet && (
                <span className="menu-bullet">
                  <Bullet {...(typeof bullet !== 'boolean' ? bullet : {})} />
                </span>
              )
            )}
            {icon || badge ? (
              <span className={classnames('menu-title', titleClassName)}>{children || title}</span>
            ) : (
              children || title
            )}
            {badge}
          </>,
        )
      )}
    </div>
  );
}

export default MenuItem;
