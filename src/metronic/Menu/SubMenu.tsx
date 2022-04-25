import React, { useCallback, useEffect } from 'react';
import { useRef } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import * as KTUtil from '../utils/KTUtil';
import type { BulletProps } from '../Bullet';
import Bullet from '../Bullet';
import Dropdown from '../Dropdown/Dropdown';

import { useMenuContext, useSelector } from './MenuContext';

const defaultOptions = {
  dropdown: {
    hoverTimeout: 200,
    zindex: 105,
  },

  accordion: {
    slideSpeed: 250,
    expand: false,
  },
};

interface SubMenuProps {
  url?: string;
  icon?: string | React.ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  offset?: [number, number];
  bullet?: boolean | BulletProps;
  children?: React.ReactNode;
}

function hideAccordions(parent: HTMLElement, current: HTMLElement) {
  const itemsToHide = Array.from(KTUtil.findAll(parent, '.show') || []);
  const siblings = itemsToHide.filter((item) => item.parentElement === parent && item !== current);
  return Promise.all(
    siblings.map((node) => {
      const item = node as HTMLElement;
      const sub = item.querySelector('.menu-sub-accordion.show') as HTMLElement;
      return hide(item, sub);
    }),
  );
}

function show(item: HTMLElement, sub: HTMLElement) {
  return new Promise((resolve) => {
    KTUtil.addClass(item, 'hover');
    KTUtil.addClass(item, 'showing');
    KTUtil.slideDown(sub, defaultOptions.accordion.slideSpeed, () => {
      KTUtil.removeClass(item, 'showing');
      KTUtil.addClass(item, 'show');
      KTUtil.addClass(sub, 'show');
      resolve(item.dataset.menuKey);
    });
  });
}

async function hide(item: HTMLElement, sub: HTMLElement) {
  return new Promise((resolve) => {
    KTUtil.addClass(item as any, 'hiding');
    KTUtil.slideUp(sub, defaultOptions.accordion.slideSpeed, () => {
      KTUtil.removeClass(item, 'hiding');
      KTUtil.removeClass(item, 'show');
      KTUtil.removeClass(sub, 'show');
      KTUtil.removeClass(item, 'hover');
      resolve(item.dataset.menuKey);
    });
  });
}

function SubMenu(props: SubMenuProps) {
  const { url, menuKey, path, bullet, className, bodyClassName, titleClassName } = props as any;
  const { icon, title, children, offset } = props;
  const itemRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  const history = useHistory();
  const context = useMenuContext();

  const dropdown = useSelector((state) => state.dropdown);
  const accordion = useSelector((state) => state.accordion);
  const selectable = useSelector((state) => state.selectable === 'AllMenu');
  const selected = useSelector((state) => {
    if (state.selectable === 'AllMenu') {
      return state.selectedKeys.includes(menuKey);
    }
    return false;
  });
  const subSelected = useSelector((state) => {
    if (!state.selectedKeys.length) {
      return false;
    }
    const my = state.menus!.get(menuKey);
    const sle = state.menus!.get(state.selectedKeys[0]);
    return my?.path && sle?.path.startsWith(my?.path);
  });
  const opened = useSelector((state) => state.openKeys.includes(menuKey));

  useEffect(() => {
    context.addMenuData(menuKey, { key: menuKey, icon, title, path });
    return () => {
      context.removeMenuData(menuKey);
    };
  }, [context, menuKey, icon, title, path]);

  const handleSelect = useCallback(
    (e) => {
      menuKey && context.select(menuKey, e);
      url && history.push(url);
    },
    [context, history, menuKey, url],
  );

  const handleClick = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const item = itemRef.current!;
      const sub = subRef.current!;
      if (KTUtil.hasClass(item, 'show')) {
        const key = await hide(item, sub);
        context.dispatch({
          type: 'trigger',
          payload: {
            openKey: undefined,
            closeKeys: [key],
          },
        });
        return;
      }
      const [closeKeys, openKey] = await Promise.all([
        accordion ? hideAccordions(item.parentElement!, item) : Promise.resolve([]),
        show(item, sub),
      ]);
      context.openChange(openKey as string, closeKeys as string[]);
    },
    [context, accordion],
  );

  const menuLink = (
    <span
      ref={linkRef}
      onClick={!dropdown ? (selectable ? handleSelect : handleClick) : undefined}
      className={classnames('menu-link', { active: selected && selectable })}
      data-kt-menu-offset={offset ? offset.join(',') : undefined}
    >
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
      <span className={classnames('menu-title', titleClassName)}>{title}</span>
      <span onClick={!dropdown && selectable ? handleClick : undefined} className="menu-arrow" />
    </span>
  );

  const subMenus = (
    <div
      ref={subRef}
      data-kt-menu="true"
      className={classnames('menu-sub', bodyClassName, {
        show: opened,
        'menu-sub-accordion': !dropdown,
        'menu menu-sub-dropdown': dropdown,
        'menu-active-bg': subSelected,
      })}
    >
      {React.Children.map(children, (item: any) =>
        React.cloneElement(item, {
          menuKey: item.key,
          path: path + item.key + '/',
        }),
      )}
    </div>
  );

  if (dropdown) {
    return (
      <div
        ref={itemRef}
        data-menu-key={menuKey}
        className={classnames(className, 'menu-item menu-accordion', {
          hover: !selectable && opened,
          show: opened,
          here: subSelected,
        })}
      >
        <Dropdown
          overlay={subMenus}
          getPopupContainer={() => {
            return linkRef.current as any;
          }}
          trigger="hover"
          placement="rightStart"
        >
          {menuLink}
        </Dropdown>
      </div>
    );
  }

  return (
    <div
      ref={itemRef}
      data-menu-key={menuKey}
      className={classnames(className, 'menu-item menu-accordion', {
        hover: !selectable && opened,
        show: opened,
        here: subSelected,
      })}
    >
      {menuLink}
      {subMenus}
    </div>
  );
}

export default SubMenu;
