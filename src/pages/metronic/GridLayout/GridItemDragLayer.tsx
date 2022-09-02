import type { CSSProperties, FC } from 'react';
import ReactDOM from 'react-dom';

import { useDragLayer } from 'react-dnd';

import useSelector from './GridLayoutProvider';
import type { DragPreviewRenderer } from './typings';
import { getItemStyles } from './utils';

const layerStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

export interface CustomDragLayerProps {
  snapToGrid?: boolean;
  axisLocked?: boolean;
  render: DragPreviewRenderer;
  container?: Element | DocumentFragment;
}

const GridItemDragLayer: FC<CustomDragLayerProps> = (props) => {
  const sortableId = useSelector((state) => state.id);

  const { isDragging, item, itemType, initialOffset, rect, currentOffset } = useDragLayer(
    (monitor) => {
      const _item = monitor.getItem();
      return {
        rect: _item?._rect as DOMRect,
        item: _item,
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging:
          monitor.isDragging() &&
          _item?._originalSortable &&
          _item?._sortable &&
          sortableId == _item?._sortable,
      };
    },
  );

  if (!isDragging) {
    return null;
  }

  const dragLayer = (
    <div style={layerStyles}>
      {props.render(item, {
        style: {
          ...getItemStyles(initialOffset, currentOffset, !!props.snapToGrid),
          width: rect?.width,
          height: rect?.height,
        },
        type: itemType as string,
        rect: rect,
        sortableId,
      })}
    </div>
  );

  if (props.container) {
    return ReactDOM.createPortal(dragLayer, props.container);
  }

  return dragLayer;
};

export default GridItemDragLayer;
