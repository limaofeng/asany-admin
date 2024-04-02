import { useCallback } from 'react';

import { SunmaoEditor } from '@asany/sunmao';
import type { RouteComponentProps } from 'react-router';
import { history } from '@umijs/max';

import { Toast } from '@/metronic';
import { useComponentQuery, useSaveComponentMutation } from '@/pages/app/hooks';
import type { Component } from '@/types';

type RanderSunmaoEditorProps = {
  data: Component;
  loading: boolean;
  save: (opt: any) => void;
};

function RanderSunmaoEditor(props: RanderSunmaoEditorProps) {
  const { data, loading, save } = props;

  const handleBack = useCallback(() => {
    history.goBack();
  }, []);

  const handleSave = useCallback(
    async (_data: any) => {
      const { template, blocks } = _data;
      await save({ variables: { id: _data.id, input: { template, blocks } } });
      Toast.success('保存成功');
    },
    [save],
  );

  const project_data: any = {
    id: data.id,
    template: data.template,
    blocks: data.blocks,
  };

  return (
    <SunmaoEditor
      id={data.id}
      name={data?.name || ''}
      onSave={handleSave}
      onBack={handleBack}
      loading={loading}
      viewport={{ size: [1280, 2160] }}
      data={project_data}
    />
  );
}

type HomeBuilderProps = RouteComponentProps<{ id: string }>;

function HomeBuilder(props: HomeBuilderProps) {
  const id = props.match.params.id;
  const { data, loading } = useComponentQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });
  const [updateComponent] = useSaveComponentMutation();
  return (
    <RanderSunmaoEditor
      save={updateComponent}
      data={{ id, ...data?.component } as any}
      loading={loading}
    />
  );
}

export default HomeBuilder;
