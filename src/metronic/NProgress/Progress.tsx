import React, { useEffect, useMemo, useReducer, useRef } from 'react';

import { useNProgress } from '@tanem/react-nprogress';

import Bar from './Bar';
import Container from './Container';

const Progress: React.FC<{
  isAnimating: boolean;
  position: 'top' | 'bottom';
}> = ({ isAnimating, position = 'top' }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  const progressRef = useRef(0);
  const [, forceRender] = useReducer((s) => s + 1, 0);

  useMemo(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    if (!isFinished) {
      return;
    }
    progressRef.current = 0;
    setTimeout(forceRender, 120);
  }, [isFinished]);

  return (
    <Container
      position={position}
      animationDuration={animationDuration}
      isFinished={isFinished}
    >
      <Bar
        animationDuration={animationDuration}
        progress={progressRef.current}
      />
    </Container>
  );
};

export default Progress;
