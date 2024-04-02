import React from 'react';

import useMergedRef from '@react-hook/merged-ref';
import type { Placement } from '@restart/ui/usePopper';
import classnames from 'classnames';
import {
  OverlayTrigger as BsOverlayTrigger,
  Tooltip as BsTooltip,
} from 'react-bootstrap';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';

export type TooltipProps = {
  title?: React.ReactNode;
  placement?: Placement;
  stopPropagation?: boolean;
  inverse?: boolean;
  children: React.ReactElement;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
};

function Tooltip(props: TooltipProps, ref: React.Ref<HTMLElement>) {
  const { children, title, trigger, placement, inverse } = props;

  const multiRef = useMergedRef(ref, (children as any).ref);

  return (
    <BsOverlayTrigger
      trigger={trigger}
      placement={placement}
      flip={false}
      overlay={
        <BsTooltip className={classnames({ 'tooltip-inverse': inverse })}>
          {title}
        </BsTooltip>
      }
    >
      {React.cloneElement(children, { ref: multiRef })}
    </BsOverlayTrigger>
  );
}

const TooltipWrapper = React.forwardRef(Tooltip);

export default TooltipWrapper;
