import React, { Component } from 'react';

// import ButtonSmall from './ButtonSmall';
// import ButtonLargeV from './ButtonLargeV';
// import ButtonLargeH from './ButtonLargeH';
import Button from './Button';

import '../css/keypad.css';
import '../css/buttons.css';

class Keypad extends Component {
  render() {
    const { display } = this.props;

    return (
      <div className="keypad">
        <div className="calculator">
          <div className="calculator-keys">
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

            <Button button={'0'} id={'zero'} type={'num'} className="zero-sign"/>
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
        </div>

        {/* <div className="button-group-3x4">
          <div className="button-row-3x1">
            <ButtonSmall button={'AC'} id={'clear'} type={'clear'} />
            <ButtonSmall
              button={'/'}
              id={'divide'}
              type={'operator'}
              display={display}
            />
            <ButtonSmall
              button={'*'}
              id={'multiply'}
              type={'operator'}
              display={display}
            />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={'7'} id={'seven'} value={'7'} type={'num'} />
            <ButtonSmall button={'8'} id={'eight'} value={'8'} type={'num'} />
            <ButtonSmall button={'9'} id={'nine'} value={'9'} type={'num'} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={'4'} id={'four'} value={'4'} type={'num'} />
            <ButtonSmall button={'5'} id={'five'} value={'5'} type={'num'} />
            <ButtonSmall button={'6'} id={'six'} value={'6'} type={'num'} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={'1'} id={'one'} value={'1'} type={'num'} />
            <ButtonSmall button={'2'} id={'two'} value={'2'} type={'num'} />
            <ButtonSmall button={'3'} id={'three'} value={'3'} type={'num'} />
          </div>
        </div>
        <div className="button-row-4x1">
          <ButtonLargeH button={'0'} id={'zero'} type={'num'} />
          <ButtonSmall
            button={'.'}
            id={'decimal'}
            value={'.'}
            display={display}
            type={'decimal'}
          />
        </div>
        <div className="button-col-1x5">
          <ButtonSmall
            button={'-'}
            id={'subtract'}
            display={display}
            type={'operator'}
          />
          <ButtonLargeV
            button={'+'}
            id={'add'}
            display={display}
            type={'operator'}
          />
          <ButtonLargeV
            button={'='}
            id={'equals'}
            display={display}
            type={'operator'}
            className={'button-blue'}
          />
        </div> */}
      </div>
    );
  }
}

export default Keypad;
