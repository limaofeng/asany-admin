import React, { useCallback, useMemo } from 'react';
import { useEffect } from 'react';

import type { ICustomizer } from '@asany/sunmao';
import { useEditor } from '@asany/sunmao';
import { useEditorSelector } from '@asany/sunmao';
import type { Edge, Node } from 'react-flow-renderer';

import { flowableToReactflow } from '../../utils/Convert';
import type { ProcessDefinition } from '../../type';

import OverviewFlow from './OverviewFlow';
import { useFlowState, useFlowTools } from './FlowContext';

import type { ProcessModel } from '@/types';

const nodeProperties: ICustomizer = {
  title: '节点设置',
  fields: [
    {
      label: ' 编码',
      name: 'id',
      type: 'String',
    },
    {
      label: '名称',
      name: 'label',
      type: 'String',
    },
    {
      label: '描述',
      name: 'documentation',
      type: 'String',
      renderer: {
        component: 'MultiLineText',
        props: {
          autoSize: { minRows: 2, maxRows: 4 },
        },
      },
    },
  ],
};

const edgeProperties: ICustomizer = {
  title: '条件设置',
  fields: [
    {
      label: ' 编码',
      name: 'id',
      type: 'String',
    },
    {
      label: '名称',
      name: 'label',
      type: 'String',
    },
    {
      label: '描述',
      name: 'documentation',
      type: 'String',
      renderer: {
        component: 'MultiLineText',
        props: {
          autoSize: { minRows: 2, maxRows: 4 },
        },
      },
    },
  ],
};

function Workspace() {
  const editor = useEditor();

  const sidebarWidth = useEditorSelector((state) => state.ui.sidebar.width);
  const sidebarMinWidth = useEditorSelector((state) => state.ui.sidebar.minWidth);
  const sidebarMinimizable = useEditorSelector((state) => state.ui.sidebar.minimizable);

  const marginLeft = useMemo(() => {
    let _sidebarWidth = sidebarWidth;
    if (sidebarMinimizable) {
      _sidebarWidth = 0;
    } else {
      _sidebarWidth = Math.max(sidebarMinWidth, _sidebarWidth);
    }
    return _sidebarWidth;
  }, [sidebarWidth, sidebarMinimizable, sidebarMinWidth]);

  const [, setState] = useFlowState();
  const { reset, resetInitialState } = useFlowTools();

  const editorJson = useEditorSelector(
    (_state) => (_state.project.data as ProcessModel | undefined)?.editorJson,
  );

  useEffect(() => {
    if (editorJson) {
      const flowData = flowableToReactflow(JSON.parse(editorJson) as ProcessDefinition);
      setState(flowData);
      resetInitialState(flowData);
      reset(flowData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorJson]);

  const handleClick = useCallback(() => {
    editor.aside.close();
  }, [editor.aside]);

  const handleNodeClick = useCallback(
    (event: React.MouseEvent, element: Node) => {
      event.preventDefault();
      event.stopPropagation();
      const handleUpdate = function (values: any) {
        console.log('handleUpdate', values);
      };
      console.log('handleNodeClick', event, element);
      const values = { label: element.data.label, id: element.id };
      editor.aside.open(
        {
          customizer: nodeProperties,
          value: values,
          update: handleUpdate,
          watchValue: (callback) => {
            callback(values);
          },
        },
        {
          width: 280,
        },
      );
    },
    [editor.aside],
  );

  const handleEdgeClick = useCallback(
    (event: React.MouseEvent, element: Edge) => {
      event.preventDefault();
      event.stopPropagation();
      const handleUpdate = function (values: any) {
        console.log('handleUpdate', values);
      };
      console.log('handleNodeClick', event, element);
      const value = { label: '1111' };
      editor.aside.open(
        {
          customizer: edgeProperties,
          value,
          update: handleUpdate,
          watchValue: (callback) => {
            callback(value);
          },
        },
        {
          width: 280,
        },
      );
    },
    [editor.aside],
  );

  const handleNodesDelete = useCallback(() => {
    editor.aside.close();
  }, [editor.aside]);

  const handleEdgesDelete = useCallback(() => {
    editor.aside.close();
  }, [editor.aside]);

  const minimizable = useEditorSelector((state) => state.ui.sidebar.minimizable);

  console.log('minimizable', minimizable);

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        marginLeft,
      }}
    >
      <OverviewFlow
        onClick={handleClick}
        onNodeClick={handleNodeClick}
        onEdgeClick={handleEdgeClick}
        onNodesDelete={handleNodesDelete}
        onEdgesDelete={handleEdgesDelete}
      />
    </div>
  );
}

export default React.memo(Workspace);
