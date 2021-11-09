import { useMemo } from 'react';

import classnames from 'classnames';

import type { Breakpoint } from './utils';
import { useResponsive } from './utils';

type Gutter = number | [number, number];

type RowProps = {
  wrap?: boolean;
  gutter?: Gutter;
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  children: React.ReactNode;
} & Breakpoint;

function Row(props: RowProps) {
  const { wrap, gutter, align, justify, children, ...responsive } = props;

  const gutterStyle = useMemo(() => {
    if (!gutter) {
      return;
    }
    if (typeof gutter == 'number') {
      return `g-${gutter}`;
    }
    return classnames({
      [`gx-${gutter[0]}`]: gutter.length > 0,
      [`gy-${gutter[1]}`]: gutter.length > 1,
    });
  }, [gutter]);

  const responsiveStyle = useResponsive('g', responsive);

  return <div className={classnames('row', gutterStyle, responsiveStyle)}>{children}</div>;
}

export default Row;
