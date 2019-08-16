import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateDisplay,
  clearDisplay,
  subtraction,
  multiplication,
  division,
  equal,
  addition,
} from '../actions/actions';

import '../css/button.css';

class ButtonSmall extends Component {
  handleClicks = (e) => {
    const {
      id,
      clear,
      display,
      subtract,
      multiply,
      divide,
      button,
      updateDisplay,
      equal,
      add,
    } = this.props;

    if (id === 'clear') {
      clear();
    } else if (id === 'add') {
      add(button);
    } else if (id === 'subtract') {
      subtract(display);
    } else if (id === 'multiply') {
      multiply(display);
    } else if (id === 'divide') {
      divide(display);
    } else if (id === 'equals') {
      equal(display);
    } else {
      updateDisplay(button);
    }
  };

  render() {
    const { id, value, button, className } = this.props;

    return (
      <button
        type="button"
        id={id}
        value={value}
        onClick={this.handleClicks}
        className={`keypad__btn ${className}`}
      >
        {button}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateDisplay: (display) => dispatch(updateDisplay(display)),
  subtract: (display) => dispatch(subtraction(display)),
  multiply: (display) => dispatch(multiplication(display)),
  divide: (display) => dispatch(division(display)),
  clear: (display) => dispatch(clearDisplay(display)),
  equal: (display) => dispatch(equal(display)),
  add: (display) => dispatch(addition(display)),
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonSmall);
