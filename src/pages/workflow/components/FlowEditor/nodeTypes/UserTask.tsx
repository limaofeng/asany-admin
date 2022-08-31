import { Icon } from '@asany/icons';
import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

import FlowNode from '../components/FlowNode';

function UserTask({ data }: NodeProps) {
  // const onChange = useCallback((evt: any) => {
  //   console.log(evt.target.value);
  // }, []);

  console.log('data', data);

  return (
    <div className="text-updater-node selectable">
      <Handle type="target" position={Position.Top} />
      <div className="react-flow__node-header">
        <div className="react-flow__node-icon">
          <Icon name="Bootstrap/person-workspace" />
        </div>
        <div className="react-flow__node-title">审批</div>
      </div>
      <div>{data.label}</div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export const DragNodeOfUserTask = () => {
  return (
    <FlowNode type="UserTask">
      <Icon name="Bootstrap/person-workspace" />
      用户任务
    </FlowNode>
  );
};

export default UserTask;
