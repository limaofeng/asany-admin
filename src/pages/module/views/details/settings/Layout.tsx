import { useCallback, useMemo, useState } from 'react';
import {
  Outlet,
  matchPath,
  useLocation,
  useOutletContext,
} from 'react-router-dom';

import { Link } from '@umijs/max';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import styled from 'styled-components';

import SecondarySidebar from '@/components/SecondarySidebar';
import { Menu } from '@/metronic';
import { ModuleViewOutletProps } from '@/pages/module/type';

type SecondaryLayoutProps = {
  width: number;
};

const SecondaryLayout = styled.div<SecondaryLayoutProps>`
  --met-aside-width: ${(props) =>
    `calc(var(--root-aside-width) + ${props.width}px)`};
`;

function ModuleSchema() {
  const location = useLocation();

  const { module, baseUrl } = useOutletContext<ModuleViewOutletProps>();

  const menuKey = useMemo(() => {
    const match = matchPath(
      {
        path: `${baseUrl}/settings/:mid`,
        end: false,
      },
      location.pathname,
    );
    if (match) {
      return match.params.mid;
    }
    return '';
  }, [baseUrl, location.pathname]);

  const [width, setWidth] = useState(260);

  const clientWidth = document.body.clientWidth;

  const maxWidth = useMemo(
    () => ((clientWidth - 100 - 216) / 5) * 2,
    [clientWidth],
  );

  const handleWidthChange = useCallback((w: number) => {
    setWidth(w);
  }, []);

  return (
    <SecondaryLayout width={width} className="flex-row-fluid d-flex">
      <SecondarySidebar
        className="module_secondary_sidebar"
        onWidthChange={handleWidthChange}
        width={260}
        maxWidth={maxWidth}
      >
        <div className="h-100">
          <div className="mx-2 p-5 mt-7 mb-1">
            <h3 className="fw-bold text-dark mx-0 mb-0">设置</h3>
          </div>
          <OverlayScrollbarsComponent
            className="d-flex h-100 flex-column custom-scrollbar"
            options={{
              scrollbars: { autoHide: 'scroll' },
            }}
          >
            <Menu
              className="px-7 menu-state-bg menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0"
              // onSelect={handleSelect}
              // openKeys={openKeys}
              selectedKeys={menuKey ? [menuKey] : []}
              // onOpenChange={handleOpenChange}
              accordion={false}
              selectable="AllMenu"
              fit={true}
            >
              <Menu.Section
                className="menu-section-container"
                sectionClassName="d-flex align-items-center"
              >
                <span className="menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid">
                  通用设置
                </span>
              </Menu.Section>
              <Menu.Item
                key="profile"
                as={Link}
                url={`${baseUrl}/settings/profile`}
              >
                基础信息
              </Menu.Item>
            </Menu>
          </OverlayScrollbarsComponent>
        </div>
      </SecondarySidebar>
      <Outlet
        context={{
          module,
          baseUrl,
        }}
      />
    </SecondaryLayout>
  );
}

export default ModuleSchema;
