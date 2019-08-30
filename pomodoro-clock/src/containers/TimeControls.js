import React from 'react';

import TimeControl from '../components/TimeControl';
import { TIMERS } from '../reducers/rootReducer';

const TimeControls = () => (
  <div className="timer-settings">
    <TimeControl name={TIMERS.BREAK} idName="break" />
    <TimeControl name={TIMERS.POMODORO} idName="session" />
  </div>
);

export default TimeControls;
