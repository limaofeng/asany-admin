import React, { useRef } from 'react';

import { OverlayTrigger as BsOverlayTrigger, Tooltip as BsTooltip } from 'react-bootstrap';
import type { Placement } from '@restart/ui/usePopper';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import useMergedRef from '@react-hook/merged-ref';

export type TooltipProps = {
  title?: React.ReactNode;
  placement?: Placement;
  children: React.ReactElement;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
};

function Tooltip(props: TooltipProps, ref: any) {
  const { children, title, trigger, placement, ...otherProps } = props;

  const nodeRef = useRef<HTMLDivElement>(null);

  const multiRef = useMergedRef(ref, nodeRef, (children as any).ref);

  if (!title) {
    return children;
  }

  return (
    <BsOverlayTrigger
      trigger={trigger}
      placement={placement}
      overlay={<BsTooltip>{title}</BsTooltip>}
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
