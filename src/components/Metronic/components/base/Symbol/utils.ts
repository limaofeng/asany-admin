import { useMemo } from 'react';

import classnames from 'classnames';

import type { SymbolSize } from './typings';

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
