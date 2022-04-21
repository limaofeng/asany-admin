import { useMemo } from 'react';

import classnames from 'classnames';

import type { Breakpoint } from './utils';
import { getResponsiveClassNames } from './utils';

type GutterResponsive = Breakpoint;

type Gutter = number | [number, number] | GutterResponsive;

type Cols = {
  default?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

type RowProps = {
  wrap?: boolean;
  gutter?: Gutter;
  cols: number | Cols;
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  children: React.ReactNode;
};

function Row(props: RowProps) {
  const { wrap, gutter, align, justify, children, cols } = props;

  (wrap || align || justify) && console.warn('暂不支持 wrap, align, justify 设置');

  const gutterStyle = useMemo(() => {
    if (!gutter) {
      return;
    }
    if (typeof gutter == 'number') {
      return `g-${gutter}`;
    }
    if (Array.isArray(gutter)) {
      return classnames({
        [`gx-${gutter[0]}`]: gutter.length > 0,
        [`gy-${gutter[1]}`]: gutter.length > 1,
      });
    }
    return getResponsiveClassNames('g', gutter);
  }, [gutter]);

  const colsClassNames = useMemo(() => {
    if (!cols) {
      return;
    }
    if (typeof cols == 'number') {
      return `row-cols-${cols}`;
    }
    return getResponsiveClassNames('row-cols', cols);
  }, [cols]);

  return <div className={classnames('row', gutterStyle, colsClassNames)}>{children}</div>;
}

export default Row;
