import React from 'react';

function Swing() {
  return (
    <div className="sk-swing">
      <div className="sk-swing-dot" />
      <div className="sk-swing-dot" />
    </div>
  );
}

export default React.memo(Swing);
