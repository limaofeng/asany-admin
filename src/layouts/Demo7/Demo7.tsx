import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import { getMatchMenu, transformRoute } from '@umijs/route-utils';
import { InspectParams, Inspector } from 'react-dev-inspector';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { history, useApp, useLocation, useRouteProps } from '@umijs/max';

import { LayoutProvider, useLayoutSelector } from '../LayoutContext';
import { ThemeModeProvider } from '../components/theme-mode/ThemeModeProvider';

import Aside from './components/Aside';
import buildMenuRender from './components/utils';
import getLayoutRenderConfig from './utils';

import * as utils from '@/utils';

import './style.scss';

const isDev = process.env.NODE_ENV === 'development';

type MenuData = any;

interface LayoutProps {
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

type RootLayoutProps = {
  minimize: boolean;
  width: number;
};

const RootLayout = styled.div<RootLayoutProps>`
  --root-aside-width: ${(props: RootLayoutProps) =>
    props.minimize ? '100px' : `${props.width}px`};
  --met-aside-width: ${(props: RootLayoutProps) =>
    props.minimize ? '100px' : `${props.width}px`};
`;

function InternalLayout(props: LayoutProps) {
  const { children, menuRender, activeKey, onSelect } = props;
  const width = useLayoutSelector((state) => state.aside.width);
  const minimize = useLayoutSelector((state) => state.aside.minimize);

  return (
    <RootLayout
      width={width}
      minimize={minimize || menuRender === false}
      data-kt-aside-minimize={minimize || menuRender === false ? 'on' : 'off'}
      className="theme-metronic header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled"
    >
      <div className="d-flex flex-column flex-root">
        <ToastContainer />
        <div className="page d-flex flex-row flex-column-fluid">
          <Aside
            menuRender={menuRender}
            onSelect={onSelect}
            activeKey={activeKey}
          />
          {children}
        </div>
      </div>
    </RootLayout>
  );
}

function LayoutInner(props: LayoutInnerProps) {
  const { children, pure, activeKey, onSelect, menuRender, ...otherProps } =
    props;
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

function LayoutWrapper(props: LayoutProps) {
  const route = useRouteProps();
  const location = useLocation();
  const navigate = useNavigate();

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
      ) as any,
    [sourceMenus],
  );

  const currentPathConfig = useMemo(() => {
    const { menuData } = transformRoute(
      route?.routes || [],
      undefined,
      undefined,
      true,
    );
    // 动态路由匹配
    return getMatchMenu(location.pathname, menuData).pop();
  }, [location?.pathname, route?.routes]);

  const layoutRestProps = useMemo(() => {
    if (!currentPathConfig) {
      return {};
    }
    return getLayoutRenderConfig(currentPathConfig as any);
  }, [currentPathConfig]);

  const handleSelect = useCallback(
    (key: string) => {
      state.current.activeMenuKey = key;
      const menu = menus.find((item) => item.id === key)!;
      if (menu.path) {
        navigate(menu.path);
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
    if (!currentMenu || state.current.activeMenuKey === currentMenu.id) {
      return;
    }
    state.current.activeMenuKey = currentMenu.id;
    forceRender();
  }, [currentMenu]);

  const menuRender = useMemo(() => {
    if (layoutRestProps.menuRender === false) {
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
    <ThemeModeProvider>
      <LayoutProvider
        state={{
          menus,
          routes: route.routes || [],
          aside: {
            menus,
            minimize: false,
            pure: layoutRestProps.pure,
            width: 200,
          },
        }}
      >
        <LayoutInner
          {...props}
          activeKey={state.current.activeMenuKey}
          onSelect={handleSelect}
          menuRender={menuRender}
          pure={layoutRestProps.pure}
        >
          <Outlet />
        </LayoutInner>
        {isDev}
        {isDev && (
          <Inspector
            keys={['control', 'shift', 'command', 'c']}
            // disableLaunchEditor={!isDev}
            // onHoverElement={(inspect: InspectParams) => {
            //   console.debug(inspect);
            //   if (isDev || !inspect.codeInfo?.relativePath) return;
            // }}
            onClickElement={(inspect: InspectParams) => {
              console.debug(inspect);
              //   if (isDev || !inspect.codeInfo?.relativePath) return;
              //   // const { relativePath, lineNumber } = inspect.codeInfo;
              //   // window.open(`${projectRepo}/blob/master/examples/umi3/${relativePath}#L${lineNumber}`);
            }}
          />
        )}
      </LayoutProvider>
    </ThemeModeProvider>
  );
}

export default LayoutWrapper;
