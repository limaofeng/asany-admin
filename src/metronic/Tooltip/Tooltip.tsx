import React, { useRef } from 'react';

import useMergedRef from '@react-hook/merged-ref';
import type { Placement } from '@restart/ui/usePopper';
import { OverlayTrigger as BsOverlayTrigger, Tooltip as BsTooltip } from 'react-bootstrap';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import classnames from 'classnames';

export type TooltipProps = {
  title?: React.ReactNode;
  placement?: Placement;
  stopPropagation?: boolean;
  inverse?: boolean;
  children: React.ReactElement;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
};

function Tooltip(props: TooltipProps, ref: any) {
  const { children, title, trigger, placement, inverse, ...otherProps } = props;

  const nodeRef = useRef<HTMLDivElement>(null);

  const multiRef = useMergedRef(ref, nodeRef, (children as any).ref);

  if (!title) {
    return children;
  }

  return (
    <BsOverlayTrigger
      trigger={trigger}
      placement={placement}
      flip={false}
      overlay={
        <BsTooltip className={classnames({ 'tooltip-inverse': inverse })}>{title}</BsTooltip>
      }
    >
      {React.cloneElement(children, {
        ...otherProps,
        ref: multiRef,
      })}
    </BsOverlayTrigger>
  );
}

const TooltipWrapper = React.forwardRef(Tooltip);

export default TooltipWrapper;
