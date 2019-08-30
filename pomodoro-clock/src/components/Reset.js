import React from 'react';
import { connect } from 'react-redux';

import { onTimerReset } from '../actions/actions';

let Reset = ({ onTimerReset }) => (
  <div  className="reset">
    <span id="reset" className="reset__button" onClick={() => onTimerReset()}>
      <i className="fas fa-sync-alt"></i>
    </span>
  </div>
);
export default connect(
  null,
  { onTimerReset }
)(Reset);
