import { getTimerDisplay } from '../utils';
import {
  TIMER_INCREMENT,
  TIMER_DECREMENT,
  SET_TIMER,
  TIMER_TICK,
  TIMER_START_STOP,
  TIMER_RESET,
} from '../actions/actionTypes';

import { pomodoroTime, breakTime, TIMERS } from '../settings';

const initialState = {
  settings: {
    [TIMERS.POMODORO]: pomodoroTime,
    [TIMERS.BREAK]: breakTime,
  },
  timer: {
    timer: pomodoroTime * 60,
    display: {
      minutes: pomodoroTime,
      seconds: '00',
    },
    ticking: false,
    currentTimer: TIMERS.POMODORO,
    nextTimer: TIMERS.BREAK,
  },
};

const settings = (state = initialState.settings, action) => {
  let timer;

  switch (action.type) {
    case TIMER_INCREMENT:
      timer = state[action.timerType] + 1;
      if (timer > 60) timer = 60;
      return { ...state, [action.timerType]: timer };
    case TIMER_DECREMENT:
      timer = state[action.timerType] - 1;
      if (timer <= 0) timer = 1;
      return { ...state, [action.timerType]: timer };
    case SET_TIMER:
      return { ...state, [action.timerType]: action.value };
    case TIMER_RESET:
      return initialState.settings;
    default:
      return state;
  }
};

const timer = (state = initialState.timer, action) => {
  let timer;
  switch (action.type) {
    case SET_TIMER:
      if (action.timerType === state.currentTimer) {
        timer = state.timer - action.difference * 60;
        if (timer < 0) timer = 0;
        return { ...state, timer, display: getTimerDisplay(timer) };
      }
      return state;
    case TIMER_INCREMENT:
      if (action.timerType === state.currentTimer) {
        timer = state.timer + 60;
        return { ...state, timer, display: getTimerDisplay(timer) };
      }
      return state;
    case TIMER_DECREMENT:
      if (action.timerType === state.currentTimer) {
        timer = state.timer - 60;
        if (timer < 0) timer = 0;
        return { ...state, timer, display: getTimerDisplay(timer) };
      }
      return state;
    case TIMER_TICK:
      timer = state.timer - 1;
      if (timer < 0) {
        timer = action.settings[state.nextTimer] * 60;
        return {
          ...state,
          currentTimer: state.nextTimer,
          nextTimer: state.currentTimer,
          timer,
          display: getTimerDisplay(timer),
        };
      }
      return { ...state, timer, display: getTimerDisplay(timer) };
    case TIMER_START_STOP:
      return { ...state, ticking: !state.ticking };
    case TIMER_RESET:
      return initialState.timer;
    default:
      return state;
  }
};

export { settings, timer, TIMERS };
