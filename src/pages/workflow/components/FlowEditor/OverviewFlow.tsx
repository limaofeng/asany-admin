import { useCallback, useEffect, useRef, useState } from 'react';

import { useDrop } from 'react-dnd';
import type { Connection, Edge, Node } from 'react-flow-renderer';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer';
import dagre from 'dagre';
import { useEditorSelector } from '@asany/sunmao';

import { flowableToReactflow } from '../../utils/Convert';
import type { ProcessDefinition } from '../../type';

import nodeTypes from './nodeTypes';
import { FloatingConnectionLine } from './edgeTypes/FloatingEdge';
import edgeTypes from './edgeTypes';

import type { ProcessModel } from '@/types';

// import { edges as initialEdges, nodes as initialNodes } from './initial-elements';

let id = 0;
const getId = () => `dndnode_${id++}`;

type OverviewFlowProps = {
  onNodeClick: (e: any, node: any) => void;
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

// const nodeWidth = 172;
// const nodeHeight = 36;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: node.width, height: node.height });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    const nodeWidth = nodeWithPosition.width!;
    const nodeHeight = nodeWithPosition.height!;

    console.log('node', node);

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  console.log('nodes', nodes);

  return { nodes, edges };
};

const OverviewFlow = (props: OverviewFlowProps) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const editorJson = useEditorSelector(
    (state) => (state.project.data as ProcessModel | undefined)?.editorJson,
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  useEffect(() => {
    if (editorJson) {
      const flowData = flowableToReactflow(JSON.parse(editorJson) as ProcessDefinition);
      setNodes(flowData.nodes);
      setEdges(flowData.edges);
    }
  }, [editorJson, setEdges, setNodes]);

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

  const onLayout = useCallback(
    (direction: 'LR' | 'TB') => {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        nodes,
        edges,
        direction,
      );

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges, setNodes, setEdges],
  );

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

  const handleRemoveEdge = useCallback(
    (edgeId: string) => () =>
      setEdges((eds) => {
        return eds.filter((ed) => ed.id !== edgeId);
      }),
    [setEdges],
  );

  const _edges = edges.map((item) => ({
    ...item,
    data: { ...item, remove: handleRemoveEdge(item.id) },
  }));

  console.log('edges', edges, _edges);

  const loading = useEditorSelector((state) => state.ui.scena.loading);

  console.log('loading', loading);

  return (
    <div className="reactflow-wrapper" style={{ height: '100%' }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={_edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(event, element) => {
          console.log('click', element);
          props.onNodeClick(event, element);
        }}
        // onEdgeClick={(...args) => {
        //   console.log('onEdgeClick', args);
        // }}
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
      <div className="controls" style={{ position: 'absolute', top: 0, right: 0, zIndex: 1000 }}>
        <button onClick={() => onLayout('TB')}>vertical layout</button>
        <button onClick={() => onLayout('LR')}>horizontal layout</button>
      </div>
    </div>
  );
};

export default OverviewFlow;
