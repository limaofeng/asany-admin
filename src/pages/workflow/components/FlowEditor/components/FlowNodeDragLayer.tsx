import type { CSSProperties } from 'react';
import type { XYCoord } from 'react-dnd';
import { useDragLayer } from 'react-dnd';

import { renderNodeTypeDragPreview } from '../nodeTypes';

export function snapToGrid(x: number, y: number): [number, number] {
  const snappedX = Math.round(x / 32) * 32;
  const snappedY = Math.round(y / 32) * 32;
  return [snappedX, snappedY];
}

const layerStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

export function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
  isSnapToGrid?: boolean,
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  if (isSnapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;
  }

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

function FlowNodeDragLayer() {
  const { isDragging, itemType, initialOffset, currentOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType() as string,
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }),
  );

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div
        className={`react-flow__node-${itemType}`}
        style={{ ...getItemStyles(initialOffset, currentOffset) }}
      >
        {renderNodeTypeDragPreview(itemType)}
      </div>
    </div>
  );
}

export default FlowNodeDragLayer;
