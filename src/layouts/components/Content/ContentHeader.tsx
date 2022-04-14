import { useMemo } from 'react';

import Icon from '@asany/icons';
import type { MenuDataItem } from '@umijs/route-utils';
import { getMatchMenu } from '@umijs/route-utils';
import { useLocation, useParams } from 'umi';
import { findLast } from 'lodash';

import { Breadcrumb } from '@/pages/Metronic/components';
import { useSticky } from '@/pages/Metronic/hooks';
import { useLayoutSelector } from '@/layouts/LayoutContext';

function Toolbar() {
  return (
    <div className="d-flex flex-shrink-0">
      <div className="d-flex ms-3">
        {/* <a
          href="#"
          className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <Icon name="Duotune/arr075" />
          <span className="d-none d-md-inline">New Member</span>
        </a> */}
      </div>
      <div className="d-flex ms-3">
        {/* <a
          href="#"
          className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          // tooltip="New App"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_app"
          id="kt_toolbar_primary_button"
        >
          <Icon name="Duotune/gen005" />
          <span className="d-none d-md-inline">New App</span>
        </a> */}
      </div>
      <div className="d-flex align-items-center ms-3">
        <div
          className="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"
          id="kt_drawer_chat_toggle"
        >
          <Icon name="Duotune/com012" />
          <span className="pulse-ring" />
        </div>
      </div>
    </div>
  );
}

export type ContentHeaderProps = {
  title?: string;
};

function ContentHeader(props: ContentHeaderProps) {
  const [ref] = useSticky({
    name: 'header',
    offset: { default: 200, lg: 300 },
  });

  const location = useLocation();
  const params = useParams();

  const allMenus = useLayoutSelector((_state) => _state.menus);
  const allRoutes = useLayoutSelector((_state) => _state.routes);

  const { routes, title } = useMemo(() => {
    const _matchMenus = getMatchMenu(location.pathname, allMenus, true);
    const _matchRoutes = getMatchMenu(location.pathname, allRoutes, true);

    let last: MenuDataItem | undefined;

    const startIndex = _matchRoutes.findIndex((item) => item.path == last?.path);

    let breadcrumbData: MenuDataItem[] = [];

    breadcrumbData.push(..._matchMenus);

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

    return { routes: breadcrumbData, title: last?.name };
  }, [location.pathname, allMenus, allRoutes, props.title]);

  return (
    <div id="kt_header" ref={ref} className="header">
      <div
        className="container-xxl d-flex align-items-center justify-content-between"
        id="kt_header_container"
      >
        <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-2 pb-lg-0">
          <h1 className="text-dark fw-bolder my-0 fs-2">{props.title || title}</h1>
          <Breadcrumb params={params} routes={routes} className="fw-bold fs-base my-1" />
        </div>
        {/* --begin::Wrapper-- */}
        <div className="d-flex d-lg-none align-items-center ms-n2 me-2">
          {/* --begin::Aside mobile toggle--*/}
          <div className="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
            <Icon name="Duotune/abs015" />
          </div>
          {/* --end::Aside mobile toggle--*/}
          {/* --begin::Logo--*/}
          <a href="../../demo7/dist/index.html" className="d-flex align-items-center">
            <img alt="Logo" src="/assets/media/logos/logo-demo7.svg" className="h-30px" />
          </a>
          {/* --end::Logo--*/}
        </div>
        {/* --end::Wrapper--*/}
        <Toolbar />
      </div>
    </div>
  );
}

export default ContentHeader;
