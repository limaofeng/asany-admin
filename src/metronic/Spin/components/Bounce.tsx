import React from 'react';

function Bounce() {
  return (
    <div className="sk-bounce">
      <div className="sk-bounce-dot" />
      <div className="sk-bounce-dot" />
    </div>
  );
}

const BounceMemo = React.memo(Bounce);

export default BounceMemo;
