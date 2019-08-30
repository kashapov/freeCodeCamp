import React from 'react';
import { connect } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { beep } from '../utils';
import { TIMERS } from '../reducers/rootReducer';
import { onTick } from '../actions/actions';

class Timer extends React.Component {
  options = {
    type: toast.TYPE.INFO,
  };

  notify = (val) => toast(val, this.options);

  componentDidMount() {
    this.timerID = setInterval(() => {
      const { ticking, onTick, settings } = this.props;
      if (ticking) {
        onTick(settings);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextTimer = nextProps.currentTimer;
    if (this.props.currentTimer !== nextTimer) {
      beep();

      nextTimer === TIMERS.BREAK
        ? this.notify('Take a break')
        : this.notify('Get back to work');
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

export default connect(
  (state) => ({
    currentTimer: state.timer.currentTimer,
    ticking: state.timer.ticking,
    settings: state.settings,
  }),
  { onTick }
)(Timer);
