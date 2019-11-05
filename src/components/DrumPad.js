import React, { useContext, useState, useEffect } from 'react';
import { DrumMachineContext } from './DrumMachineContext';

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  transform: 'translateY(3px)'
};

const passiveStyle = {
  backgroundColor: 'grey',
  boxShadow: '3px 3px 5px black'
};

const DramPad = ({ clipId, clip, keyTrigger }) => {
  const [padStyle, setPadStyle] = useState(passiveStyle);
  const { power, displayClipName } = useContext(DrumMachineContext);

  const activatePad = () => {
    if (power) {
      setPadStyle(activeStyle);
    } else {
      setPadStyle({
        ...activeStyle,
        backgroundColor: 'grey',
        boxShadow: '0 3px grey'
      });
    }
  };

  const playSound = () => {
    const sound = document.getElementById(keyTrigger);

    sound.currentTime = 0;
    sound.play().catch(() => console.log('Power is OFF! No audio source.'));

    activatePad();
    setTimeout(() => {
      setPadStyle(passiveStyle);
    }, 100);
    displayClipName(clipId);
  };

  const handleKeyPress = event => {
    if (event.code === `Key${keyTrigger}`) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <div
      id={clipId}
      className={'drum-pad'}
      style={padStyle}
      onClick={playSound}
    >
      <audio id={keyTrigger} className={'clip'} src={clip}></audio>
      {keyTrigger}
    </div>
  );
};

export default DramPad;
