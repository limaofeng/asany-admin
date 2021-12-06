import React, { useCallback, useMemo, useRef, useState } from 'react';

import classnames from 'classnames';
import { Button, Nav, OverlayTrigger, Tab, Tooltip } from 'react-bootstrap';
import Icon from '@asany/icons';
import { useHistory, useLocation } from 'react-router';

import { useScroll } from '../utils';
import { useLayout, useLayoutSelector } from '../Layout/LayoutContext';

import Logo from './Logo';
import AsideSecondary from './AsideSecondary';

export interface AsideProps {
  logo?: string;
  menuRender?: boolean;
}

const Footer = React.forwardRef((_: any, ref: any) => {
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

function Aside(props: AsideProps) {
  const { logo, menuRender } = props;

  const history = useHistory();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useScroll(scrollRef, wrapperRef, [logoRef, footerRef]);

  const menus = useLayoutSelector((state) => state.aside.menus || []);
  const minimize = useLayoutSelector((state) => state.aside.minimize);

  const layout = useLayout();
  const location = useLocation();

  const handleToggle = useCallback(() => {
    layout.aside.minimize(!minimize);
  }, [layout, minimize]);

  const currentMenu = useMemo(() => {
    return menus.find(({ path }) => {
      return path && (path || '').split(',').some((rule) => location.pathname.startsWith(rule));
    });
  }, [location.pathname, menus]);

  const [activeKey, setActiveKey] = useState<string | undefined>(currentMenu?.id);

  const handleSelect = useCallback(
    (eventKey: any) => {
      setActiveKey(eventKey);
      const menu = menus.find((item) => item.id == eventKey);
      if (menu && menu.path) {
        history.push(menu.path);
      }
    },
    [history, menus],
  );

  return (
    <div className="aside aside-extended">
      <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={handleSelect}>
        <div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
          <Logo ref={logoRef} url="/" logo={logo} />
          <div
            ref={wrapperRef}
            className="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0"
          >
            <div ref={scrollRef} className="hover-scroll-y mb-10">
              <Nav className="flex-column" as="ul">
                {menus.map((item) => (
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
          <Footer ref={footerRef} />
        </div>
        {menuRender != false && <AsideSecondary menus={menus} />}
      </Tab.Container>
      {menuRender != false && (
        <Button
          style={{ marginBottom: '1.35rem' }}
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

export default Aside;
