import React from 'react';
import { connect } from 'react-redux';

import { onTimerStartStop } from '../actions/actions';

let StartStop = ({ onTimerStartStop, ticking }) => (
  <div className="start-stop">
    <span
      id="start_stop"
      className={
        'start-stop__button--' +
        (ticking ? 'stop' : 'start') +
        ' start-stop__button'
      }
      onClick={() => onTimerStartStop()}
    >
      {ticking ? (
        <>
          <i className="fas fa-pause-circle"></i>
        </>
      ) : (
        <>
          <i className="fas fa-play-circle"></i>
        </>
      )}
    </span>
  </div>
);

export default connect(
  (state) => ({ ticking: state.timer.ticking }),
  { onTimerStartStop }
)(StartStop);
