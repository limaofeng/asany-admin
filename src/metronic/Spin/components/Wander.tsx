import React from 'react';

function Wander() {
  return (
    <div className="sk-wander">
      <div className="sk-wander-cube" />
      <div className="sk-wander-cube" />
      <div className="sk-wander-cube" />
    </div>
  );
}

const WanderMemo = React.memo(Wander);

export default WanderMemo;
