import { useCallback } from 'react';

import { Icon } from '@asany/icons';
import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

import useDelete from '../tools/useDelete';

function UserTask({ data, ...props }: NodeProps) {
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
      <Handle type="target" position={Position.Top} />
      <div className="react-flow__node-header">
        <div className="react-flow__node-icon">
          <Icon name="Bootstrap/person-workspace" />
        </div>
        <div className="react-flow__node-title">审批</div>
        <div onClick={handleDelete} className="react-flow__node-header__delete">
          <Icon name="Bootstrap/x" />
        </div>
      </div>
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Right} id="right" />
    </div>
  );
}

UserTask.info = {
  icon: 'Bootstrap/person-workspace',
  type: 'UserTask',
  name: '用户任务',
};

export default UserTask;
