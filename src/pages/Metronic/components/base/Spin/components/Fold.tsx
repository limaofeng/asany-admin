import React from 'react';

function Fold() {
  return (
    <div className="sk-fold">
      <div className="sk-fold-cube" />
      <div className="sk-fold-cube" />
      <div className="sk-fold-cube" />
      <div className="sk-fold-cube" />
    </div>
  );
}

export default React.memo(Fold);
