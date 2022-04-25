import React from 'react';

function CircleFade() {
  return (
    <div className="sk-circle-fade">
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
    </div>
  );
}

const CircleFadeMemo = React.memo(CircleFade);

export default CircleFadeMemo;
