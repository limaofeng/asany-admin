import React from 'react';
import { useCallback } from 'react';

import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

type FlowNodeProps = {
  type: string;
  children: React.ReactNode;
};

function FlowNode(props: FlowNodeProps) {
  const { children, type } = props;

  const onDragStart = useCallback(
    (event: any) => {
      event.dataTransfer.setData('application/reactflow', type);
      event.dataTransfer.effectAllowed = 'move';
    },
    [type],
  );

  const [, drag, connectDrag] = useDrag({
    item: () => ({
      type,
    }),
    type,
    collect: (monitor: any) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  connectDrag(getEmptyImage(), { captureDraggingState: true });

  return (
    <div ref={drag} className="flow-node" onDragStart={onDragStart} draggable>
      {children}
    </div>
  );
}

export default FlowNode;
