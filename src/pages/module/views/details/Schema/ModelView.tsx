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
    <ContentWrapper
      className="pages-model-view"
      header={
        !!model && (
          <>
            <div className="h-40px d-flex align-items-center">
              <div className="d-flex align-items-end">
                <h1 className="mb-0 me-2">{model.name}</h1>
                <span className="text-muted">#{model.code}</span>
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
