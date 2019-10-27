import React from 'react';
import PadBank from './components/PadBank';
import ControlsContainer from './components/ControlsContainer';
import { DrumMachineProvider } from './components/DrumMachineContext';

function App() {
  return (
    <div id="drum-machine" className="inner-container">
      <DrumMachineProvider>
        <PadBank />
        <ControlsContainer />
      </DrumMachineProvider>
    </div>
  );
}

export default App;
