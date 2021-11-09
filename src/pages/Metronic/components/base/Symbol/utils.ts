import { useMemo } from 'react';

import classnames from 'classnames';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Sizes =
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 100
  | 125
  | 150
  | 160
  | 175
  | 200;

export type SymbolSize = Sizes | Record<Breakpoint, Sizes>;

export function useSymbolSize(size?: SymbolSize) {
  return useMemo(() => {
    if (!size) {
      return undefined;
    }
    if (typeof size === 'number') {
      return `symbol-${size}px`;
    }
    return classnames(
      ...Object.keys(size).map((breakpoint) => `symbol-${breakpoint}-${size[breakpoint]}px`),
    );
  }, [size]);
}
