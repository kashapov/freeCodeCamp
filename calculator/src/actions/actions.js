import {
  ADD,
  UPDATE,
  CLEAR,
  EQUAL,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
} from './actionTypes';

export const addition = (content) => ({
  type: ADD,
  payload: {
    operation: 'operator',
  },
});

export const subtraction = (content) => ({
  type: SUBTRACT,
  payload: {
    operation: 'operator',
  },
});

export const updateDisplay = (content) => ({
  type: UPDATE,
  payload: {
    input: content,
    operation: 'num',
  },
});

export const multiplication = (content) => ({
  type: MULTIPLY,
  payload: {
    operation: 'operator',
  },
});

export const division = (content) => ({
  type: DIVIDE,
  payload: {
    operation: 'operator',
  },
});

export const clearDisplay = (content) => ({
  type: CLEAR,
  payload: {
    operation: 'clear',
  },
});

export const equal = (content) => ({
  type: EQUAL,
  payload: {
    operation: 'equal',
  },
});
