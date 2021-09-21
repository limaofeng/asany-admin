import { Icon } from '@asany/icons';
import { useCallback } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from './MenuContext';

export type MenuItemProps = {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
};

export function MenuSection(props: MenuItemProps) {
  const { title } = props;
  return (
    <div className="menu-item">
      <div className="menu-content pb-2">
        <span className="menu-section text-muted text-uppercase fs-8 ls-1">{title}</span>
      </div>
    </div>
  );
}

function MenuItem(props: MenuItemProps) {
  const { icon, children, title } = props;
  const { menuKey } = props as any;
  const dispatch = useDispatch();

  const selected = useSelector((state) => state.selectedKeys.includes(menuKey));

  const handleClick = useCallback(() => {
    dispatch({
      type: 'select',
      payload: menuKey,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
