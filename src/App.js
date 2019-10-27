import React from 'react';
import PadBank from './components/PadBank';
import Controls from './components/Controls';
import { DrumMachineProvider } from './components/DrumMachineContext';

function App() {
  return (
    <div id="drum-machine" className="inner-container">
      <DrumMachineProvider>
        <PadBank />
        <Controls />
      </DrumMachineProvider>
    </div>
  );
}

export default App;
