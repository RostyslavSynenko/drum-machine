import React, { useContext } from 'react';
import { DrumMachineContext } from './DrumMachineContext';

const VolumeSlider = () => {
  const { volume, adjustVolume } = useContext(DrumMachineContext);

  return (
    <div className={'slider'}>
      <input
        type="range"
        step={0.1}
        min={0}
        max={1}
        value={volume}
        onChange={adjustVolume}
      />
    </div>
  );
};

export default VolumeSlider;
