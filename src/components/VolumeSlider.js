import React from 'react';

const VolumeSlider = () => {
  return (
    <div className={'slider'}>
      <input type="range" step={0.1} min={0} max={1} />
    </div>
  );
};

export default VolumeSlider;
