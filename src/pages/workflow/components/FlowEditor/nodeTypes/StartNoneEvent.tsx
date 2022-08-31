import { Icon } from '@asany/icons';
import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

import FlowNode from '../components/FlowNode';

function StartNoneEvent(props: NodeProps) {
  // const onChange = useCallback((evt: any) => {
  //   console.log(evt.target.value);
  // }, []);

  console.log('data', props);

  return (
    <div className="text-updater-node selectable">
      <div className="react-flow__node-header">
        <div className="react-flow__node-icon">
          <Icon name="Bootstrap/play-fill" />
        </div>
        <div className="react-flow__node-title">开始</div>
      </div>
      <div>{props.data?.label}</div>
      <Handle type="source" position={Position.Bottom} />
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
