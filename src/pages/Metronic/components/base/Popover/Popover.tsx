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
  onVisibleChange?: (visible: boolean, e?: React.MouseEvent) => void;
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
    onVisibleChange,
    stopPropagation,
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(props.visible || false);

  const temp = useRef(visible);
  temp.current = visible;

  const [controlled] = useState(props.visible != null);

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
      if (!controlled) {
        setVisible((_v) => !_v);
      } else {
        onVisibleChange && onVisibleChange(!temp.current);
      }
      stopPropagation && e.stopPropagation();
    };
    node.addEventListener(eventName, handler);
    return () => {
      node.removeEventListener(eventName, handler);
    };
  }, [trigger, stopPropagation, onVisibleChange, controlled]);

  useClickAway(contentRef as any, (e) => {
    if (nodeRef.current?.contains(e.target as any)) {
      return;
    }
    // e.stopPropagation();
    // e.preventDefault();
    if (!controlled) {
      setVisible(false);
    } else {
      onVisibleChange && onVisibleChange(false, e as any);
    }
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
