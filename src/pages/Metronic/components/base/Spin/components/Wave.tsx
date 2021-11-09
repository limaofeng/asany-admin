import React from 'react';

function Wave() {
  return (
    <div className="sk-wave">
      <div className="sk-wave-rect" />
      <div className="sk-wave-rect" />
      <div className="sk-wave-rect" />
      <div className="sk-wave-rect" />
      <div className="sk-wave-rect" />
    </div>
  );
}

export default React.memo(Wave);
