import React, { Component } from 'react';

import ButtonSmall from './ButtonSmall';
import ButtonLargeV from './ButtonLargeV';
import ButtonLargeH from './ButtonLargeH';

import '../css/keypad.css';
import '../css/buttons.css';

class Keypad extends Component {
  render() {
    const { display } = this.props;

    return (
      <div className="keypad">
        <div className="button-group-3x4">
          <div className="button-row-3x1">
            <ButtonSmall button={'C'} id={'clear'} />
            <ButtonSmall button={'/'} id={'divide'} />
            <ButtonSmall button={'*'} id={'multiply'} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={'7'} id={'seven'} value={'7'} />
            <ButtonSmall button={'8'} id={'eight'} value={'8'} />
            <ButtonSmall button={'9'} id={'nine'} value={'9'} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={'4'} id={'four'} value={'4'} />
            <ButtonSmall button={'5'} id={'five'} value={'5'} />
            <ButtonSmall button={'6'} id={'six'} value={'6'} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={'1'} id={'one'} value={'1'} />
            <ButtonSmall button={'2'} id={'two'} value={'2'} />
            <ButtonSmall button={'3'} id={'three'} value={'3'} />
          </div>
        </div>
        <div className="button-row-4x1">
          <ButtonLargeH button={'0'} id={'zero'} />
          <ButtonSmall
            button={'.'}
            id={'decimal'}
            value={'.'}
            display={display}
          />
        </div>
        <div className="button-col-1x5">
          <ButtonSmall button={'-'} id={'subtract'} />
          <ButtonLargeV button={'+'} id={'add'} display={display} />
          <ButtonLargeV button={'='} id={'equals'} display={display} />
        </div>
      </div>
    );
  }
}

export default Keypad;
