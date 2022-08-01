import { useCallback, useRef, useState } from 'react';

import { useDrop } from 'react-dnd';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer';

import { edges as initialEdges, nodes as initialNodes } from './initial-elements';

let id = 0;
const getId = () => `dndnode_${id++}`;

type OverviewFlowProps = {
  onNodeClick: (e: any, node: any) => void;
};

const OverviewFlow = (props: OverviewFlowProps) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event: any) => {
    console.log('onDragOver', event);
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const [{}, connectDrop] = useDrop<any, any, any>({
    accept: ['input', 'output', 'default'],
    drop(item) {
      return item;
    },
    canDrop(item, monitor) {
      return monitor.isOver({ shallow: true });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      handlerId: monitor.getHandlerId(),
    }),
  });
  connectDrop(reactFlowWrapper);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      console.log('onDrop', type, reactFlowBounds, reactFlowBounds);

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type || !reactFlowBounds) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => {
        return nds.concat(newNode);
      });
    },
    [reactFlowInstance, setNodes],
  );

  return (
    <div className="reactflow-wrapper" style={{ height: '100%' }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(event, element) => {
          console.log('click', element);
          props.onNodeClick(event, element);
        }}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        attributionPosition="top-right"
        proOptions={{ account: 'paid-pro', hideAttribution: true }}
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background as any;
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';

            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background as any;

            return '#fff';
          }}
          nodeBorderRadius={2}
        />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
