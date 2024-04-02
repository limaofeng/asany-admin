import { useCallback, useEffect, useRef } from 'react';

import { Icon } from '@asany/icons';
import type { EdgeProps } from 'react-flow-renderer';
import {
  getEdgeCenter,
  getSmoothStepPath,
  useStore,
} from 'react-flow-renderer';

import { useQuickControls } from '../../FlowContext';

import { getEdgeParams } from './utils';

const foreignObjectSize = 40;

function SimpleFloatingEdge({
  id,
  source,
  target,
  markerEnd,
  style,
}: EdgeProps) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source]),
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target]),
  );

  const edge = useRef<HTMLButtonElement>(null);

  const zoom = useStore((s) => s.transform[2]);
  const [{ edgeId }, { show: showQuickControls }] = useQuickControls();

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const {
        x: clientX,
        y: clientY,
        width,
        height,
      } = edge.current!.getBoundingClientRect();
      showQuickControls(id, { x: clientX, y: clientY, width, height });
    },
    [id, showQuickControls],
  );

  useEffect(() => {
    if (edgeId != id) {
      return;
    }
    const {
      x: clientX,
      y: clientY,
      width,
      height,
    } = edge.current!.getBoundingClientRect();
    showQuickControls(id, { x: clientX, y: clientY, width, height });
  }, [edgeId, id, showQuickControls, zoom]);

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } =
    getEdgeParams(sourceNode, targetNode);

  // console.log('props', sx, sy, tx, ty);

  const d = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetPosition,
    targetX,
    targetY,
  });

  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    sourcePosition,
    targetPosition,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={d}
        // strokeWidth={5}
        markerEnd={markerEnd}
        style={style}
      />
      {/* <EdgeText
        x={edgeCenterX}
        y={edgeCenterY}
        label={'11'}
        // labelStyle={labelStyle}
        // labelShowBg={labelShowBg}
        // labelBgStyle={labelBgStyle}
        // labelBgPadding={labelBgPadding}
        // labelBgBorderRadius={labelBgBorderRadius}
      /> */}
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div className="edge-container" onClick={handleClick}>
          <button ref={edge} className="edgebutton">
            <Icon name="Bootstrap/plus" />
          </button>
        </div>
      </foreignObject>
    </>
  );
}

export default SimpleFloatingEdge;
