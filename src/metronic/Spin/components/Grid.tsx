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

const GridMemo = React.memo(Grid);

export default GridMemo;
