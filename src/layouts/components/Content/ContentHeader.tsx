import { useCallback, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import { useReactComponent } from '@asany/sunmao';
import type { MenuDataItem } from '@umijs/route-utils';
import { getMatchMenu } from '@umijs/route-utils';
import classnames from 'classnames';
import { findLast } from 'lodash';
import { useLocation, useModel } from '@umijs/max';

import { ThemeModeSwitcher } from '../theme-mode/ThemeModeSwitcher';

import { useLayoutSelector } from '@/layouts/LayoutContext';
import { Bullet, Button } from '@/metronic';
import Breadcrumb from '@/metronic/Breadcrumb';
import { useSticky } from '@/metronic/hooks';

type ToolbarProps = {
  children?: React.ReactNode;
};

function Toolbar(props: ToolbarProps) {
  const [visible, setVisible] = useState(false);

  const unreadCount = useModel(
    'open-im.auth',
    ({ state }) => state.unReadCount,
  );

  const ChatDrawer = useReactComponent('cn.asany.ui.admin.chat.ChatDrawer');

  const handleChatClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleChatOpen = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <div className="d-flex flex-shrink-0">
      {props.children}
      <div className="d-flex align-items-center ms-3">
        <ThemeModeSwitcher toggleBtnClass="flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px" />
      </div>
      <div className="d-flex align-items-center ms-3">
        <Button
          variant={false}
          color="gray-600"
          className={classnames(
            'w-40px bg-body h-40px pulse btn-active-color-primary',
            {
              'pulse-success': !!unreadCount,
            },
          )}
          icon={
            <>
              <Icon name="Duotune/com012" className="svg-icon-2" />
              {!!unreadCount && (
                <>
                  <span className="pulse-ring" />
                  <Bullet
                    style="dot"
                    color="success"
                    className="h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
                  />
                </>
              )}
            </>
          }
          onClick={handleChatOpen}
        />
      </div>
      <ChatDrawer visible={visible} onClose={handleChatClose} />
    </div>
  );
}

export type ContentHeaderProps = {
  title?: string;
  toolbar?: React.ReactNode;
  children?: React.ReactNode;
  breadcrumb?: React.ReactElement<typeof Breadcrumb>;
};

function ContentHeader(props: ContentHeaderProps) {
  const [ref] = useSticky({
    name: 'header',
    offset: { default: 200, lg: 300 },
  });

  const location = useLocation();

  const allRoutes = useLayoutSelector((_state) => _state.routes);

  const { breadcrumb, title } = useMemo(() => {
    if (props.breadcrumb) {
      return { breadcrumb: props.breadcrumb, title: props.title };
    }
    const _matchRoutes = getMatchMenu(location.pathname, allRoutes, true);

    let last: MenuDataItem | undefined;

    const startIndex = _matchRoutes.findIndex(
      (item) => item.path == last?.path,
    );

    let breadcrumbData: MenuDataItem[] = [];

    breadcrumbData.push(..._matchRoutes);

    if (startIndex != -1) {
      breadcrumbData.push(..._matchRoutes.slice(startIndex + 1));
    }

    if (breadcrumbData.length) {
      last = findLast(breadcrumbData, (item) => !item.hideInBreadcrumb);
    }

    if (!!props.title && !!last) {
      breadcrumbData = breadcrumbData.map((item) =>
        item.key == last!.key ? { ...last, name: props.title } : item,
      );
    }
    const _routes = [
      {
        key: 'root',
        name: '控制台',
        path: '/',
      },
      ...breadcrumbData,
    ];

    return {
      title: last?.name,
      breadcrumb: (
        <Breadcrumb routes={_routes} className="fw-bold fs-base my-1" />
      ),
    };
  }, [props.breadcrumb, props.title, location.pathname, allRoutes]);

  return (
    <div id="kt_header" ref={ref} className="header">
      <div
        className="container-xxl d-flex align-items-center justify-content-between"
        id="kt_header_container"
      >
        <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-2 pb-lg-0">
          {props.children ? (
            props.children
          ) : (
            <>
              <h1 className="text-dark fw-bolder my-0 fs-2">
                {props.title || title}
              </h1>
              {breadcrumb}
            </>
          )}
        </div>
        <div className="d-flex d-lg-none align-items-center ms-n2 me-2">
          <div
            className="btn btn-icon btn-active-icon-primary"
            id="kt_aside_mobile_toggle"
          >
            <Icon name="Duotune/abs015" className="svg-icon-1" />
          </div>
          <a href="/" className="d-flex align-items-center">
            <img
              alt="Logo"
              src="assets/media/logos/demo7.svg"
              className="h-30px"
            />
          </a>
        </div>
        <Toolbar>{props.toolbar}</Toolbar>
      </div>
    </div>
  );
}

export default ContentHeader;
