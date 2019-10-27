import React from 'react';
import Control from './Control';
import Display from './Display';
import VolumeSlider from './VolumeSlider';

const ControlsContainer = () => {
  return (
    <div className={'controls-container'}>
      <Control title={'Power'} />
      <Display />
      <VolumeSlider />
      <Control title={'Band'} />
    </div>
  );
};

export default ControlsContainer;
