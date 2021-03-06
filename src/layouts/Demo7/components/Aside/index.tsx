import React, { useCallback, useMemo, useRef, useState } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';
import { Button, Nav } from 'react-bootstrap';

import { useLayout, useLayoutSelector } from '../../../LayoutContext';

import AsideSecondary from './AsideSecondary';
import Logo from './Logo';
import AsideWorkspace from './Secondary/AsideWorkspace';

import type { MenuData } from '@/.umi/app/typings';
import { Symbol, Tooltip } from '@/metronic';
import Popover from '@/metronic/Popover';
import { useScroll } from '@/metronic/utils';
import UserAccountMenu from '@/pages/user/components/UserAccountMenu';
import { getFileThumbnailUrlById } from '@/utils';
import { useCurrentuser } from '@/utils/hooks';

export interface AsideProps {
  activeKey?: string;
  /**
   * 菜单选择
   */
  onSelect: (key: string) => void;
  logo?: string;
  menuRender?: boolean | React.ReactElement;
}
interface FooterProps {
  activeKey?: string;
  onSelect: (key: string) => void;
  menus: MenuData[];
}

const Footer = React.forwardRef((props: FooterProps, ref: any) => {
  const { menus, activeKey, onSelect } = props;

  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const { data: user } = useCurrentuser();

  const handleCloseUserMenu = useCallback(() => {
    setUserMenuVisible(false);
  }, []);

  const handleClick = (menu: MenuData) => () => {
    onSelect(menu.id);
  };

  return (
    <div ref={ref} className="aside-footer d-flex flex-column align-items-center flex-column-auto">
      {/**
      <div className="d-flex align-items-center mb-2">
        <div
          className="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
          title="Quick links"
        >
          <Icon name="Duotune/gen022" className="svg-icon-2 svg-icon-lg-1" />
        </div>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div
          className="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Activity Logs"
          id="kt_activities_toggle"
        >
          <Icon name="Duotune/gen032" className="svg-icon-2 svg-icon-lg-1" />
        </div>
      </div>
      */}
      {menus.map((item) => (
        <div key={item.id} className="d-flex align-items-center mb-2">
          <Tooltip title={item.name} placement="right">
            <div
              onClick={handleClick(item)}
              className={classnames(
                'btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light',
                { active: activeKey == item.id },
              )}
              title={item.name}
            >
              <Icon name={item.icon} className="svg-icon-2 svg-icon-lg-1" />
            </div>
          </Tooltip>
        </div>
      ))}
      <div className="d-flex align-items-center mb-2">
        <div
          className="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
          title="Notifications"
        >
          <Icon name="Duotune/gen025" className="svg-icon-2 svg-icon-lg-1" />
        </div>
      </div>
      <div className="d-flex align-items-center mb-10">
        <Popover
          placement="top-start"
          zIndex={100}
          visible={userMenuVisible}
          onVisibleChange={setUserMenuVisible}
          overlayClassName="overlay-zero-gap overlay-no-arrow"
          content={<UserAccountMenu close={handleCloseUserMenu} />}
        >
          <Tooltip title="用户资料" placement="right">
            <Symbol.Avatar
              size={40}
              src={getFileThumbnailUrlById(user?.avatar?.id, { size: '300x300' })}
              className="cursor-pointer"
              alt={user?.name}
            />
          </Tooltip>
        </Popover>
      </div>
    </div>
  );
});

const DEFAULT_APP_PATHS = ['/drive', '/calendar', '/contacts', '/mail'];

// TODO: 支持侧边栏拖拽调整宽度
// const MIN_WIDTH = 300;
// const MAX_WIDTH = 500;

function Aside(props: AsideProps) {
  const { logo, menuRender, activeKey, onSelect } = props;

  // const resizeWidth = useRef<{ width: number; resize: 0 }>({ width: 425, resize: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useScroll(scrollRef, wrapperRef, [logoRef, footerRef]);

  const collapsible = useLayoutSelector((state) => state.aside.collapsible);
  // const asideWidth = useLayoutSelector((state) => state.aside.width);
  const minimize = useLayoutSelector((state) => state.aside.minimize);
  const menus = useLayoutSelector((state) => state.aside.menus || []);

  const layout = useLayout();

  // const forceResize = useMemo(
  //   () =>
  //     debounce(() => {
  //       console.log('forceResize', resizeWidth.current);
  //       // layout.aside.width(width + resize);
  //       resizeWidth.current.width += resizeWidth.current.resize;
  //       resizeWidth.current.resize = 0;
  //       forceRender();
  //     }, 10),
  //   [layout.aside],
  // );

  const handleToggle = useCallback(() => {
    layout.aside.minimize(!minimize);
  }, [layout, minimize]);

  const handleSelect = useCallback(
    (eventKey: any) => {
      onSelect(eventKey);
    },
    [onSelect],
  );

  // const handleResize = useCallback(
  //   (x) => {
  //     resizeWidth.current.resize += x;
  //     console.log('handleResize', x, resizeWidth.current);
  //     forceResize();
  //   },
  //   [forceResize],
  // );

  // const handleResizeEnd = useCallback(() => {}, []);

  const bottomMenus = useMemo(
    () =>
      menus
        .filter((item) => DEFAULT_APP_PATHS.includes(item.path!))
        .filter((item) => !item.hideInMenu)
        .sort(
          (l, r) =>
            DEFAULT_APP_PATHS.findIndex((p) => p == l.path!) -
            DEFAULT_APP_PATHS.findIndex((p) => p == r.path!),
        ),
    [menus],
  );

  const topMenus = useMemo(
    () =>
      menus
        .filter((item) => !DEFAULT_APP_PATHS.includes(item.path!))
        .filter((item) => !item.hideInMenu),
    [menus],
  );

  // const width = useMemo(() => {
  //   if (minimize) {
  //     return undefined;
  //   }
  //   resizeWidth.current.width = asideWidth;
  //   return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, asideWidth));
  // }, [minimize, asideWidth]);

  const hideAside = menuRender == false;

  return (
    <div
      className={classnames('aside', {
        'aside-extended': !minimize,
      })}
    >
      <div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
        <Logo ref={logoRef} url="/" logo={logo} />
        <div
          ref={wrapperRef}
          className="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0"
        >
          <div ref={scrollRef} className="hover-scroll-y mb-10">
            <Nav onSelect={handleSelect} activeKey={activeKey} className="flex-column" as="ul">
              {topMenus.map((item) => (
                <Nav.Item key={item.id} className="mb-2" as="li">
                  <Tooltip title={item.name} placement="right">
                    <Nav.Link
                      eventKey={item.id}
                      className="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                    >
                      {item.icon && <Icon name={item.icon} className="svg-icon-2x" />}
                    </Nav.Link>
                  </Tooltip>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </div>
        <Footer ref={footerRef} menus={bottomMenus} onSelect={handleSelect} activeKey={activeKey} />
      </div>
      {!hideAside && <AsideSecondary>{menuRender}</AsideSecondary>}
      {!hideAside && collapsible && (
        <Button
          style={{ marginBottom: '1.35rem', zIndex: 10 }}
          onClick={handleToggle}
          className={classnames(
            'btn-icon bg-body btn-color-gray-700 rounded-2 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex',
            { active: minimize },
          )}
        >
          <Icon name="Duotune/arr063" className="svg-icon-2 rotate-180" />
        </Button>
      )}
    </div>
  );
}

Aside.Workspace = AsideWorkspace;

/* function renderMenu(menu?: MenuData) {
  if (!menu) {
    return <></>;
  }
  if (menu.component) {
    return <CustomTabContent menu={menu} component={menu.component} />;
  }
  return <Navigation title={menu.name} menus={menu.children!} />;
}
 */
export default Aside;
