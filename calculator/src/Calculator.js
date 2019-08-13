import React, { Component } from 'react';
import { connect } from 'react-redux';

import Display from './components/Display';
import Keypad from './components/Keypad';
import { getDisplay, getHistory } from './selectors/Selectors';

import './css/calculator.css';

class Calculator extends Component {
  render() {
    const { display } = this.props;

    return (
      <div className="calculator-body">
        <div className="display-block">
          <Display display={display} />
        </div>
        <div className="keypad-block">
          <Keypad display={display} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const displayValue = getDisplay(state);
  const displayHistory = getHistory(state);
  return {
    display: displayValue,
    history: displayHistory,
  };
};

export default connect(
  mapStateToProps,
  null
)(Calculator);
