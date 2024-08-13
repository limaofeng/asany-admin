import React from 'react';

import classnames from 'classnames';

import { MainColor } from '../typings';

type PulseProps = {
  children: React.ReactNode;
  pause?: boolean;
  className?: string;
  size?: 'lg' | 'sm' | 'xs';
  color?: MainColor;
  width?: 1 | 2 | 3 | 4 | 5;
};

function Pulse(props: PulseProps, ref: React.ForwardedRef<HTMLAnchorElement>) {
  const { children, size, pause = false, width, color, className } = props;
  return (
    <a
      ref={ref}
      className={classnames('btn btn-icon pulse', className, {
        [`btn-${size}`]: !!size,
        [`pulse-${color}`]: color,
      })}
    >
      {children}
      <span
        className={classnames('pulse-ring', {
          [`border-${width}`]: !pause && !!width,
          'border-0': pause,
        })}
      />
    </a>
  );
}

const PulseForwardRef = React.forwardRef(Pulse);

export default PulseForwardRef;
