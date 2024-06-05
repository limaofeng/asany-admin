import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames';

function DrawerOverlay({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const container = document.body;

  // console.log('DrawerOverlay', visible, onClose);

  if (!visible) {
    return;
  }

  return ReactDOM.createPortal(
    <div className="drawer-overlay" onClick={onClose} />,
    container,
  );
}

type DrawerOptions = {
  placement?: 'right' | 'left';
  visible?: boolean;
};

function useDrawer(options: DrawerOptions): [
  React.ReactNode,
  {
    className: string;
    visible: boolean;
  },
] {
  const { placement = 'right' } = options;

  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    setVisible(!!options.visible);
  }, [options.visible]);

  const className = classnames('drawer', {
    'drawer-on': visible,
    'drawer-start': placement === 'left',
    'drawer-end': placement === 'right',
  });

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  // console.log('DrawerOverlay ===> ', visible);

  return [
    <DrawerOverlay
      visible={visible}
      onClose={handleClose}
      key="drawer-overlay"
    />,
    {
      visible,
      className,
    },
  ];
}

export default useDrawer;
