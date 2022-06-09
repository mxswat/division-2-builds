import React from 'react';
import './App.css';
import { Gear } from './features/gear/Gear';
import { DpsCalculator } from './features/dpsCalculator/DpsCalculator';

function App() {
  return (
    <div className="App">
      <div className='gear-grid'>
        <Gear slotId='Mask' />
        <Gear slotId='Backpack' />
        <Gear slotId='Chest' />
        <Gear slotId='Gloves' />
        <Gear slotId='Holster' />
        <Gear slotId='Kneepads' />
      </div>
      <DpsCalculator />
    </div>
  );
}

export default App;
