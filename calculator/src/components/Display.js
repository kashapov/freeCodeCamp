import React, { Component } from 'react';

import '../css/display.css';

class Display extends Component {
  render() {
    const { display } = this.props;

    return (
      <div id="display" className="lcd-screen">
        {display}
      </div>
    );
  }
}

export default Display;
