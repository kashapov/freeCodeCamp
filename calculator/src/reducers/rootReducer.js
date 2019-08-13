import { ADD, UPDATE, CLEAR, EQUAL } from '../actions/actionTypes';

const initialState = {
  display: 0,
  history: [],
  inputOne: 0,
  inputTwo: 0,
  operation: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE: {
      const updateDisplay = action.payload;

      return {
        ...state,
        display:
          state.display === 0
            ? updateDisplay.display
            : state.display + updateDisplay.display,
      };
    }

    case ADD: {
      return {
        ...state,
      };
    }

    case CLEAR: {
      return {
        ...state,
        display: 0,
      };
    }

    case EQUAL: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
