import type { RouteComponentProps } from 'react-router';
import { Icon } from '@asany/icons';
import classnames from 'classnames';

import { useModelQuery } from '../../../hooks';

import ModelFieldsManagement from './components/ModelFieldsManagement';

import { Button, Card, Dropdown, Menu, Tabs } from '@/metronic';
import { ContentWrapper } from '@/layouts/components';
import type { Model } from '@/types';

type ModelViewProps = RouteComponentProps<{ mid: string }>;

import './style/ModelView.scss';

function ModelView(props: ModelViewProps) {
  const {
    match: { params },
  } = props;

  const { data, loading } = useModelQuery({
    variables: { id: params.mid },
    fetchPolicy: 'cache-and-network',
  });

  const model = data?.model;

  return (
    <ContentWrapper
      className="pages-model-view"
      header={
        !!model && (
          <>
            <div className="h-40px d-flex align-items-center">
              <div className="d-flex align-items-end position-relative">
                <h1 className="mb-0 me-2">{model.name}</h1>
                <span className="text-muted">#{model.code}</span>
                <Dropdown
                  // offset={[-32, 0]}
                  placement="bottomLeft"
                  overlay={
                    <Menu
                      dropdown
                      rounded
                      className="menu-state-bg-light-primary p-1 gap-1 menu-sub-dropdown menu-title-gray-700 menu-state-primary fw-semibold fs-base w-125px"
                    >
                      <Menu.Item
                        icon={
                          <div className={classnames('')}>
                            <Icon name="Bootstrap/pencil-square" />
                          </div>
                        }
                      >
                        编辑
                      </Menu.Item>
                      <Menu.Item
                        className="actions-delete"
                        icon={
                          <div className={classnames('')}>
                            <Icon name="Bootstrap/trash" />
                          </div>
                        }
                      >
                        删除
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    variant="clean"
                    style={{ right: -34, top: 2 }}
                    className="position-absolute"
                    icon={<Icon className="svg-icon-2" name="Bootstrap/three-dots" />}
                  />
                </Dropdown>
              </div>
            </div>
            <span className="text-muted lh-base">{model.description}</span>
          </>
        )
      }
      loading={loading}
      footer={false}
    >
      <Card bodyClassName="px-0">
        <Tabs renderContainer={false} type="line-tabs">
          <Tabs.TabPane key="fields" tab="字段">
            {model && <ModelFieldsManagement model={model as Model} />}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </ContentWrapper>
  );
}

export default ModelView;
