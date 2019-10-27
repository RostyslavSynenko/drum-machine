import React, { useContext } from 'react';
import { DrumMachineContext } from './DrumMachineContext';

const Display = () => {
  const { display } = useContext(DrumMachineContext);
  return <p id={'display'}>{display}</p>;
};

export default Display;
