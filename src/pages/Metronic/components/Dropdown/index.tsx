import * as React from 'react';
import RcDropdown from 'rc-dropdown';

interface DropdownProps {
  children: React.ReactElement;
  trigger?: string;
  overlay: React.ReactElement;
  onVisibleChange?: (visible: boolean) => void;
}

function Dropdown(props: DropdownProps) {
  const { children, overlay, trigger = 'click', onVisibleChange } = props;
  return (
    <RcDropdown
      trigger={[trigger]}
      overlay={overlay}
      animation="slide-up"
      onVisibleChange={onVisibleChange}
    >
      {children}
    </RcDropdown>
  );
}

export default Dropdown;
