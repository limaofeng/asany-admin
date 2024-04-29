import type { CSSProperties } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import Button from '../Button';
import Card from '../Card';

import './style.scss';

type OnClose = () => void;

type GetContainer = () => HTMLElement;

type DrawerProps = {
  title?: string;
  closable?: boolean;
  placement?: 'right' | 'left';
  width?: number;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  destroyOnClose?: boolean;
  onClose?: OnClose;
  getContainer?: GetContainer;
  visible?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
  forceRender?: boolean;
  className?: string;
};

function runGetContainer(getContainer?: GetContainer) {
  if (getContainer) {
    return getContainer();
  }
  return null;
}

/* class Drawer extends React.Component<DrawerProps> {
  el: HTMLDivElement;
  constructor(props: DrawerProps) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    const container = runGetContainer(this.props.getContainer);
    container && container.appendChild(this.el);
  }
  componentWillUnmount() {
    const container = runGetContainer(this.props.getContainer);
    container && container.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
} */

type DrawerContainerProps = DrawerProps;

function DrawerContainer(props: DrawerContainerProps) {
  const {
    children,
    width = 378,
    title,
    placement,
    mask = true,
    bodyStyle,
    forceRender = false,
    closable = true,
    maskClosable = true,
    maskStyle,
    onClose,
    footer,
  } = props;

  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.visible === visible) {
      return;
    }
    const timer = setTimeout(() => {
      setVisible(!!props.visible);
    }, 0);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);

  useEffect(() => {
    if (!visible || !mask) {
      return;
    }
    const cssText = document.body.style.cssText;
    document.body.style.cssText += 'touch-action: none; overflow: hidden;';
    return () => {
      document.body.style.cssText = cssText;
    };
  }, [mask, visible]);

  return (
    <>
      <div
        style={{ width }}
        className={classnames('bg-white drawer', props.className, {
          'drawer-on': visible,
          'drawer-start': placement === 'left',
          'drawer-end': placement === 'right',
        })}
      >
        <Card className="rounded-0 w-100">
          {title && closable && (
            <Card.Header className="pe-5">
              <Card.Title>{title}</Card.Title>
              <Card.Toolbar>
                <Button
                  variant={false}
                  onClick={handleClose}
                  activeColor="light-primary"
                  icon={<Icon className="svg-icon-2" name="Duotune/arr061" />}
                />
              </Card.Toolbar>
            </Card.Header>
          )}
          <Card.Body style={bodyStyle} className="overflow-auto">
            {(forceRender || visible) && children}
          </Card.Body>
          {footer && <Card.Footer>{footer}</Card.Footer>}
        </Card>
      </div>
      {mask && visible && (
        <div
          className="drawer-overlay"
          style={maskStyle}
          onClick={maskClosable ? handleClose : undefined}
        />
      )}
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Drawer({ getContainer, destroyOnClose, ...props }: DrawerProps) {
  const mountPoint = useMemo(() => {
    return runGetContainer(getContainer);
  }, [getContainer]);

  useEffect(() => {}, [mountPoint]);

  const drawer = <DrawerContainer {...props} />;

  return mountPoint ? ReactDOM.createPortal(drawer, mountPoint) : drawer;
}

export default React.memo(Drawer);
