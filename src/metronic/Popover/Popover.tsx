import React, { useEffect, useRef, useState } from 'react';

import useMergedRef from '@react-hook/merged-ref';
import classnames from 'classnames';
import { OverlayTrigger as BsOverlayTrigger, Popover as BsPopover } from 'react-bootstrap';
import type { OverlayDelay, OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import type { Placement } from 'react-bootstrap/esm/types';
import { useClickAway } from 'react-use';

import './style.scss';

type PopoverProps = {
  visible?: boolean;
  placement?: Placement;
  overlayClassName?: string;
  zIndex?: number;
  delay?: OverlayDelay;
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
    delay,
    overlayClassName,
    onVisibleChange,
    zIndex,
    stopPropagation,
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(props.visible || false);

  const temp = useRef(visible);
  temp.current = visible;

  const [controlled] = useState(props.visible != null);

  const multiRef = useMergedRef(nodeRef, (children as any).ref);

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
        onVisibleChange && onVisibleChange(!temp.current, e);
      }
      stopPropagation && e.stopPropagation();
    };
    node.addEventListener(eventName, handler);
    return () => {
      node.removeEventListener(eventName, handler);
    };
  }, [trigger, stopPropagation, onVisibleChange, controlled]);

  useClickAway(contentRef as any, (e) => {
    const target = e.target!;
    const _tar = document.querySelector('.modal');
    if (
      nodeRef.current?.contains(e.target as any) ||
      target == _tar ||
      _tar?.contains(target as any)
    ) {
      // ignore click
      return;
    }
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
      delay={delay}
      placement={placement}
      overlay={
        <BsPopover
          style={{ zIndex }}
          className={classnames('asany-popover-overlay', overlayClassName)}
        >
          <div className="flex-column-fluid d-flex flex-column" ref={contentRef}>
            {title && <BsPopover.Header>{title}</BsPopover.Header>}
            <BsPopover.Body>{content}</BsPopover.Body>
          </div>
        </BsPopover>
      }
    >
      {React.cloneElement(children, { ref: multiRef })}
    </BsOverlayTrigger>
  );
}

export default Popover;
