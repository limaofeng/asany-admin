import Icon from '@asany/icons';
import classnames from 'classnames';
import React, { useCallback, useEffect } from 'react';
import { useRef } from 'react';
import * as KTUtil from '../../../utils/KTUtil';
import { useDispatch, useSelector } from './MenuContext';

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
  icon?: string;
  title: string;
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
  const { menuKey } = props as any;
  const { icon, title, children } = props;
  const itemRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const accordion = useSelector((state) => state.accordion);
  const selectable = useSelector((state) => state.selectable === 'MenuItemOrSubMenu');
  const selected = useSelector((state) => {
    if (state.selectable === 'MenuItemOrSubMenu') {
      return state.selectedKeys.includes(menuKey);
    }
    return false;
  });
  const subSelected = useSelector((state) => {
    const my = state.menus!.get(menuKey);
    if (!state.selectedKeys.length) {
      return false;
    }
    const sle = state.menus!.get(state.selectedKeys[0]);
    return sle?.path.startsWith(my!.path);
  });
  const opened = useSelector((state) => state.openKeys.includes(menuKey));

  useEffect(() => {
    dispatch({
      type: 'binding',
      payload: {
        key: menuKey,
        children: React.Children.map(children, (item) => (item as any).key),
      },
    });
    return () => {
      dispatch({ type: 'reset' });
    };
  }, [children, dispatch, menuKey]);

  const handleClick = useCallback(async () => {
    const item = itemRef.current!;
    const sub = subRef.current!;
    if (KTUtil.hasClass(item, 'show')) {
      const key = await hide(item, sub);
      dispatch({
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
    dispatch({
      type: 'trigger',
      payload: {
        openKey,
        closeKeys,
      },
    });
  }, [dispatch, accordion]);

  return (
    <div
      ref={itemRef}
      data-menu-key={menuKey}
      className={classnames('menu-item menu-accordion', {
        hover: opened,
        showing: opened,
        show: opened,
        here: subSelected,
      })}
    >
      <span
        onClick={handleClick}
        className={classnames('menu-link', { active: selected && selectable })}
      >
        {icon ? (
          <span className="menu-icon">
            <Icon className="svg-icon-2" name={icon} />
          </span>
        ) : (
          <span className="menu-bullet">
            <span className="bullet bullet-dot" />
          </span>
        )}
        <span className="menu-title">{title}</span>
        <span className="menu-arrow" />
      </span>
      <div
        ref={subRef}
        className={classnames('menu-sub menu-sub-accordion', {
          show: opened,
          'menu-active-bg': subSelected,
        })}
      >
        {React.Children.map(children, (item) =>
          React.cloneElement(item as any, {
            menuKey: (item as any).key,
          }),
        )}
      </div>
    </div>
  );
}

export default SubMenu;
