import { useCallback } from 'react';
import type { RouteComponentProps } from 'react-router';

import { FlowEditor } from '../components';
import { useProcessModelQuery } from '../hooks';

type FlowDesignProps = RouteComponentProps<{ id: string }>;

function FlowDesign(props: FlowDesignProps) {
  const {
    match: {
      params: { id },
    },
    history,
  } = props;

  const { data, loading } = useProcessModelQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <FlowEditor
      onBack={handleBack}
      loading={loading}
      data={data?.processModel as any}
    />
  );
}

export default FlowDesign;
