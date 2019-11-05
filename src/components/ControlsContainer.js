import React, { useContext } from 'react';
import Control from './Control';
import Display from './Display';
import VolumeSlider from './VolumeSlider';
import { DrumMachineContext } from './DrumMachineContext';

const ControlsContainer = () => {
  const { power, currentPadBankType, powerControl, selectBank } = useContext(
    DrumMachineContext
  );

  const powerSlider = power
    ? {
        float: 'right'
      }
    : {
        float: 'left'
      };

  const bankSlider =
    currentPadBankType === 'Heater Kit'
      ? {
          float: 'left'
        }
      : {
          float: 'right'
        };

  return (
    <div className={'controls-container'}>
      <Control title={'Power'} onClick={powerControl} styles={powerSlider} />
      <Display />
      <VolumeSlider />
      <Control title={'Bank'} onClick={selectBank} styles={bankSlider} />
    </div>
  );
};

export default ControlsContainer;
