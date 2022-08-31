import { useCallback, useMemo, useRef } from 'react';

import { ReactFlowProvider } from 'react-flow-renderer';
import type { AsanyProject, IAsanyEditor } from '@asany/sunmao';
import { Designer } from '@asany/sunmao';
import { SketchProvider } from '@asany/sunmao';

import FlowNodeDragLayer from './components/FlowNodeDragLayer';
import { FlowStateProvider } from './FlowContext';
import plugin from './plugin';

import type { ProcessModel } from '@/types';

type FlowEditorProps = {
  loading: boolean;
  data?: ProcessModel;
  onBack: () => void;
};

function FlowEditor(props: FlowEditorProps) {
  const api = useRef<IAsanyEditor>(null);

  const { loading, onBack, data } = props;

  const handleSave = useCallback(() => {}, []);

  const project: AsanyProject = useMemo(() => {
    if (!data) {
      return { type: 'flow' } as any;
    }
    return {
      id: data.id,
      type: 'flow',
      name: data?.name || '',
      data: data!,
    };
  }, [data]);

  return (
    <ReactFlowProvider>
      <SketchProvider>
        <Designer
          container={FlowStateProvider}
          ref={api}
          plugins={[plugin()]}
          onSave={handleSave}
          onBack={onBack}
          loading={loading}
          className="flow-editor"
          project={project}
        />
      </SketchProvider>
      <FlowNodeDragLayer />
    </ReactFlowProvider>
  );
}

export default FlowEditor;
