import classnames from 'classnames';

import { useResponsive } from './utils';

export type ColResponsive = {
  span?: number;
  /**
   * 超小 < 576px
   */
  xs?: number;
  /**
   * 小的 ≥ 576px
   */
  sm?: number;
  /**
   * 中等的 ≥ 768px
   */
  md?: number;
  /**
   * 大的 ≥ 992px
   */
  lg?: number;
  /**
   * 特大号 ≥ 1200px
   */
  xl?: number;
  /**
   * 特大号 ≥ 1400px
   */
  xxl?: number;
};

type ColProps = {
  className?: string;
  children: React.ReactNode;
} & ColResponsive;

function Col(props: ColProps) {
  const { children, className, ...responsive } = props;

  const reactive = useResponsive('col', { ...responsive, default: responsive.span });
  return <div className={classnames(reactive, className)}>{children}</div>;
}

export default Col;
