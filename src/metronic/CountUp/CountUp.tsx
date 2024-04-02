import React, { useMemo, useRef } from 'react';
import { useCountUp } from 'react-countup';

type CountUpProps = {
  value: number;
  as?: string | React.ComponentType<any>;
  className?: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  children: number | string;
};

function CountUp(props: CountUpProps) {
  const {
    className,
    value,
    as = 'div',
    children,
    duration = 2,
    ...settings
  } = props;
  const ref = useRef<HTMLElement>(null);

  const startNumber = useMemo(() => {
    if (typeof children === 'number') {
      return children;
    }
    let _str = children;
    if (!!settings.prefix && children.startsWith(settings.prefix)) {
      _str = _str.substr(settings.prefix.length);
    }
    if (!!settings.suffix && children.endsWith(settings.suffix)) {
      _str = _str.substr(0, _str.length - settings.suffix.length);
    }
    return parseInt(_str, 10);
  }, [children, settings.prefix, settings.suffix]);

  const { start, pauseResume, reset, update } = useCountUp({
    ref,
    end: value,
    start: startNumber,
    duration,
    ...settings,
  });

  if (typeof as === 'string') {
    return React.createElement(as, { ref, className });
  }

  return React.createElement(as, {
    start,
    pauseResume,
    reset,
    update,
    ref,
    className,
  });
}

export default CountUp;
