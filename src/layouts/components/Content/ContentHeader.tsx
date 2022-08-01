import { useMemo } from 'react';

import Icon from '@asany/icons';
import type { MenuDataItem } from '@umijs/route-utils';
import { getMatchMenu } from '@umijs/route-utils';
import { findLast } from 'lodash';
import { useLocation } from 'umi';

import { ThemeModeSwitcher } from '../theme-mode/ThemeModeSwitcher';

import { useLayoutSelector } from '@/layouts/LayoutContext';
import Breadcrumb from '@/metronic/Breadcrumb';
import { useSticky } from '@/metronic/hooks';

function Toolbar() {
  return (
    <div className="d-flex flex-shrink-0">
      {/*--begin::Invite user--*/}
      <div className="d-flex ms-3">
        <a
          href="#"
          className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <Icon name="Duotune/arr075" className="svg-icon-2 svg-icon-primary me-0 me-md-2" />
          <span className="d-none d-md-inline">New Member</span>
        </a>
      </div>
      {/*--end::Invite user--*/}
      {/*--begin::Create app--*/}
      <div className="d-flex ms-3">
        <a
          href="#"
          className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_app"
          id="kt_toolbar_primary_button"
        >
          <Icon name="Duotune/gen005" className="svg-icon-2 svg-icon-primary me-0 me-md-2" />
          <span className="d-none d-md-inline">New App</span>
        </a>
      </div>
      {/*--end::Create app--*/}
      {/*--begin::Theme mode--*/}
      <div className="d-flex align-items-center ms-3">
        <ThemeModeSwitcher toggleBtnClass="flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px" />
      </div>
      {/*--end::Theme mode--*/}
      {/*--begin::Chat--*/}
      <div className="d-flex align-items-center ms-3">
        {/*--begin::Menu wrapper--*/}
        <div
          className="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"
          id="kt_drawer_chat_toggle"
        >
          {/*--begin::Svg Icon | path: icons/duotune/communication/com012.svg--*/}
          <span className="svg-icon svg-icon-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                fill="currentColor"
              />
              <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
              <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
            </svg>
          </span>
          {/*--end::Svg Icon--*/}
          <span className="pulse-ring" />
        </div>
        {/*--end::Menu wrapper--*/}
      </div>
      {/*--end::Chat--*/}
    </div>
  );
}

export type ContentHeaderProps = {
  title?: string;
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

    const startIndex = _matchRoutes.findIndex((item) => item.path == last?.path);

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
      breadcrumb: <Breadcrumb routes={_routes} className="fw-bold fs-base my-1" />,
    };
  }, [props.breadcrumb, props.title, location.pathname, allRoutes]);

  return (
    <div id="kt_header" ref={ref} className="header">
      <div
        className="container-xxl d-flex align-items-center justify-content-between"
        id="kt_header_container"
      >
        <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-2 pb-lg-0">
          <h1 className="text-dark fw-bolder my-0 fs-2">{props.title || title}</h1>
          {breadcrumb}
        </div>
        <div className="d-flex d-lg-none align-items-center ms-n2 me-2">
          <div className="btn btn-icon btn-active-icon-primary" id="kt_aside_mobile_toggle">
            <Icon name="Duotune/abs015" className="svg-icon-1" />
          </div>
          <a href="/" className="d-flex align-items-center">
            <img alt="Logo" src="assets/media/logos/demo7.svg" className="h-30px" />
          </a>
        </div>
        <Toolbar />
      </div>
    </div>
  );
}

export default ContentHeader;
