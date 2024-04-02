import React, { useEffect, useState } from 'react';

import { Direction } from './constants';

import './styles.scss';

type ResizerProps = {
  onResize: (direction: string, x: number, y: number) => void;
};

const Resizer = ({ onResize }: ResizerProps) => {
  const [direction, setDirection] = useState('');
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!direction) return;

      const ratio = window.devicePixelRatio;

      onResize(direction, e.movementX / ratio, e.movementY / ratio);
    };

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove as any);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, [mouseDown, direction, onResize]);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (_direction: string) => () => {
    setDirection(_direction);
    setMouseDown(true);
  };

  return (
    <>
      <div
        className="top-left"
        onMouseDown={handleMouseDown(Direction.TopLeft)}
      />

      <div className="top" onMouseDown={handleMouseDown(Direction.Top)} />

      <div
        className="top-right"
        onMouseDown={handleMouseDown(Direction.TopRight)}
      />

      <div className="right" onMouseDown={handleMouseDown(Direction.Right)} />

      <div
        className="right-bottom"
        onMouseDown={handleMouseDown(Direction.BottomRight)}
      />

      <div className="bottom" onMouseDown={handleMouseDown(Direction.Bottom)} />

      <div
        className="bottom-left"
        onMouseDown={handleMouseDown(Direction.BottomLeft)}
      />

      <div className="left" onMouseDown={handleMouseDown(Direction.Left)} />
    </>
  );
};

export default Resizer;
