import React, { useContext } from 'react';
import DrumPad from './DrumPad';
import { DrumMachineContext } from './DrumMachineContext';

const PadBank = () => {
  const { power, currentPadBank } = useContext(DrumMachineContext);

  let padBank;

  if (power) {
    padBank = currentPadBank.map(drum => (
      <DrumPad
        key={drum.id}
        clipId={drum.id}
        clip={drum.url}
        keyTrigger={drum.keyTrigger}
      />
    ));
  } else {
    padBank = currentPadBank.map(drum => (
      <DrumPad
        key={drum.id}
        clipId={drum.id}
        clip={'#'}
        keyTrigger={drum.keyTrigger}
      />
    ));
  }

  return <div className={'pad-bank'}>{padBank}</div>;
};

export default PadBank;
