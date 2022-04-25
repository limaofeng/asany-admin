import React from 'react';

function Pulse() {
  return <div className="sk-pulse" />;
}

const PulseMemo = React.memo(Pulse);

export default PulseMemo;
