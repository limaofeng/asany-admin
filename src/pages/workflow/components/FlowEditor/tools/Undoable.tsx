import type { AsanyTool, AsanyToolProps } from '@asany/sunmao';
import classnames from 'classnames';

import { useFlowTools } from '../FlowContext';

export function Undo(props: AsanyToolProps & { item: AsanyTool }) {
  const { className, style, children } = props;

  const { canUndo, undo } = useFlowTools();

  return (
    <a
      onClick={undo}
      className={classnames('toolbar-icon', className, {
        disabled: !canUndo,
      })}
      style={style}
    >
      {children}
    </a>
  );
}

export function Redo(props: AsanyToolProps & { item: AsanyTool }) {
  const { className, style, children } = props;

  const { canRedo, redo } = useFlowTools();

  return (
    <a
      onClick={redo}
      className={classnames('toolbar-icon', className, {
        disabled: !canRedo,
      })}
      style={style}
    >
      {children}
    </a>
  );
}
