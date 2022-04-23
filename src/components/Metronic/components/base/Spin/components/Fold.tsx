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

const FoldMemo = React.memo(Fold);

export default FoldMemo;
