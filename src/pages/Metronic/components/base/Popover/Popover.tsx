import React, { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import { OverlayTrigger as BsOverlayTrigger, Popover as BsPopover } from 'react-bootstrap';
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import type { Placement } from 'react-bootstrap/esm/types';
import { useClickAway } from 'react-use';

import './style.scss';

type PopoverProps = {
  visible?: boolean;
  placement?: Placement;
  overlayClassName?: string;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
  title?: React.ReactNode;
  content: React.ReactNode;
  children: React.ReactElement;
  stopPropagation?: boolean;
};

function Popover(props: PopoverProps) {
  const {
    children,
    title,
    content,
    trigger = 'click',
    placement = 'right',
    overlayClassName,
    stopPropagation,
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(props.visible || false);

  const wrapRef = useCallback(
    (originalRef: any, localRef: any) => (ref: any) => {
      if (originalRef) {
        if (typeof originalRef === 'object') originalRef.current = ref;
        if (typeof originalRef === 'function') originalRef(ref);
      }
      localRef.current = ref;
    },
    [],
  );
  useEffect(() => {
    setVisible(!!props.visible);
  }, [props.visible]);

  useEffect(() => {
    const node = nodeRef.current;
    const eventName = Array.isArray(trigger) ? trigger[0] : trigger;
    if (!node) {
      return;
    }
    const handler = (e: any) => {
      setVisible((_v) => !_v);
      stopPropagation && e.stopPropagation();
    };
    node.addEventListener(eventName, handler);
    return () => {
      node.removeEventListener(eventName, handler);
    };
  }, [trigger, stopPropagation]);

  useClickAway(contentRef as any, (e) => {
    if (nodeRef.current?.contains(e.target as any)) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    setVisible(false);
  });

  return (
    <BsOverlayTrigger
      trigger={trigger}
      show={visible}
      placement={placement}
      overlay={
        <BsPopover className={classnames('asany-popover-overlay', overlayClassName)}>
          <div className="flex-column-fluid d-flex flex-column" ref={contentRef}>
            {title && <BsPopover.Header>{title}</BsPopover.Header>}
            <BsPopover.Body>{content}</BsPopover.Body>
          </div>
        </BsPopover>
      }
    >
      {React.cloneElement(children, { ref: wrapRef((children as any).ref, nodeRef) })}
    </BsOverlayTrigger>
  );
}

export default Popover;
