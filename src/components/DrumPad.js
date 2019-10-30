import React, { useContext } from 'react';
import { DrumMachineContext } from './DrumMachineContext';

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  transform: 'translateY(3px)'
};

const passiveStyle = {
  backgroundColor: 'rgb(114, 113, 113)',
  boxShadow: '2px 2px 5px black'
};

const DramPad = ({ id, url, keyTrigger }) => {
  const { triggeredKey, onClick } = useContext(DrumMachineContext);

  let styles;

  if (triggeredKey === keyTrigger) {
    styles = activeStyle;
  } else {
    styles = passiveStyle;
  }

  return (
    <div className={'drum-pad'} style={styles} onClick={onClick}>
      <audio id={keyTrigger} className={'clip'} src={url} data-soundname={id} />
      {keyTrigger}
    </div>
  );
};

export default DramPad;
