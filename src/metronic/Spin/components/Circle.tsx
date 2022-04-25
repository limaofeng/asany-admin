import React from 'react';

function Circle() {
  return (
    <div className="sk-circle">
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
    </div>
  );
}

const CircleMemo = React.memo(Circle);

export default CircleMemo;
