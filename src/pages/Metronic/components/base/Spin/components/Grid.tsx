import React from 'react';

function Grid() {
  return (
    <div className="sk-grid">
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
    </div>
  );
}

export default React.memo(Grid);
