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

export default React.memo(Wander);
