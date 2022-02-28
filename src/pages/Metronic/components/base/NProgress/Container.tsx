import React from 'react';

const Container: React.FC<{
  animationDuration: number;
  isFinished: boolean;
  position: 'top' | 'bottom';
}> = ({ animationDuration, children, isFinished, position }) => (
  <div
    style={{
      position: 'absolute',
      [position]: 0,
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      width: '100%',
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

export default Container;
