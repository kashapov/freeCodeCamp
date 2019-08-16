import React, { Component } from 'react';

import Button from './Button';

import '../css/keypad.css';

class Keypad extends Component {
  render() {
    const { display } = this.props;

    return (
      <div className="keypad">
        <Button
          button={'AC'}
          id={'clear'}
          type={'clear'}
          className="all-clear"
        />
        <Button
          button={<>&divide;</>}
          id={'divide'}
          display={display}
          type={'operator'}
          className="operator"
        />
        <Button
          button={<>&times;</>}
          id={'multiply'}
          display={display}
          type={'operator'}
          className="operator"
        />
        <Button
          button={'-'}
          id={'subtract'}
          display={display}
          type={'operator'}
          className="operator"
        />
        <Button button={'7'} id={'seven'} value={'7'} type={'num'} />
        <Button button={'8'} id={'eight'} value={'8'} type={'num'} />
        <Button button={'9'} id={'nine'} value={'9'} type={'num'} />

        <Button button={'4'} id={'four'} value={'4'} type={'num'} />
        <Button button={'5'} id={'five'} value={'5'} type={'num'} />
        <Button button={'6'} id={'six'} value={'6'} type={'num'} />

        <Button button={'1'} id={'one'} value={'1'} type={'num'} />
        <Button button={'2'} id={'two'} value={'2'} type={'num'} />
        <Button button={'3'} id={'three'} value={'3'} type={'num'} />

        <Button button={'0'} id={'zero'} type={'num'} className="zero-sign" />
        <Button
          button={'.'}
          id={'decimal'}
          value={'.'}
          display={display}
          type={'decimal'}
        />
        <Button
          button={'+'}
          id={'add'}
          display={display}
          type={'operator'}
          className="addition-sign"
        />
        <Button
          button={'='}
          id={'equals'}
          display={display}
          type={'operator'}
          className="equal-sign"
        />
      </div>
    );
  }
}

export default Keypad;
