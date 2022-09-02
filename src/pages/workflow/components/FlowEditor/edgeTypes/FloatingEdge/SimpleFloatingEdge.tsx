import { useCallback, useEffect, useRef } from 'react';

import { Icon } from '@asany/icons';
import type { EdgeProps } from 'react-flow-renderer';
import { getEdgeCenter } from 'react-flow-renderer';
import { getSmoothStepPath } from 'react-flow-renderer';
import { useStore } from 'react-flow-renderer';

import { useQuickControls } from '../../FlowContext';

import { getEdgeParams } from './utils';

const foreignObjectSize = 40;

function SimpleFloatingEdge({ id, source, target, markerEnd, style }: EdgeProps) {
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  const edge = useRef<HTMLButtonElement>(null);

  const zoom = useStore((s) => s.transform[2]);
  const [{ edgeId }, { show: showQuickControls }] = useQuickControls();

  const handleClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    // const targetIsPane = (event.target! as HTMLElement).classList.contains('react-flow__pane');
    // console.log('targetIsPane', targetIsPane);
    // if (targetIsPane) {
    // we need to remove the wrapper bounds, in order to get the correct position
    // const { top, left } = (
    //   document.querySelector('.reactflow-wrapper') as HTMLDivElement
    // ).getBoundingClientRect();

    // const edgeQuick = document.querySelector('.edge-quick') as HTMLDivElement;
    // if (!edgeQuick) {
    //   return;
    // }
    // const quickHeight = edgeQuick.getBoundingClientRect().height;

    const { x: clientX, y: clientY, width, height } = edge.current!.getBoundingClientRect();
    showQuickControls(id, { x: clientX, y: clientY, width, height });
    // const position = project({
    //   x: clientX + width - left,
    //   y: clientY - top + height / 2 - quickHeight / 2,
    // });
    // edgeQuick.style.transform = `translate(${position.x}px, ${position.y}px)`;
    //  const newNode = {
    //    id,
    //    // we are removing the half of the node width (75) to center the new node
    //    position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
    //    data: { label: `Node ${id}` },
    //  };
    //  setNodes((nds) => nds.concat(newNode));
    //  setEdges((eds) =>
    //    eds.concat({ id: getId(), source: connectingNodeId.current, target: id })
    //  );
    //  }
    // }
  }, []);

  useEffect(() => {
    if (edgeId != id) {
      return;
    }
    const { x: clientX, y: clientY, width, height } = edge.current!.getBoundingClientRect();
    showQuickControls(id, { x: clientX, y: clientY, width, height });
  }, [edgeId, id, showQuickControls, zoom]);

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = getEdgeParams(
    sourceNode,
    targetNode,
  );

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
