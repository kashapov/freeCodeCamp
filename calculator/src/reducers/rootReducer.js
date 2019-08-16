import * as math from 'mathjs';

import {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  UPDATE,
  CLEAR,
  EQUAL,
} from '../actions/actionTypes';

const initialState = {
  display: '0',
  prevOp: '',
  accumulated: '0',
  history: '0',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE: {
      const updateDisplay = action.payload;

      if (
        (state.display.includes('.') && updateDisplay.input === '.') ||
        state.display.length > 8
      ) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          display:
            (state.display === '0' && updateDisplay.input !== '.') ||
            state.prevOp === 'operator'
              ? updateDisplay.input
              : state.display + updateDisplay.input,
          prevOp: updateDisplay.operation,
        };
      }
    }

    case ADD: {
      const history = () =>
        state.prevOp === 'operator'
          ? state.history.slice(0, state.history.length - 4)
          : state.history;

      return {
        ...state,
        display: state.display,
        history:
          state.history === '0' && state.accumulated === '0'
            ? state.display + ' + '
            : state.accumulated !== '0'
            ? state.accumulated + ' + '
            : history() + state.display + ' + ',
        prevOp: 'operator',
      };
    }

    case SUBTRACT: {
      const history = () =>
        state.prevOp === 'operator'
          ? state.history.slice(0, state.history.length - 4)
          : state.history;

      return {
        ...state,
        display: state.display,
        history:
          state.history === '0' && state.accumulated === '0'
            ? state.display + ' - '
            : state.accumulated !== '0'
            ? state.accumulated + ' - '
            : history() + state.display + ' - ',
        prevOp: 'operator',
      };
    }

    case MULTIPLY: {
      const history = () =>
        state.prevOp === 'operator'
          ? state.history.slice(0, state.history.length - 4)
          : state.history;

      return {
        ...state,
        display: state.display,
        history:
          state.history === '0' && state.accumulated === '0'
            ? state.display + ' * '
            : state.accumulated !== '0'
            ? state.accumulated + ' * '
            : history() + state.display + ' * ',
        prevOp: 'operator',
      };
    }

    case DIVIDE: {
      const history = () =>
        state.prevOp === 'operator'
          ? state.history.slice(0, state.history.length - 4)
          : state.history;

      return {
        ...state,
        display: state.display,
        history:
          state.history === '0' && state.accumulated === '0'
            ? state.display + ' / '
            : state.accumulated !== '0'
            ? state.accumulated + ' / '
            : history() + state.display + ' / ',
        prevOp: 'operator',
      };
    }

    case CLEAR: {
      return {
        display: '0',
        prevOp: '',
        accumulated: '0',
        history: '0',
      };
    }

    case EQUAL: {
      let states = state.history + state.display;
      let maths = math.evaluate(states);

      if (state.prevOp === 'equal') {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          history: math.round(maths, 4).toString(),
          display: math.round(maths, 4).toString(),
          accumulated: maths.toString(),
          prevOp: 'equal',
        };
      }
    }

    default:
      return state;
  }
}
