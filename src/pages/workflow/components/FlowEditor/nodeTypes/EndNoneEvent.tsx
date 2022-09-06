import { useCallback } from 'react';

import { Icon } from '@asany/icons';
import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

import useDelete from '../tools/useDelete';

function EndNoneEvent({ data, ...props }: NodeProps) {
  const { removeNode } = useDelete();

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      removeNode(props.id);
    },
    [props.id, removeNode],
  );

  return (
    <div className="text-updater-node selectable">
      <div className="react-flow__node-header">
        <div className="react-flow__node-icon">
          <Icon name="Bootstrap/stop-circle" />
        </div>
        <div className="react-flow__node-title">结束</div>
        <div onClick={handleDelete} className="react-flow__node-header__delete">
          <Icon name="Bootstrap/x" />
        </div>
      </div>
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="target" position={Position.Right} id="right" />
    </div>
  );
}

EndNoneEvent.info = {
  icon: 'Bootstrap/stop-circle',
  type: 'EndNoneEvent',
  name: '结束',
};

export default EndNoneEvent;
