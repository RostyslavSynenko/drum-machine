import React from 'react';

const Control = ({ title, onClick }) => {
  return (
    <div>
      <p>{title}</p>
      <div className={'select'} onClick={onClick}>
        <div className={'inner'}></div>
      </div>
    </div>
  );
};

export default Control;
