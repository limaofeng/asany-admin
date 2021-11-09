import React from 'react';

import { OverlayTrigger as BsOverlayTrigger, Tooltip as BsTooltip } from 'react-bootstrap';
import type { Placement } from '@restart/ui/usePopper';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';

export type TooltipProps = {
  title?: React.ReactNode;
  trigger?: OverlayTriggerType;
  placement?: Placement;
  children: React.ReactElement;
};

function Tooltip(props: TooltipProps) {
  const { children, title, trigger, placement } = props;

  if (!title) {
    return children;
  }

  return (
    <BsOverlayTrigger
      trigger={trigger}
      placement={placement}
      overlay={<BsTooltip>{title}</BsTooltip>}
    >
      {children!}
    </BsOverlayTrigger>
  );
}

export default Tooltip;
