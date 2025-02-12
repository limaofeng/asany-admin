import React from 'react';

const Bar: React.FC<{
  animationDuration: number;
  progress: number;
}> = ({ animationDuration, progress }) => (
  <div
    className="nprogress-bar"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  />
);

export default Bar;
