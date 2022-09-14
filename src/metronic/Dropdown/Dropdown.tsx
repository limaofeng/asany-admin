import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Shortcuts } from '@asany/shortcuts';
import classnames from 'classnames';
import { useClickAway } from 'react-use';
import useMergedRef from '@react-hook/merged-ref';

import Menu from '../Menu';
import * as KTMenu from '../utils/KTMenu';
import * as KTUtil from '../utils/KTUtil';
import type { OffsetValue } from '../utils/KTMenu';

import './Dropdown.scss';

export type Placement =
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'rightStart';

type DropdownProps = {
  trigger?: 'click' | 'hover';
  visible?: boolean;
  placement?: Placement;
  className?: string;
  overlay: React.ReactElement;
  zindex?: number;
  offset?: OffsetValue;
  onVisibleChange?: (visible: boolean) => void;
  children: React.ReactNode;
  getPopupContainer?: () => Element;
};

type DropdownOverlayProps = {
  visible: boolean;
  children: React.ReactNode;
  getPopupContainer?: () => Element;
};

function DropdownOverlay(props: DropdownOverlayProps) {
  const { visible, children, getPopupContainer } = props;

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  if (!visible) {
    return <React.Fragment />;
  }

  const childrenWrapper = (
    <div onClick={handleClick} className="dropdown-overlay">
      {children}
    </div>
  );

  if (!getPopupContainer) {
    return childrenWrapper;
  }
  const container = getPopupContainer();
  if (!container) {
    return childrenWrapper;
  }

  return ReactDOM.createPortal(childrenWrapper, container) as any;
}

const placementMapping = {
  bottomLeft: 'bottom-start',
  bottomRight: 'bottom-end',
  bottomCenter: 'bottom',
  topLeft: 'top-start',
  topCenter: 'top',
  topRight: 'top-end',
  rightStart: 'right-start',
};

function Dropdown(props: DropdownProps) {
  const {
    children,
    className,
    overlay,
    onVisibleChange,
    trigger = 'click',
    getPopupContainer,
  } = props;

  const itemRef = useRef<HTMLElement>();
  const subRef = useRef<any>();
  const [visible, setVisible] = useState(props.visible);

  const node = React.Children.only(children);

  const handleVisible = useCallback(() => {
    setVisible((_visible) => {
      onVisibleChange && onVisibleChange(!_visible);
      return !_visible;
    });
  }, [onVisibleChange]);

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleClick = useCallback(
    (onClick: (e: any) => void) => (e: any) => {
      onClick && onClick(e);
      if (React.Children.only(overlay).type === Menu) {
        setVisible(false);
      }
    },
    [overlay],
  );

  useEffect(() => {
    if (props.visible != visible) {
      setVisible(props.visible);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);

  useEffect(() => {
    const item = itemRef.current! as any;
    const sub = subRef.current! as any;

    if (visible) {
      const width = KTMenu.getItemOption(item, 'width');
      const height = KTMenu.getItemOption(item, 'height');

      let zindex = props.zindex || 0;
      const parentZindex = KTUtil.getHighestZindex(item);

      if (parentZindex !== null && parentZindex >= zindex) {
        zindex = parentZindex + 1;
      }

      if (zindex > 0) {
        KTUtil.css(sub, 'z-index', zindex);
      }

      if (width !== null) {
        KTUtil.css(sub, 'width', width);
      }

      if (height !== null) {
        KTUtil.css(sub, 'height', height);
      }

      KTUtil.css(sub, 'display', '');
      KTUtil.css(sub, 'overflow', '');

      // Init popper(new)
      KTMenu.initDropdownPopper(
        item,
        sub,
        placementMapping[props.placement || 'bottomLeft'],
        props.offset,
      );

      KTUtil.addClass(item, 'show');
      KTUtil.addClass(item, 'menu-dropdown');
      KTUtil.addClass(sub, 'show');
    } else {
      KTUtil.css(sub, 'z-index', '');
      KTUtil.css(sub, 'width', '');
      KTUtil.css(sub, 'height', '');

      KTUtil.removeClass(item, 'show');
      KTUtil.removeClass(item, 'menu-dropdown');
      KTUtil.removeClass(sub, 'show');

      // Destroy popper(new)
      KTMenu.destroyDropdownPopper(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useClickAway(subRef as any, (e) => {
    if (itemRef.current!.contains(e.target as any)) {
      return;
    }
    setVisible(false);
  });

  const handleExit = useCallback((action: string) => {
    if (action === 'EXIT') {
      setVisible(false);
      (itemRef.current as any).blur();
    }
  }, []);

  const handleMouseOver = useCallback(() => {
    onVisibleChange && onVisibleChange(true);
    setVisible(true);
  }, [onVisibleChange]);

  const handleMouseOut = useCallback(() => {
    onVisibleChange && onVisibleChange(false);
    setVisible(false);
  }, [onVisibleChange]);

  useClickAway(
    itemRef as any,
    (e) => {
      const target = e.target!;
      if (trigger == 'hover' && !subRef.current?.contains(target)) {
        handleMouseOut();
      }
    },
    ['mousemove'],
  );

  const targetProps = useMemo(() => {
    const _targetProps: any = {};
    if (trigger == 'click') {
      _targetProps.onClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if ((node as any).props.onClick) {
          (node as any).props.onClick(e);
        }
        handleVisible();
      };
    } else if (trigger == 'hover') {
      _targetProps.onMouseOver = handleMouseOver;
    }
    return _targetProps;
  }, [handleMouseOver, handleVisible, node, trigger]);

  const multiRef = useMergedRef(overlay ? (overlay as any).ref : undefined, subRef);

  const mergeProps = useCallback((element: any, overlayProps: any) => {
    if (typeof element.type == 'string') {
      delete overlayProps.closeDropdown;
      delete overlayProps.dropdown;
      delete overlayProps.selectedKeys;
    }
    return {
      ...overlayProps,
      className: classnames(element.props.className, overlayProps.className),
    };
  }, []);

  const shortcutsRef = useMergedRef((node as any).ref, itemRef);

  return (
    <React.Fragment>
      <Shortcuts
        tag={React.cloneElement(node as React.ReactElement, {
          ref: shortcutsRef,
          ...targetProps,
        })}
        name="DROPDOWN"
        handler={handleExit}
      />
      <DropdownOverlay visible={!!visible} getPopupContainer={getPopupContainer}>
        {visible &&
          React.cloneElement(overlay, {
            ...mergeProps(overlay as any, {
              dropdown: true,
              className,
              closeDropdown: handleClose,
              onClick: handleClick(overlay.props.onClick),
              selectedKeys: [],
            }),
            ref: multiRef,
          })}
      </DropdownOverlay>
    </React.Fragment>
  );
}

export default Dropdown;
