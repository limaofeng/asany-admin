import classnames from 'classnames';

import { useResponsive } from './utils';

export type ColResponsive = {
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
  children: React.ReactNode;
} & ColResponsive;

function Col(props: ColProps) {
  const { children, ...responsive } = props;

  const reactive = useResponsive('col', responsive);
  // 'col-md-6 col-xl-4',
  return <div className={classnames(reactive)}>{children}</div>;
}

export default Col;
