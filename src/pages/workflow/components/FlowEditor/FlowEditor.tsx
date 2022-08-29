import { useCallback, useRef } from 'react';

import { ReactFlowProvider } from 'react-flow-renderer';
import type { IAsanyEditor } from '@asany/sunmao';
import { Designer } from '@asany/sunmao';
import { SketchProvider } from '@asany/sunmao';

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

  return (
    <ReactFlowProvider>
      <SketchProvider>
        <Designer
          ref={api}
          plugins={[plugin()]}
          onSave={handleSave}
          onBack={onBack}
          loading={loading}
          className="flow-editor"
          project={{
            id: data?.id || 'none',
            type: 'flow',
            name: data?.name || '',
            data: data!,
          }}
        />
      </SketchProvider>
    </ReactFlowProvider>
  );
}

export default FlowEditor;
