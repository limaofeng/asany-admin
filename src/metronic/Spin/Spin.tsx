import React from 'react';

import type { IconProps } from '@asany/icons/dist/Icon';
import classnames from 'classnames';

import Bounce from './components/Bounce';
import Chase from './components/Chase';
import Circle from './components/Circle';
import CircleFade from './components/CircleFade';
import Flow from './components/Flow';
import Fold from './components/Fold';
import Grid from './components/Grid';
import Plane from './components/Plane';
import Pulse from './components/Pulse';
import Swing from './components/Swing';
import Wander from './components/Wander';
import Wave from './components/Wave';

import './style/index.scss';

type SpinKitNames =
  | 'Plane'
  | 'Chase'
  | 'Bounce'
  | 'Wave'
  | 'Pulse'
  | 'Flow'
  | 'Swing'
  | 'Circle'
  | 'CircleFade'
  | 'Grid'
  | 'Fold'
  | 'Wander'
  | 'Loading';

type SpinProps = {
  tip?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
  className?: string;
  indicator?: SpinKitNames | React.ReactElement<IconProps>;
  spinning?: boolean;
  children?: React.ReactNode;
};

function Loading({ size, className }: any) {
  return (
    <span
      className={classnames(
        {
          'spinner-border-sm': size === 'small',
          'spinner-border-lg': size === 'large',
        },
        className,
        'spinner-border align-middle',
      )}
    />
  );
}

const spinkits: Record<SpinKitNames, React.ReactElement<any>> = {
  Bounce: <Bounce />,
  Chase: <Chase />,
  Circle: <Circle />,
  CircleFade: <CircleFade />,
  Flow: <Flow />,
  Fold: <Fold />,
  Grid: <Grid />,
  Plane: <Plane />,
  Pulse: <Pulse />,
  Swing: <Swing />,
  Wander: <Wander />,
  Wave: <Wave />,
  Loading: <Loading />,
};

function Spin(props: SpinProps) {
  const {
    className,
    children,
    tip,
    size = 'default',
    spinning = true,
    indicator = 'Loading',
  } = props;
  const indicatorNode =
    typeof indicator === 'string'
      ? React.cloneElement(spinkits[indicator], {
          size,
          className: classnames(!!tip ? 'ms-2' : null),
        })
      : React.cloneElement(indicator, {
          className: classnames(indicator.props.className, {
            'svg-icon-1x': size === 'small',
            'svg-icon-2x': size === 'default',
            'svg-icon-3x': size === 'large',
          }),
        });
  if (React.Children.count(children)) {
    return (
      <div className={classnames('spin-nested-loading', className)}>
        {spinning && (
          <div className="spin-spinning">
            <span className={classnames({ 'indicator-progress': !spinning })}>
              {tip}
              {indicatorNode}
            </span>
          </div>
        )}
        <div
          className={classnames('spin-container', { 'spin-blur': spinning })}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <span
      className={classnames({
        [className!]: className && spinning,
        'indicator-progress': !spinning,
      })}
    >
      {tip}
      {indicatorNode}
    </span>
  );
}

export default Spin;
