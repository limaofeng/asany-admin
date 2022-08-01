import { useCallback, useRef } from 'react';

import { ReactFlowProvider } from 'react-flow-renderer';
import type { IAsanyEditor } from '@asany/sunmao';
import { Designer } from '@asany/sunmao';
import { SketchProvider } from '@asany/sunmao';

import plugin from './plugin';

function FlowEditor() {
  const api = useRef<IAsanyEditor>(null);

  const handleSave = useCallback(() => {}, []);

  const handleBack = useCallback(() => {}, []);

  return (
    <ReactFlowProvider>
      <SketchProvider>
        <Designer
          ref={api}
          plugins={[plugin()]}
          onSave={handleSave}
          onBack={handleBack}
          className="flow-editor"
          project={{ type: 'flow' } as any}
        />
      </SketchProvider>
    </ReactFlowProvider>
  );
}

export default FlowEditor;
