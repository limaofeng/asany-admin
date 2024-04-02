import { useCallback, useEffect, useMemo } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router';

import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import SecondarySidebar from '@/components/SecondarySidebar';
import { Menu } from '@/metronic';
import { useContentQuery } from '@/pages/module/hooks';
import type { ModelView } from '@/types';

import './style/Layout.scss';

// type ContentLayoutProps = RouteComponentProps<
//   { mid?: string },
//   any,
//   { module: Module; baseUrl: string }
// > & {
//   children: React.ReactNode;
// };

function ContentLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { module, baseUrl = '' } = location.state;

  const { data, loading } = useContentQuery({
    variables: {
      module: module.id,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { models = [] } = data || {};

  const handleViewClick = useCallback(
    (v: ModelView) => () => {
      navigate(`${baseUrl}/content/${v.model.id}/views/${v.id}`);
    },
    [baseUrl, history],
  );

  const defaultViews = useMemo(() => {
    return models.map((item) => ({
      id: item.defaultView!.id,
      name: item.name,
      model: item,
    })) as ModelView[];
  }, [models]);

  const menuKey = useMemo(() => {
    const match = matchPath(
      `${baseUrl}/content/:mid/views/:vid`,
      location.pathname,
    );
    if (match) {
      return `view_${match.params.vid}`;
    }
    return null;
  }, [baseUrl, location.pathname]);

  useEffect(() => {
    if (!defaultViews.length) {
      return;
    }
    const v = defaultViews[0];
    navigate(`${baseUrl}/content/${v.model.id}/views/${v.id}`, {
      replace: true,
    });
  }, [baseUrl, defaultViews, navigate]);

  return (
    <>
      <SecondarySidebar
        loading={loading}
        className="module_secondary_sidebar"
        width={260}
      >
        <div className="h-100">
          <div className="mx-2 p-5 mt-5">
            <h3 className="fw-bold text-dark mx-0 mb-0">内容管理</h3>
          </div>
          <OverlayScrollbarsComponent
            className="d-flex h-100 flex-column custom-scrollbar"
            options={{
              scrollbars: { autoHide: 'scroll' },
            }}
          >
            <Menu
              className={classnames(
                'module_content_menu',
                'menu-state-bg',
                'menu-title-gray-600',
                'menu-icon-gray-400',
                'menu-state-primary',
                'menu-state-icon-primary',
                'menu-state-bullet-primary',
                'menu-arrow-gray-500',
                'fw-bold fs-6 my-5 my-lg-0 px-7',
              )}
              // onSelect={handleSelect}
              // openKeys={openKeys}
              selectedKeys={menuKey ? [menuKey] : []}
              // onOpenChange={handleOpenChange}
              accordion={false}
              openKeys={['custom-view', 'default-view']}
              fit={true}
            >
              {/* <Menu.Section
                className="menu-section-container"
                sectionClassName="d-flex align-items-center"
              >
                <span className="menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid">
                  <Link
                    to={`${baseUrl}/content`}
                    className={classnames('menu-section__link cursor-pointer text-muted', {
                      checked: menuKey === 'model_overview',
                    })}
                  >
                    实体
                  </Link>
                  {loading && ' - 加载中...'}
                </span>
                <Button
                  icon={
                    <Icon style={{ marginRight: '.2rem' }} name="Duotune/arr087" className="" />
                  }
                  size="sm"
                  variant="white"
                  activeColor="light"
                  className="px-3 me-n4"
                >
                  新增
                </Button>
              </Menu.Section> */}
              <Menu.SubMenu
                key="custom-view"
                linkClassName="py-0"
                title="自定义视图"
              >
                <Menu.Content contentClassName="custom-view-notes menu-section text-muted text-uppercase fs-8 ls-1">
                  {loading ? <>加载中...</> : <span>123123</span>}
                </Menu.Content>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="default-view"
                linkClassName="py-0"
                title="默认视图"
              >
                {loading ? (
                  <Menu.Content contentClassName="custom-view-notes menu-section text-muted text-uppercase fs-8 ls-1">
                    加载中...
                  </Menu.Content>
                ) : (
                  defaultViews.map((item) => (
                    <Menu.Item
                      key={`view_${item.id}`}
                      onClick={handleViewClick(item)}
                    >
                      {item.name}
                    </Menu.Item>
                  ))
                )}
              </Menu.SubMenu>
            </Menu>
          </OverlayScrollbarsComponent>
        </div>
      </SecondarySidebar>
      {children}
    </>
  );
}

export default ContentLayout;
