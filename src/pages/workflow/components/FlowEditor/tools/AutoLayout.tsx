import { useCallback } from 'react';
import type { Edge, Node } from 'react-flow-renderer';
import { Position, useReactFlow } from 'react-flow-renderer';

import type { AsanyTool, AsanyToolProps } from '@asany/sunmao';
import classnames from 'classnames';
import dagre from 'dagre';

import { useFlowState } from '../FlowContext';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = 'TB',
) => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({
    rankdir: direction,
    ranksep: 80,
  });

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

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

function useLayout() {
  const { getNodes, getEdges } = useReactFlow();

  const [, setState] = useFlowState();

  const layout = useCallback(
    (direction: 'LR' | 'TB') => {
      const nodes = getNodes();
      const edges = getEdges();
      getEdges();

      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setState({ nodes: layoutedNodes, edges: layoutedEdges });
      // setTimeout(fitView, 0);
    },
    [getNodes, getEdges, setState],
  );

  return layout;
}

export function AlignHorizontalCenter(
  props: AsanyToolProps & { item: AsanyTool },
) {
  const { className, disabled, active, style, children } = props;

  const layout = useLayout();

  const handleClick = useCallback(() => {
    layout('TB');
  }, [layout]);

  return (
    <a
      onClick={handleClick}
      className={classnames('toolbar-icon', className, {
        disabled,
        active,
      })}
      style={style}
    >
      {children}
    </a>
  );
}

export function AlignVerticalCenter(
  props: AsanyToolProps & { item: AsanyTool },
) {
  const { className, disabled, active, style, children } = props;

  const layout = useLayout();

  const handleClick = useCallback(() => {
    layout('LR');
  }, [layout]);

  return (
    <a
      onClick={handleClick}
      className={classnames('toolbar-icon', className, {
        disabled,
        active,
      })}
      style={style}
    >
      {children}
    </a>
  );
}
