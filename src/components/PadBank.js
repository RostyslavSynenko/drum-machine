import React, { useContext } from 'react';
import DrumPad from './DrumPad';
import { DrumMachineContext } from './DrumMachineContext';

const PadBank = () => {
  const { sounds, soundType } = useContext(DrumMachineContext);
  const currentSounds = sounds.filter(el => el.type === soundType)[0];

  return (
    <div className={'pad-bank'}>
      {currentSounds.sounds.map(item => (
        <DrumPad key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PadBank;
