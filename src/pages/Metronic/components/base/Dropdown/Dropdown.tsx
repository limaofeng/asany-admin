import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useClickAway } from 'react-use';

import * as KTMenu from '../../utils/KTMenu';
import * as KTUtil from '../../utils/KTUtil';

import './Dropdown.scss';

type DropdownProps = {
  trigger?: string;
  visible?: boolean;
  placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
  overlay: React.ReactElement;
  zindex?: number;
  onVisibleChange?: (visible: boolean) => void;
  children: React.ReactNode;
};

const placementMapping = {
  bottomLeft: 'bottom-start',
  bottomRight: 'bottom-end',
};

function Dropdown(props: DropdownProps) {
  const { children, overlay, onVisibleChange } = props;

  const itemRef = useRef();
  const subRef = useRef();
  const [visible, setVisible] = useState(props.visible);

  const node = React.Children.only(children);

  const handleVisible = useCallback(() => {
    setVisible((_visible) => {
      onVisibleChange && onVisibleChange(!_visible);
      return !_visible;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      KTMenu.initDropdownPopper(item, sub, placementMapping[props.placement || 'bottomLeft']);

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

  useClickAway(subRef as any, () => {
    setVisible(false);
  });

  return (
    <>
      {React.cloneElement(node as React.ReactElement, {
        onClick: handleVisible,
        ref: itemRef,
      })}
      {visible &&
        React.cloneElement(overlay, {
          ref: subRef,
          selectedKeys: [],
        })}
    </>
  );
}

export default Dropdown;
