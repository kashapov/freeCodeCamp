import React from 'react';

import DrumPad from '../DrumPad';

class PadBank extends React.Component {
  render() {
    const { currentPadBank, updateDisplay, power } = this.props;

    const padBank = currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad
          key={`button-${padBankArr[i].id}`}
          clipId={padBankArr[i].id}
          clip={padBankArr[i].url}
          keyTrigger={padBankArr[i].keyTrigger}
          keyCode={padBankArr[i].keyCode}
          updateDisplay={updateDisplay}
          power={power}
        />
      );
    });

    return (
      <div className="pad-bank card-deck m-3 text-center d-flex justify-content-center">
        {padBank}
      </div>
    );
  }
}

export default PadBank;
