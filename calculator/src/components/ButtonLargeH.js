import React, { Component } from 'react';

import '../css/buttons.css';

class ButtonLargeH extends Component {
  render() {
    const { id, button } = this.props;

    return (
      <div id={id} className="button-large-h">
        {button}
      </div>
    );
  }
}

export default ButtonLargeH;
