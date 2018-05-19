import React from 'react';

const ModeButton = ({changeMode, isNightMode}) => (
  <button onClick={changeMode}>
    {isNightMode === true ? "Day Mode" : "Night Mode"}
  </button>
);

export default ModeButton;