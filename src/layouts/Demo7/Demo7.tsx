import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import { getMatchMenu, transformRoute } from '@umijs/route-utils';
import type { Route } from '@umijs/route-utils/dist/types';
import type { RouteComponentProps } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { useApp } from 'umi';

import { LayoutProvider, useLayoutSelector } from '../LayoutContext';

import Aside from './components/Aside';
import buildMenuRender from './components/utils';
import getLayoutRenderConfig from './utils';

import type { MenuData } from '@/.umi/app/typings';
import * as utils from '@/utils';

import './style.scss';

interface LayoutProps extends RouteComponentProps {
  /**
   * 路由信息
   */
  route: Route;
  /**
   *内容
   */
  children: React.ReactNode;
  /**
   * 激活的菜单Key
   */
  activeKey?: string;
  /**
   * 菜单选择
   */
  onSelect: (key: string) => void;
  /**
   * 展示二级栏目
   */
  menuRender: boolean | React.ReactElement;
}

interface LayoutInnerProps extends LayoutProps {
  pure: boolean;
}

function LayoutInner(props: LayoutInnerProps) {
  const { children, pure, activeKey, onSelect, menuRender, ...otherProps } = props;
  if (pure) {
    return children as any;
  }

  return (
    <InternalLayout
      {...otherProps}
      activeKey={activeKey}
      onSelect={onSelect}
      menuRender={menuRender}
    >
      {children}
    </InternalLayout>
  );
}

type RootLayoutProps = {
  minimize: boolean;
  width: number;
};

const RootLayout = styled.div<RootLayoutProps>`
  --met-aside-width: ${(props) => (props.minimize ? '100px' : `${props.width}px`)};
`;

function InternalLayout(props: LayoutProps) {
  const { children, menuRender, activeKey, onSelect } = props;
  const width = useLayoutSelector((state) => state.aside.width);
  const minimize = useLayoutSelector((state) => state.aside.minimize);

  return (
    <RootLayout
      width={width}
      minimize={minimize || menuRender == false}
      data-kt-aside-minimize={minimize || menuRender == false ? 'on' : 'off'}
      className="theme-metronic header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled"
    >
      <div className="d-flex flex-column flex-root">
        <ToastContainer />
        <div className="page d-flex flex-row flex-column-fluid">
          <Aside menuRender={menuRender} onSelect={onSelect} activeKey={activeKey} />
          {children}
        </div>
      </div>
    </RootLayout>
  );
}

function LayoutWrapper(props: LayoutProps) {
  const { children, location, history } = props;

  const { menus: sourceMenus } = useApp();

  const state = useRef<{ activeMenuKey?: string }>({});
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const menus: MenuData[] = useMemo(
    () =>
      utils.tree(
        sourceMenus.map((item) => ({ ...item, key: item.id, routes: [] })),
        {
          idKey: 'id',
          childrenKey: 'routes',
          pidKey: 'parent.id',
          sort: (l: any, r: any) => l.index - r.index,
        },
      ),
    [sourceMenus],
  );

  const currentPathConfig = useMemo(() => {
    const { menuData } = transformRoute(props?.route?.routes || [], undefined, undefined, true);
    // 动态路由匹配
    return getMatchMenu(location.pathname, menuData).pop();
  }, [location?.pathname, props?.route?.routes]);

  const layoutRestProps = useMemo(() => {
    if (!currentPathConfig) {
      return {};
    }
    return getLayoutRenderConfig(currentPathConfig as any);
  }, [currentPathConfig]);

  const handleSelect = useCallback(
    (key: string) => {
      state.current.activeMenuKey = key;
      const menu = menus.find((item) => item.id == key)!;
      if (menu.path) {
        history.push(menu.path);
      } else {
        forceRender();
      }
    },
    [history, menus],
  );

  const currentMenu = useMemo(() => {
    const matchMenus = getMatchMenu(location.pathname, menus, true);
    // console.log('currentMenu', matchMenus, menus, location.pathname);
    // console.log('>>>>', getMatchMenu('/activities', menus, true));
    return matchMenus[0];
  }, [location.pathname, menus]);

  useEffect(() => {
    if (!currentMenu || state.current.activeMenuKey == currentMenu.id) {
      return;
    }
    state.current.activeMenuKey = currentMenu.id;
    forceRender();
  }, [currentMenu]);

  // console.log('menuRender', currentMenu);

  const menuRender = useMemo(() => {
    if (layoutRestProps.menuRender == false) {
      return false;
    }
    if (!!layoutRestProps.menuRender) {
      return layoutRestProps.menuRender;
    }
    const menu = currentMenu as MenuData;
    if (!menu) {
      return false;
    }
    if (!menu.component && !(menu.routes || []).length) {
      return false;
    }
    return buildMenuRender(menu);
  }, [layoutRestProps.menuRender, currentMenu]);

  return (
    <LayoutProvider
      state={{
        menus,
        routes: props.route.routes || [],
        aside: { menus, minimize: false, pure: layoutRestProps.pure, width: 200 },
      }}
    >
      <LayoutInner
        {...props}
        activeKey={state.current.activeMenuKey}
        onSelect={handleSelect}
        menuRender={menuRender}
        pure={layoutRestProps.pure}
      >
        {children}
      </LayoutInner>
    </LayoutProvider>
  );
}

export default LayoutWrapper;
