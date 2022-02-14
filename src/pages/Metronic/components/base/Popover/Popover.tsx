import { OverlayTrigger as BsOverlayTrigger, Popover as BsPopover } from 'react-bootstrap';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import type { Placement } from 'react-bootstrap/esm/types';

type PopoverProps = {
  visible?: boolean;
  placement?: Placement;
  overlayClassName?: string;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
  content: React.ReactNode;
  children: React.ReactElement;
};

function Popover(props: PopoverProps) {
  const {
    visible,
    children,
    content,
    trigger = 'click',
    placement = 'right',
    overlayClassName,
  } = props;
  return (
    <BsOverlayTrigger
      trigger={trigger}
      show={visible}
      placement={placement}
      overlay={
        <BsPopover className={overlayClassName}>
          <BsPopover.Body>{content}</BsPopover.Body>
        </BsPopover>
      }
    >
      {children}
    </BsOverlayTrigger>
  );
}

export default Popover;
