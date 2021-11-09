import React from 'react';

function Bounce() {
  return (
    <div className="sk-bounce">
      <div className="sk-bounce-dot" />
      <div className="sk-bounce-dot" />
    </div>
  );
}

export default React.memo(Bounce);
