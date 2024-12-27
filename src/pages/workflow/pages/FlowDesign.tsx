import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FlowEditor } from '../components';
import { useProcessModelQuery } from '../hooks';

function FlowDesign() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, loading } = useProcessModelQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <FlowEditor
      onBack={handleBack}
      loading={loading}
      data={data?.processModel as any}
    />
  );
}

export default FlowDesign;
