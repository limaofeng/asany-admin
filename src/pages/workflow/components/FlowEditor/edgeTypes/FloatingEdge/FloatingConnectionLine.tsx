import type { ConnectionLineComponentProps } from 'react-flow-renderer';
import { getSmoothStepPath } from 'react-flow-renderer';

import { getEdgeParams } from './utils';

function FloatingConnectionLine({
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  sourceNode,
}: ConnectionLineComponentProps) {
  if (!sourceNode) {
    return null;
  }

  const targetNode = {
    id: 'connection-target',
    width: 1,
    height: 1,
    positionAbsolute: { x: targetX, y: targetY },
  };

  const { sourceX, sourceY } = getEdgeParams(sourceNode, targetNode as any);
  const d = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetPosition,
    targetX,
    targetY,
  });

  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={1.5}
        className="animated"
        d={d}
      />
      <circle
        cx={targetX}
        cy={targetY}
        fill="#fff"
        r={3}
        stroke="#222"
        strokeWidth={1.5}
      />
    </g>
  );
}

export default FloatingConnectionLine;
