import React, { useMemo } from 'react';

import { useApp } from 'umi';
import { getMatchMenu, transformRoute } from '@umijs/route-utils';
import type { RouteComponentProps } from 'react-router';
import type { Route } from '@umijs/route-utils/dist/types';

import Aside from '../Aside';

import { LayoutProvider, useLayoutSelector } from './LayoutContext';
import getLayoutRenderConfig from './utils';

import * as utils from '@/utils';

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
   * 展示二级栏目
   */
  menuRender: boolean;
}

function InternalLayout(props: LayoutProps) {
  const { children, menuRender } = props;
  const minimize = useLayoutSelector((state) => state.aside.minimize);

  return (
    <div
      data-kt-aside-minimize={minimize || menuRender == false ? 'on' : 'off'}
      className="theme-metronic header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled"
    >
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <Aside menuRender={menuRender} />
          {children}
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper(props: LayoutProps) {
  const { children, location } = props;

  const { menus: sourceMenus } = useApp();

  const menus = useMemo(
    () =>
      utils.tree(
        sourceMenus.map((item) => ({ ...item, children: [] })),
        {
          idKey: 'id',
          childrenKey: 'children',
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

  return (
    <LayoutProvider state={{ aside: { menus, minimize: false } }}>
      {layoutRestProps.pure ? (
        children
      ) : (
        <InternalLayout {...props} menuRender={layoutRestProps.menuRender}>
          {children}
        </InternalLayout>
      )}
    </LayoutProvider>
  );
}

export default LayoutWrapper;
