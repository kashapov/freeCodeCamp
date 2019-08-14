import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateDisplay, addition, equal } from '../actions/actions';

import '../css/buttons.css';

class ButtonLargeH extends Component {
  handleClick() {
    this.props.display(this.props.value);
  }

  render() {
    const { id, button, value } = this.props;

    return (
      <button
        id={id}
        className="button-large-h"
        value={value}
        onClick={this.handleClick}
      >
        {button}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  display: (display) => dispatch(updateDisplay(display)),
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonLargeH);
