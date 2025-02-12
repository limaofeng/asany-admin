import React from 'react';

const Container: React.FC<{
  animationDuration: number;
  isFinished: boolean;
  position: 'top' | 'bottom';
  children?: React.ReactNode;
}> = ({ animationDuration, children, isFinished, position }) => (
  <div
    className="nprogress-container"
    style={{
      [position]: 0,
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

export default Container;
