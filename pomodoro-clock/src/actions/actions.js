import {
  TIMER_TICK,
  TIMER_INCREMENT,
  TIMER_DECREMENT,
  SET_TIMER,
  TIMER_START_STOP,
  TIMER_RESET,
} from './actionTypes';

export const onTick = (settings) => ({ type: TIMER_TICK, settings });

export const onTimerIncrement = (timerType) => ({
  type: TIMER_INCREMENT,
  timerType,
});

export const onTimerDecrement = (timerType) => ({
  type: TIMER_DECREMENT,
  timerType,
});

export const onTimerChange = (value, timerType, difference) => ({
  type: SET_TIMER,
  value,
  timerType,
  difference,
});

export const onTimerStartStop = () => ({
  type: TIMER_START_STOP,
});

export const onTimerReset = () => ({
  type: TIMER_RESET,
});
