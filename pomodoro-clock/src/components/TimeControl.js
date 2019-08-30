import React from 'react';
import { connect } from 'react-redux';

import {
  onTimerIncrement,
  onTimerDecrement,
  onTimerChange,
} from '../actions/actions';

let TimeControl = ({
  idName,
  name,
  value,
  onTimerIncrement,
  onTimerDecrement,
  onTimerChange,
}) => (
  <div className="timer-settings__col">
    <div id={`${idName}-label`} className="setting-label">
      {name} time
    </div>
    <div className="time">
      <span
        id={`${idName}-decrement`}
        className="time__control"
        onClick={() => onTimerDecrement(name, '-')}
      >
        <i className="fas fa-minus-circle"></i>
      </span>
      <span
        id={`${idName}-length`}
        type="number"
        name={name}
        className="time__input"
        onChange={(e) =>
          onTimerChange(e.target.value, name, value - e.target.value)
        }
      >
        {value}
      </span>
      <span
        id={`${idName}-increment`}
        className="time__control"
        onClick={() => onTimerIncrement(name, '+')}
      >
        <i className="fas fa-plus-circle"></i>
      </span>
    </div>
  </div>
);
export default connect(
  (state, ownProps) => ({ value: state.settings[ownProps.name] }),
  { onTimerIncrement, onTimerDecrement, onTimerChange }
)(TimeControl);
