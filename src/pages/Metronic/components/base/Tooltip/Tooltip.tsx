import React from 'react';

import { OverlayTrigger as BsOverlayTrigger, Tooltip as BsTooltip } from 'react-bootstrap';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import type { Placement } from 'react-bootstrap/esm/types';

type TooltipProps = {
  title: string;
  placement?: Placement;
  children: React.ReactElement;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
};

function Tooltip(props: TooltipProps) {
  const { title, children, trigger, placement } = props;
  return (
    <BsOverlayTrigger
      trigger={trigger}
      placement={placement}
      overlay={<BsTooltip>{title}</BsTooltip>}
    >
      {children}
    </BsOverlayTrigger>
  );
}

export default Tooltip;
