import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateDisplay,
  clearDisplay,
  subtraction,
  multiplication,
  division,
} from '../actions/actions';

import '../css/buttons.css';

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
    } = this.props;

    if (id === 'clear') {
      clear();
    } else if (id === 'subtract') {
      subtract(display);
    } else if (id === 'multiply') {
      multiply(display);
    } else if (id === 'divide') {
      divide(display);
    } else {
      updateDisplay(button);
    }
  };

  render() {
    const { id, value, button } = this.props;

    return (
      <button
        id={id}
        value={value}
        className="button-small"
        onClick={this.handleClicks}
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
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonSmall);
