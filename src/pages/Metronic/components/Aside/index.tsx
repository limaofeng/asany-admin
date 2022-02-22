import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import { Button, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Icon from '@asany/icons';

import { useScroll } from '../utils';
import { useLayout, useLayoutSelector } from '../Layout/LayoutContext';

import Logo from './Logo';
import AsideSecondary from './AsideSecondary';
import AsideWorkspace from './Secondary/AsideWorkspace';

import type { MenuData } from '@/.umi/app/typings';

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
        <OverlayTrigger
          key={item.id}
          placement="right"
          overlay={<Tooltip id={`tooltip-${item.id}`}>{item.name}</Tooltip>}
        >
          <div className="d-flex align-items-center mb-2">
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
          </div>
        </OverlayTrigger>
      ))}
      <div className="d-flex align-items-center mb-2">
        <div
          className="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
          title="Notifications"
        >
          <Icon name="Duotune/gen025" className="svg-icon-2 svg-icon-lg-1" />
        </div>
      </div>
      <div className="d-flex align-items-center mb-10" id="kt_header_user_menu_toggle">
        <div className="cursor-pointer symbol symbol-40px" title="User profile">
          <img src="/assets/media/avatars/150-26.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
});

const DEFAULT_APP_PATHS = ['/storage', '/calendar', '/email'];

const MIN_WIDTH = 300;
const MAX_WIDTH = 500;

function Aside(props: AsideProps) {
  const { logo, menuRender, activeKey, onSelect } = props;

  const resizeWidth = useRef<{ width: number; resize: 0 }>({ width: 425, resize: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [, forceRender] = useReducer((s) => s + 1, 0);

  useScroll(scrollRef, wrapperRef, [logoRef, footerRef]);

  const collapsible = useLayoutSelector((state) => state.aside.collapsible);
  const asideWidth = useLayoutSelector((state) => state.aside.width);
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
    () => menus.filter((item) => DEFAULT_APP_PATHS.includes(item.path!)),
    [menus],
  );

  const topMenus = useMemo(
    () => menus.filter((item) => !DEFAULT_APP_PATHS.includes(item.path!)),
    [menus],
  );

  useEffect(() => {
    resizeWidth.current.width = asideWidth;
    forceRender();
  }, [asideWidth]);

  const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, resizeWidth.current.width));

  const hideAside = menuRender == false;

  return (
    <div
      className={classnames('aside', {
        'aside-extended': !minimize,
      })}
      style={{ width: !hideAside ? width : undefined }}
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
                <OverlayTrigger
                  key={item.id}
                  placement="right"
                  overlay={<Tooltip id={`tooltip-${item.id}`}>{item.name}</Tooltip>}
                >
                  <Nav.Item className="mb-2" as="li">
                    <Nav.Link
                      eventKey={item.id}
                      className="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                    >
                      {item.icon && <Icon name={item.icon} className="svg-icon-2x" />}
                    </Nav.Link>
                  </Nav.Item>
                </OverlayTrigger>
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
          size="sm"
          onClick={handleToggle}
          className={classnames(
            'btn-icon bg-body btn-color-gray-700 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex',
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
