import React, { useEffect, useRef, useState } from 'react';

import useMergedRef from '@react-hook/merged-ref';
import classnames from 'classnames';
import { OverlayTrigger as BsOverlayTrigger, Popover as BsPopover } from 'react-bootstrap';
import type { OverlayDelay, OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import type { Placement } from 'react-bootstrap/esm/types';
import type { OverlayArrowProps } from '@restart/ui/Overlay';
import { useClickAway } from 'react-use';
import type { Offset } from '@restart/ui/usePopper';

import './style.scss';

type PopoverProps = {
  visible?: boolean;
  placement?: Placement;
  overlayClassName?: string;
  zIndex?: number;
  delay?: OverlayDelay;
  onVisibleChange?: (visible: boolean, e?: React.MouseEvent) => void;
  trigger?: OverlayTriggerType | OverlayTriggerType[] | 'contextMenu';
  title?: React.ReactNode;
  content: React.ReactNode;
  children: React.ReactElement;
  stopPropagation?: boolean;
  arrowProps?: Partial<OverlayArrowProps>;
};

function Popover(props: PopoverProps) {
  const {
    children,
    title,
    content,
    trigger = 'click',
    placement = trigger == 'contextMenu' ? 'right-start' : 'right',
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
  const [offset, setOffset] = useState<Offset | undefined>();

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

  // const initOffset: OffsetFunction = useCallback((details: any) => {
  //   console.log('initOffset', details);
  //   return [0, 0];
  // }, []);

  useEffect(() => {
    if (trigger != 'contextMenu') {
      return;
    }
    nodeRef.current?.addEventListener('contextmenu', (e: any) => {
      const x = (getOffsetLeft(e.target, nodeRef.current!) + e.layerX) as number;
      const y = (getOffsetTop(e.target, nodeRef.current!) + e.layerY) as number;
      setOffset([y - 6, x - nodeRef.current!.offsetWidth]);
      setVisible(true);
      e.stopPropagation();
      e.preventDefault();
    });
  }, [trigger, visible]);

  return (
    <BsOverlayTrigger
      trigger={trigger == 'contextMenu' ? undefined : trigger}
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

function getOffsetLeft(o: HTMLElement, parent: HTMLElement = document.body) {
  let left = 0;
  let offsetParent = o;
  while (offsetParent != null && offsetParent != parent) {
    if (getComputedStyle(offsetParent).position == 'absolute') {
      left += offsetParent.offsetLeft;
    }
    offsetParent = offsetParent.offsetParent as HTMLElement;
  }

  return left;
}

function getOffsetTop(o: HTMLElement, parent: HTMLElement = document.body) {
  let top = 0;
  let offsetParent = o;
  while (offsetParent != null && offsetParent != parent) {
    if (getComputedStyle(offsetParent).position == 'absolute') {
      top += offsetParent.offsetTop;
    }
    offsetParent = offsetParent.offsetParent as HTMLElement;
  }

  return top;
}

export default Popover;
