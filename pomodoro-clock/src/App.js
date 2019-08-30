import React from 'react';

import { ToastContainer } from 'react-toastify';

import TimerDisplay from './components/TimerDisplay';
import StartStop from './components/StartStop';
import Reset from './components/Reset';
import Timer from './containers/Timer';
import TimeControls from './containers/TimeControls';
import { appName } from './settings';

const App = () => (
  <div className="wrapper">
    <div className="app-name">{appName}</div>
    <ToastContainer />
    <Timer />
    <TimerDisplay />
    <div className="controls-container">
      <div className="timer-controls">
        <StartStop />
        <Reset />
      </div>
      <TimeControls />
    </div>
  </div>
);

export default App;
