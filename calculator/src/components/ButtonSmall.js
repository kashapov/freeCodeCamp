import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateDisplay } from '../actions/actions';
import { clearDisplay } from '../actions/actions';

import '../css/buttons.css';

class ButtonSmall extends Component {
  handleClick = () => {
    const { id, clear, display, value } = this.props;

    if (id === 'clear') {
      clear();
    } else {
      display(value);
    }
  };

  render() {
    const { id, value, button } = this.props;

    return (
      <button
        id={id}
        value={value}
        className="button-small"
        onClick={this.handleClick}
      >
        {button}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  display: (display) => dispatch(updateDisplay(display)),
  clear: (display) => dispatch(clearDisplay(display)),
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonSmall);
