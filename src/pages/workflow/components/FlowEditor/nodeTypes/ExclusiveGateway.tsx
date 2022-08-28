import type { NodeProps } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

function ExclusiveGateway({ data }: NodeProps) {
  // const onChange = useCallback((evt: any) => {
  //   console.log(evt.target.value);
  // }, []);

  console.log('data', data);

  return (
    <div className="text-updater-node selectable">
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default ExclusiveGateway;
