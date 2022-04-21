import { useMemo } from 'react';

import classnames from 'classnames';

export type Breakpoint = {
  default?: number | [number, number];
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

export function getResponsiveClassNames(prefix: string, config: Breakpoint) {
  return classnames(
    ...Object.keys(config)
      .filter((name) => ['default', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(name))
      .map((name) => {
        const value = config[name];
        const _name = name == 'default' ? '' : `-${name}`;
        if (typeof value == 'number') {
          return [`${prefix}${_name}-${config[name]}`];
        }
        return {
          [`${prefix}x${_name}-${value[0]}`]: value.length > 0,
          [`${prefix}y${_name}-${value[1]}`]: value.length > 1,
        };
      }),
  );
}

export function useResponsive(prefix: string, config: Breakpoint) {
  return useMemo(() => {
    return getResponsiveClassNames(prefix, config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.xs, config.sm, config.md, config.lg, config.xl, config.xxl]);
}
