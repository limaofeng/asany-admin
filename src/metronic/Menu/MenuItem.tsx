import React, { useCallback, useEffect } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
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

export type MenuSectionProps = MenuContentProps & {
  sectionClassName?: string;
};

export function MenuSection(props: MenuSectionProps) {
  const { children, className, sectionClassName, contentClassName } = props;
  const content = children;
  return (
    <div className={classnames('menu-item', className)}>
      <div className={classnames('menu-content', contentClassName)}>
        <span
          className={classnames(
            'menu-section text-muted text-uppercase fs-8 ls-1',
            sectionClassName,
          )}
        >
          {content}
        </span>
      </div>
    </div>
  );
}

type MenuContentProps = {
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
};

export function MenuContent(props: MenuContentProps) {
  const { children, className, contentClassName } = props;
  const content = children;
  return (
    <div className={classnames('menu-item', className)}>
      <div className={classnames('menu-content', contentClassName)}>
        {content}
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
    titleClassName,
    onClick,
  } = props;
  const { menuKey, path } = props as any;

  const context = useMenuContext();
  const navigate = useNavigate();

  const selected = useSelector((state) => {
    return state.selectedKeys.includes(menuKey);
  });

  useEffect(() => {
    context.addMenuData(menuKey, { key: menuKey, icon, title, path });
    return () => {
      context.removeMenuData(menuKey);
    };
  }, [context, menuKey, icon, title, path]);

  const isLink = as === Link;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      menuKey && context.select(menuKey, e);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !isLink && url && navigate(url);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onClick && onClick();
    },
    [menuKey, context, isLink, url, history, onClick],
  );

  return (
    <div className={classnames('menu-item', className)}>
      {React.createElement(
        as,
        {
          to: isLink ? url : undefined,
          onClick: handleClick,
          className: classnames('menu-link', linkClassName, {
            active: selected,
          }),
        },
        <>
          {icon ? (
            <span className="menu-icon">
              {typeof icon === 'string' ? (
                <Icon className="svg-icon-4" name={icon} />
              ) : (
                icon
              )}
            </span>
          ) : (
            bullet && (
              <span className="menu-bullet">
                <Bullet {...(typeof bullet !== 'boolean' ? bullet : {})} />
              </span>
            )
          )}
          {icon || badge ? (
            <span className={classnames('menu-title', titleClassName)}>
              {children || title}
            </span>
          ) : (
            children || title
          )}
          {badge}
        </>,
      )}
    </div>
  );
}

export default MenuItem;
