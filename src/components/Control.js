import React from 'react';

const Control = ({ title, onClick, styles }) => {
  return (
    <div>
      <p>{title}</p>
      <div className={'select'} onClick={onClick}>
        <div className={'inner'} style={styles}></div>
      </div>
    </div>
  );
};

export default Control;
