import React from 'react';

import { OverlayTrigger as BsOverlayTrigger, Tooltip as BsTooltip } from 'react-bootstrap';
import type { Placement } from '@restart/ui/usePopper';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';

export type TooltipProps = {
  title?: string;
  placement?: Placement;
  children: React.ReactElement;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
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
