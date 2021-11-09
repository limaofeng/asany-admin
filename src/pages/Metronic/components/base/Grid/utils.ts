import { useMemo } from 'react';

import classnames from 'classnames';

export type Breakpoint = {
  /**
   * 超小 < 576px
   */
  xs?: number | [number, number];
  /**
   * 小的 ≥ 576px
   */
  sm?: number | [number, number];
  /**
   * 中等的 ≥ 768px
   */
  md?: number | [number, number];
  /**
   * 大的 ≥ 992px
   */
  lg?: number | [number, number];
  /**
   * 特大号 ≥ 1200px
   */
  xl?: number | [number, number];
  /**
   * 特大号 ≥ 1400px
   */
  xxl?: number | [number, number];
};

export function useResponsive(prefix: string, config: Breakpoint) {
  return useMemo(() => {
    return classnames(
      ...Object.keys(config).map((name) => {
        const value = config[name];
        if (typeof value == 'number') {
          return [`${prefix}-${name}-${config[name]}`];
        }
        return {
          [`${prefix}x-${name}-${value[0]}`]: value.length > 0,
          [`${prefix}y-${name}-${value[1]}`]: value.length > 1,
        };
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.xs, config.sm, config.md, config.lg, config.xl, config.xxl]);
}
