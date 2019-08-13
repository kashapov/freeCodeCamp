import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addition, equal } from '../actions/actions';

import '../css/buttons.css';

class ButtonLargeV extends Component {
  handleClick = (e) => {
    const { id, display, add, equal } = this.props;

    if (id === 'add') {
      add(display);
    } else if (id === 'equals') {
      equal(display);
    }
  };

  render() {
    const { id, button } = this.props;

    return (
      <button id={id} className="button-large-v" onClick={this.handleClick}>
        {button}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (input) => dispatch(addition(input)),
  equal: (input) => dispatch(equal(input)),
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonLargeV);
