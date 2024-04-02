import classnames from 'classnames';

import Circle from './Circle';

import type { MainColor } from '../typings';

type ProgressProps = {
  className?: string;
  percent?: number;
  color?: MainColor;
};

function Progress(props: ProgressProps) {
  const { percent, className, color = 'primary' } = props;
  return (
    <div
      className={classnames('rounded', `bg-${color}`, className, {
        'opacity-0': !percent,
      })}
      role="progressbar"
      style={{ width: `${percent}%` }}
      aria-valuenow={50}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

Progress.Circle = Circle;

export default Progress;
