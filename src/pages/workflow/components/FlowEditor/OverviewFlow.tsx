import { useCallback, useRef, useState } from 'react';
import React from 'react';

import { useDrop } from 'react-dnd';
import type { Connection, Edge, Node } from 'react-flow-renderer';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';

import nodeTypes from './nodeTypes';
import { FloatingConnectionLine } from './edgeTypes/FloatingEdge';
import edgeTypes from './edgeTypes';
import { useEdgesState, useFlowTools, useNodesState } from './FlowContext';
import QuickControls from './components/QuickControls';

let id = 0;
const getId = () => `dndnode_${id++}`;

type OverviewFlowProps = {
  onClick: (e: React.MouseEvent) => void;
  onNodeClick: (e: React.MouseEvent, node: Node) => void;
  onEdgeClick: (e: React.MouseEvent, edge: Edge) => void;
  onNodesDelete: (nodes: Node[]) => void;
  onEdgesDelete: (edges: Edge[]) => void;
};

const OverviewFlow = (props: OverviewFlowProps) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [edges, setEdges, onEdgesChange] = useEdgesState();
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const { hideQuickControls } = useFlowTools();

  const onConnect = useCallback(
    (params: Connection) => {
      if (params.source == params.target) {
        return;
      }
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'simple_floating',
          },
          eds,
        ),
      );
    },
    [setEdges],
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const [{}, connectDrop] = useDrop<any, any, any>({
    accept: Object.keys(nodeTypes),
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
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

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

  const handleNodeDragStop = useCallback(
    (event: React.MouseEvent, node: Node, _nodes: Node[]) => {
      console.log(node, _nodes);
      setNodes((prevNodes) =>
        prevNodes.map((e) => {
          const _index = _nodes.findIndex((n) => n.id == e.id);
          if (_index > -1) {
            return {
              ...e,
              position: _nodes[_index].position,
            };
          }
          return e;
        }),
      );
    },
    [setNodes],
  );

  const handleConnectStop = useCallback((event: MouseEvent) => {
    const targetIsPane = (event.target! as HTMLElement).classList.contains('react-flow__pane');
    console.log('targetIsPane', targetIsPane);
    if (targetIsPane) {
    }
  }, []);

  const { onClick } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const targetIsPane = (e.target! as HTMLElement).classList.contains('react-flow__pane');
      if (!targetIsPane) {
        return;
      }
      // console.log('handleClick', e.target);
      onClick(e);
      hideQuickControls();
    },
    [hideQuickControls, onClick],
  );

  return (
    <div className="reactflow-wrapper" style={{ height: '100%' }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onClick={handleClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeClick={props.onEdgeClick}
        onNodesDelete={props.onNodesDelete}
        onEdgesDelete={props.onEdgesDelete}
        onNodeDragStop={handleNodeDragStop}
        onConnect={onConnect}
        onConnectStop={handleConnectStop}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        attributionPosition="top-right"
        proOptions={{ account: 'paid-pro', hideAttribution: true }}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        connectionLineComponent={FloatingConnectionLine}
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background as any;
            if (n.type === 'StartNoneEvent') return '#0041d0';
            if (n.type === 'EndNoneEvent') return '#ff0072';
            if (['UserTask', 'ExclusiveGateway'].includes(n.type!)) {
              return '#1a192b';
            }
            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) {
              return n.style.background as any;
            }
            return '#fff';
          }}
          nodeBorderRadius={2}
        />
        <Controls />
        <Background color="#aaa" gap={16} />
        <QuickControls flowContainer={reactFlowWrapper} />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
