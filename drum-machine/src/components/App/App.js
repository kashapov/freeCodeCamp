import React from 'react';

import PadBank from '../PadBank';
import {
  appName,
  bankHeater,
  bankPiano,
  heaterKit,
  pianoKit,
  powerOn,
  powerOff,
} from '../../constants';

import './App.scss';

class App extends React.Component {
  state = {
    power: true,
    display: '',
    currentPadBank: bankHeater,
    currentPadBankId: heaterKit,
    volume: 0.4,
  };

  powerControl = () => {
    const { power } = this.state;
    this.setState({
      power: !power,
      display: power ? powerOff : powerOn,
    });
  };

  selectBank = () => {
    const { power, currentPadBankId } = this.state;
    if (power) {
      currentPadBankId === heaterKit
        ? this.setState({
            currentPadBank: bankPiano,
            display: pianoKit,
            currentPadBankId: pianoKit,
          })
        : this.setState({
            currentPadBank: bankHeater,
            display: heaterKit,
            currentPadBankId: heaterKit,
          });
    }
  };

  displayClipName = (name) => {
    const { power } = this.state;
    if (power) {
      this.setState({
        display: name,
      });
    }
  };

  adjustVolume = (e) => {
    const { power } = this.state;
    if (power) {
      this.setState({
        volume: e.target.value,
        display: 'Volume: ' + Math.round(e.target.value * 100),
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  };

  clearDisplay = () => {
    this.setState({
      display: '',
    });
  };

  render() {
    const { power, volume, currentPadBank, display } = this.state;

    const powerChecked = power ? 'checked' : null;

    const clazzHeaterKit =
      this.state.currentPadBankId === heaterKit
        ? 'btn-info'
        : 'btn-outline-secondary';

    const clazzPianoKit =
      this.state.currentPadBankId === pianoKit
        ? 'btn-info'
        : 'btn-outline-secondary';

    return (
      <div id="drum-machine" className="cover-container d-flex w-100 h-100 p-3">
        <div className="border rounded shadow-sm ">
          <div className="logo-block d-flex justify-content-center m-3">
            <i className="logo fas fa-drum"></i> {appName}
          </div>

          <PadBank
            power={power}
            updateDisplay={this.displayClipName}
            clipVolume={volume}
            currentPadBank={currentPadBank}
          />

          <div className="d-flex justify-content-center m-3">
            <div className="form-control display" id="display">
              {display}
            </div>
          </div>

          <div className="d-flex justify-content-center m-3">
            <div className="btn-group" role="group" aria-label="Kits">
              <button
                type="button"
                className={`btn ${clazzHeaterKit}`}
                onClick={this.selectBank}
              >
                {heaterKit}
              </button>
              <button
                type="button"
                className={`btn ${clazzPianoKit}`}
                onClick={this.selectBank}
              >
                {pianoKit}
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-center m-3">
            <div className="volume-slider">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={this.adjustVolume}
                className="custom-range"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center m-3">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="powerSwitch"
                onClick={this.powerControl}
                defaultChecked={powerChecked}
              />
              <label className="custom-control-label" htmlFor="powerSwitch">
                Power
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
