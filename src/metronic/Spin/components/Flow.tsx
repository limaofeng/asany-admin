import React from 'react';

function Flow() {
  return (
    <div className="sk-flow">
      <div className="sk-flow-dot" />
      <div className="sk-flow-dot" />
      <div className="sk-flow-dot" />
    </div>
  );
}

const FlowMemo = React.memo(Flow);

export default FlowMemo;
