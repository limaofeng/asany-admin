import React from 'react';

function Chase() {
  return (
    <div className="sk-chase">
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
  );
}

export default React.memo(Chase);
