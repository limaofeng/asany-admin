import { useCallback, useMemo, useState } from 'react';

import { history, Link } from 'umi';
import { Icon } from '@asany/icons';

import NewModule from '../components/NewModule';
import { useModulesQuery } from '../hooks';

import { PageContent } from '@/layouts/components';
import { Card, Col, Row, Symbol } from '@/metronic';
import type { Module } from '@/types';

import '../style/ModuleList.scss';

function ModuleList() {
  const [visibleNewModule, setVisibleNewModule] = useState(false);

  const { data, loading, previousData, refetch } = useModulesQuery({
    fetchPolicy: 'cache-and-network',
  });

  const handleCloseNewModule = useCallback(() => {
    setVisibleNewModule(false);
  }, []);

  const handleOpenNewModule = useCallback(() => {
    setVisibleNewModule(true);
  }, []);

  const handleSuccess = useCallback(
    (module: Module) => {
      refetch();
      history.push(`/modules/${module.id}`);
    },
    [refetch],
  );

  const modules = useMemo(
    () => data?.modules || previousData?.modules || [],
    [data?.modules, previousData],
  );

  return (
    <PageContent loading={loading} className="module-list">
      <div className="my-modules">
        <h1 className="anchor fw-bold mb-5">我的模块({modules.length})</h1>
        <Row
          className="py-2"
          cols={{
            md: 2,
            xl: 5,
          }}
          gutter={{
            default: 5,
            xl: 9,
          }}
        >
          {modules.map((item) => (
            <Col key={item.id} md={4}>
              <Card as={Link} to={`/modules/${item.id}`} className="module-card card-p-0">
                <Card.Body>
                  <Symbol
                    autoColor={false}
                    // size={}
                    labelClassName="bg-dark text-inverse-info fs-5tx"
                    src={(item as any).pictureUrl}
                    alt={item.name}
                  />
                </Card.Body>
                <Card.Footer className="p-4">
                  <div className="d-flex flex-column">
                    <h3>{item.name}</h3>
                    <span className="tw-text-ellipsis overflow-hidden">{item.description}</span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="create-new-module">
        <div className="d-flex flex-column">
          <h1 className="anchor fw-bold mb-5">创建一个新模块</h1>
          <span className="tw-text-ellipsis overflow-hidden">创建一个空白模块或从模板开始。</span>
        </div>
        <Row
          className="module-templates"
          cols={{
            md: 2,
            xl: 4,
          }}
          gutter={{
            default: 5,
            xl: 9,
          }}
        >
          <Col md={4}>
            <Card
              as="a"
              onClick={handleOpenNewModule}
              className="module-card create-module-card card-p-0"
            >
              <Card.Body>
                <div className="create-module-card-inner">
                  <div className="create-module-card__blank_icon">
                    <Icon name="Bootstrap/plus" />
                  </div>
                  <span className="create-module-card__blank_name text-gray-700">空白</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <NewModule
          visible={visibleNewModule}
          onSuccess={handleSuccess}
          onClose={handleCloseNewModule}
        />
      </div>
    </PageContent>
  );
}

export default ModuleList;
