import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useDrop } from 'react-dnd';
import type { Connection, Edge, Node } from 'react-flow-renderer';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer';

import nodeTypes from './nodeTypes';
import { FloatingConnectionLine } from './edgeTypes/FloatingEdge';
import edgeTypes from './edgeTypes';
import { useFlowState } from './FlowContext';

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

  const [state, setState] = useFlowState();

  const [nodes, setNodes, onNodesChange] = useNodesState(state.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(state.edges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  useLayoutEffect(() => {
    setEdges(state.edges);
  }, [state.edges, setEdges]);

  useLayoutEffect(() => {
    setNodes(state.nodes);
  }, [state.nodes, setNodes]);

  useEffect(() => {
    console.log('state is update');
  }, [state]);

  const onConnect = useCallback(
    (params: Connection) => {
      if (params.source == params.target) {
        return;
      }
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'floating',
          },
          eds,
        ),
      );
    },
    [setEdges],
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const [{}, connectDrop] = useDrop<any, any, any>({
    accept: ['StartNoneEvent', 'EndNoneEvent', 'UserTask'],
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

  // const handleRemoveEdge = useCallback(
  //   (edgeId: string) => () =>
  //     setEdges((eds) => {
  //       return eds.filter((ed) => ed.id !== edgeId);
  //     }),
  //   [setEdges],
  // );

  const handleNodeDragStop = useCallback(
    (event: React.MouseEvent, node: Node) => {
      setState((prevState) => {
        const newNodes = prevState.nodes.map((e) => {
          if (e.id === node.id) {
            return {
              ...e,
              position: node.position,
            };
          }
          return e;
        });
        return { ...prevState, nodes: newNodes };
      });
    },
    [setState],
  );

  return (
    <div className="reactflow-wrapper" style={{ height: '100%' }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onClick={props.onClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={props.onNodeClick}
        onEdgeClick={props.onEdgeClick}
        onNodesDelete={props.onNodesDelete}
        onEdgesDelete={props.onEdgesDelete}
        onNodeDragStop={handleNodeDragStop}
        onConnect={onConnect}
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
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
