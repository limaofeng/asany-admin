import { Icon } from '@asany/icons';
import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

function ExclusiveGateway({ data }: NodeProps) {
  // const onChange = useCallback((evt: any) => {
  //   console.log(evt.target.value);
  // }, []);

  console.log('data', data);

  return (
    <div className="inner-container">
      <div className="shape-diamond react-flow__node-header">
        <div>
          <Icon name="Bootstrap/plus" />
        </div>
      </div>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Right} id="right" />
    </div>
  );
}

ExclusiveGateway.info = {
  icon: 'Bootstrap/diamond',
  type: 'ExclusiveGateway',
  name: '排它网关',
};

export default ExclusiveGateway;
