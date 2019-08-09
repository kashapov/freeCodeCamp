import React from 'react';

class DrumPad extends React.Component {
  state = {
    padStyle: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    const { keyCode } = this.props;

    if (e.keyCode === keyCode) {
      this.playSound();
    }
  };

  activatePad = () => {
    const { padStyle } = this.state;
    const { power } = this.props;

    if (power) {
      padStyle === 'active focus'
        ? this.setState({
            padStyle: '',
          })
        : this.setState({
            padStyle: 'active focus',
          });
    }
  };

  playSound = () => {
    const { clipId, keyTrigger, power, updateDisplay } = this.props;

    if (power) {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.activatePad();
      setTimeout(() => this.activatePad(), 100);
      updateDisplay(clipId.replace(/-/g, ' '));
    }
  };

  render() {
    const { clipId, clip, keyTrigger } = this.props;

    return (
      <button
        id={clipId}
        onClick={this.playSound}
        className={`drum-pad btn btn-info mx-2 my-2 ${this.state.padStyle}`}
      >
        <audio className="clip" id={keyTrigger} src={clip}></audio>
        {keyTrigger}
      </button>
    );
  }
}

export default DrumPad;
