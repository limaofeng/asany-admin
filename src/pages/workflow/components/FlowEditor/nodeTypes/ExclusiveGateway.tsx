import { Icon } from '@asany/icons';
import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

import FlowNode from '../components/FlowNode';

function ExclusiveGateway({ data }: NodeProps) {
  // const onChange = useCallback((evt: any) => {
  //   console.log(evt.target.value);
  // }, []);

  console.log('data', data);

  return (
    <div className="inner-container">
      <div className="shape-diamond">
        <div>{data.label}</div>
      </div>
      <Handle type="target" position={Position.Top} style={{ top: -1 }} />
      <Handle type="source" position={Position.Bottom} style={{ bottom: -1 }} id="bottom" />
      {/* <Handle type="source" position={Position.Left} style={{ left: -1 }} id="left" /> */}
      {/* <Handle type="source" position={Position.Right} style={{ right: -1 }} id="right" /> */}
    </div>
  );
}

export const DragNodeOfExclusiveGateway = () => {
  return (
    <FlowNode type="ExclusiveGateway">
      <Icon name="Bootstrap/diamond" />
      排它网关
    </FlowNode>
  );
};

export default ExclusiveGateway;
