import React, { useEffect, useRef, useState } from 'react';
import {
  OverlayTrigger as BsOverlayTrigger,
  Popover as BsPopover,
} from 'react-bootstrap';
import { useClickAway } from 'react-use';

import useMergedRef from '@react-hook/merged-ref';
import type { OverlayArrowProps } from '@restart/ui/Overlay';
import type { Offset } from '@restart/ui/usePopper';
import classnames from 'classnames';
import type {
  OverlayDelay,
  OverlayTriggerType,
} from 'react-bootstrap/esm/OverlayTrigger';
import type { Placement } from 'react-bootstrap/esm/types';

import './style.scss';

type PopoverProps = {
  visible?: boolean;
  placement?: Placement;
  overlayClassName?: string;
  zIndex?: number;
  delay?: OverlayDelay;
  offset?: Offset;
  onVisibleChange?: (visible: boolean) => void;
  trigger?: OverlayTriggerType | OverlayTriggerType[] | 'contextMenu';
  title?: React.ReactNode;
  content: React.ReactNode;
  children: React.ReactElement;
  stopPropagation?: boolean;
  arrowProps?: Partial<OverlayArrowProps>;
};

function getOffsetLeft(o: HTMLElement, parent: HTMLElement = document.body) {
  let left = 0;
  let offsetParent = o;
  while (offsetParent !== null && offsetParent !== parent) {
    if (getComputedStyle(offsetParent).position === 'absolute') {
      left += offsetParent.offsetLeft;
    }
    offsetParent = offsetParent.offsetParent as HTMLElement;
  }

  return left;
}

function getOffsetTop(o: HTMLElement, parent: HTMLElement = document.body) {
  let top = 0;
  let offsetParent = o;
  while (offsetParent !== null && offsetParent !== parent) {
    if (getComputedStyle(offsetParent).position === 'absolute') {
      top += offsetParent.offsetTop;
    }
    offsetParent = offsetParent.offsetParent as HTMLElement;
  }

  return top;
}

function Popover(props: PopoverProps) {
  const {
    children,
    title,
    content,
    trigger = 'click',
    placement = trigger === 'contextMenu' ? 'right-start' : 'right',
    arrowProps,
    delay,
    overlayClassName,
    onVisibleChange,
    zIndex,
    stopPropagation,
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(props.visible || false);
  const [offset, setOffset] = useState<Offset | undefined>(props.offset);

  const temp = useRef(visible);
  temp.current = visible;

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
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-unused-expressions
      onVisibleChange
        ? onVisibleChange(!temp.current)
        : setVisible((_v) => !_v);
      stopPropagation && e.stopPropagation();
    };
    node.addEventListener(eventName, handler);
    return () => {
      node.removeEventListener(eventName, handler);
    };
  }, [trigger, stopPropagation, onVisibleChange]);

  useClickAway(contentRef as any, (e) => {
    const target = e.target!;
    const _tar = document.querySelector('.modal');
    if (
      nodeRef.current?.contains(e.target as any) ||
      target === _tar ||
      _tar?.contains(target as any)
    ) {
      // ignore click
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-unused-expressions
    onVisibleChange ? onVisibleChange(false) : setVisible(false);
  });

  useEffect(() => {
    if (trigger !== 'contextMenu') {
      return;
    }
    nodeRef.current?.addEventListener('click', (e: any) => {
      const x = (getOffsetLeft(e.target, nodeRef.current!) +
        e.layerX) as number;
      const y = (getOffsetTop(e.target, nodeRef.current!) + e.layerY) as number;
      setOffset([
        y - nodeRef.current!.offsetTop,
        x - nodeRef.current!.offsetWidth,
      ]);

      console.log(
        'xxxxx',
        [y - nodeRef.current!.offsetTop, x - nodeRef.current!.offsetWidth],
        nodeRef.current!.offsetHeight,
        nodeRef.current!.offsetTop,
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-unused-expressions
      onVisibleChange ? onVisibleChange(true) : setVisible(true);
      e.stopPropagation();
      e.preventDefault();
    });
  }, [onVisibleChange, trigger, visible]);

  return (
    <BsOverlayTrigger
      trigger={trigger === 'contextMenu' ? undefined : trigger}
      show={visible}
      delay={delay}
      offset={offset}
      placement={placement}
      overlay={
        <BsPopover
          style={{ zIndex }}
          arrowProps={arrowProps}
          className={classnames('asany-popover-overlay', overlayClassName)}
        >
          <div
            className="flex-column-fluid d-flex flex-column"
            ref={contentRef}
          >
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
