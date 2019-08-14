import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addition, equal, updateDisplay } from '../actions/actions';

import '../css/buttons.css';

class ButtonLargeV extends Component {
  handleClick = (e) => {
    const { id, display, add, equal, button } = this.props;

    if (id === 'add') {
      add(button);
    } else if (id === 'equals') {
      equal(display);
    }
  };

  render() {
    const { id, button, className } = this.props;

    return (
      <button
        id={id}
        className={`button-large-v ${className}`}
        onClick={this.handleClick}
      >
        {button}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateDisplay: (display) => dispatch(updateDisplay(display)),
  add: (display) => dispatch(addition(display)),
  equal: (display) => dispatch(equal(display)),
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonLargeV);
