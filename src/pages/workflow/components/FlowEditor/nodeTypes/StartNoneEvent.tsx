import { useCallback } from 'react';

import { Icon } from '@asany/icons';
import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

import FlowNode from '../components/FlowNode';
import useDelete from '../tools/useDelete';

function StartNoneEvent(props: NodeProps) {
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
          <Icon name="Bootstrap/play-fill" />
        </div>
        <div className="react-flow__node-title">开始</div>
        <div onClick={handleDelete} className="react-flow__node-header__delete">
          <Icon name="Bootstrap/x" />
        </div>
      </div>
      <div>{props.data?.label}</div>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Right} id="right" />
    </div>
  );
}

export const DragNodeOfStartNoneEvent = () => {
  return (
    <FlowNode type="StartNoneEvent">
      <Icon name="Bootstrap/play-fill" />
      开始
    </FlowNode>
  );
};

export default StartNoneEvent;
