import React from 'react';

const DramPad = ({ id, url, keyTrigger }) => {
  return (
    <div className={'drum-pad'}>
      <audio id={id} className={'clip'} src={url} />
      {keyTrigger}
    </div>
  );
};

export default DramPad;
