import React from 'react';

const Control = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
      <div className={'select'}>
        <div className={'inner'}></div>
      </div>
    </div>
  );
};

export default Control;
