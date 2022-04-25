import React from 'react';

function Plane() {
  return <div className="sk-plane" />;
}

const PlaneMemo = React.memo(Plane);

export default PlaneMemo;
