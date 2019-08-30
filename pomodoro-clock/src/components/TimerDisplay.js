import React from 'react';
import { connect } from 'react-redux';

let TimerDisplay = ({ minutes, seconds, currentTimer }) => (
  <div
    className={`timer-container timer-container--${currentTimer.toLowerCase()}`}
  >
    <div id="timer-label">{currentTimer}</div>
    <h1 id="time-left" className="timer">
      {`${minutes}:${seconds}`}
    </h1>
  </div>
);

export default connect((state) => ({
  minutes: state.timer.display.minutes,
  seconds: state.timer.display.seconds,
  currentTimer: state.timer.currentTimer,
}))(TimerDisplay);
