import type { RouteComponentProps } from 'react-router';

import { useModelQuery } from '../../../hooks';

import ModelFieldsManagement from './components/ModelFieldsManagement';

import { Card, Tabs } from '@/metronic';
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
    <ContentWrapper className="pages-model-view" loading={loading} footer={false}>
      <Card bodyClassName="px-0">
        <div className="pb-4 model-view-header">
          <div className="h-40px d-flex align-items-center">
            <div className="d-flex align-items-end">
              <h1 className="mb-0 me-2">{model?.name}</h1>
              <span className="text-muted">#{model?.code}</span>
            </div>
          </div>
          <span className="text-muted lh-base">{model?.description}</span>
        </div>
        <Tabs
          renderContainer={false}
          type="line-tabs"
          className="fs-4 fw-bold mb-n2"
          tabBarClassName="px-4"
        >
          <Tabs.TabPane tab="字段">
            {model && <ModelFieldsManagement model={model as Model} />}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </ContentWrapper>
  );
}

export default ModelView;
