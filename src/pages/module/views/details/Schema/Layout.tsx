import { useCallback, useMemo, useState } from 'react';
import {
  Outlet,
  matchPath,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router';

import { Icon } from '@asany/icons';
import { Link } from '@umijs/max';
import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import SecondarySidebar from '@/components/SecondarySidebar';
import { Button, Menu } from '@/metronic';
import { useSchemaQuery } from '@/pages/module/hooks';
import { ModuleViewOutletProps } from '@/pages/module/type';
import type { Model } from '@/types';

import ModelModal from './components/ModelModal';

import './style/Layout.scss';

function ModuleSchema() {
  const location = useLocation();
  const navigate = useNavigate();

  const { module, baseUrl } = useOutletContext<ModuleViewOutletProps>();

  const [visibleModelModal, setVisibleModelModal] = useState(false);

  const { data, loading } = useSchemaQuery({
    variables: {
      module: module.id,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { models = [] } = data || {};

  const handleOpenModelModal = useCallback(() => {
    setVisibleModelModal(true);
  }, []);

  const handleCloseModelModal = useCallback(() => {
    setVisibleModelModal(false);
  }, []);

  const handleModelModalSuccess = useCallback(
    (model: Model) => {
      handleCloseModelModal();
      navigate(`${baseUrl}/schema/models/${model.id}`);
    },
    [baseUrl, handleCloseModelModal, history],
  );

  const handleClickModel = useCallback(
    (m: Model) => () => {
      navigate(`${baseUrl}/schema/models/${m.id}`);
    },
    [baseUrl, history],
  );

  const menuKey = useMemo(() => {
    let match = matchPath(
      {
        path: `${baseUrl}/schema/models/:mid`,
      },
      location.pathname,
    );
    if (match) {
      return 'model_' + match.params.mid;
    }
    match = matchPath(
      {
        path: `${baseUrl}/schema/models`,
      },
      location.pathname,
    );
    if (match) {
      return 'model_overview';
    }
    return '';
  }, [baseUrl, location.pathname]);

  return (
    <>
      <SecondarySidebar className="module_secondary_sidebar" width={260}>
        <div className="h-100">
          <div className="mx-2 p-5 mt-5">
            <h3 className="fw-bold text-dark mx-0 mb-0">结构定义</h3>
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
                  <Link
                    to={`${baseUrl}/schema/models`}
                    className={classnames(
                      'menu-section__link cursor-pointer text-muted',
                      {
                        checked: menuKey === 'model_overview',
                      },
                    )}
                  >
                    实体
                  </Link>
                  {loading && ' - 加载中...'}
                </span>
                <Button
                  icon={
                    <Icon
                      style={{ marginRight: '.2rem' }}
                      name="Duotune/arr087"
                      className=""
                    />
                  }
                  size="sm"
                  variant="white"
                  activeColor="light"
                  className="px-3 me-n4"
                  onClick={handleOpenModelModal}
                >
                  新增
                </Button>
              </Menu.Section>
              {models.map((item) => (
                <Menu.Item
                  key={`model_${item.id}`}
                  onClick={handleClickModel(item as Model)}
                >
                  {item.name}
                </Menu.Item>
              ))}
            </Menu>
          </OverlayScrollbarsComponent>
        </div>
      </SecondarySidebar>
      <ModelModal
        module={module}
        onSuccess={handleModelModalSuccess}
        visible={visibleModelModal}
        onClose={handleCloseModelModal}
      />
      <Outlet
        context={{
          module,
          baseUrl,
        }}
      />
    </>
  );
}

export default ModuleSchema;
