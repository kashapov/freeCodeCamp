import {
  GET_QUOTE_REQUEST,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE,
  BG_COLORS
} from "../constants";

const initialState = {
  quote: {
    author: "",
    content: ""
  },
  isFetching: true,
  errorMessage: "",
  colors: BG_COLORS
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE_REQUEST:
      return { ...state, isFetching: true };

    case GET_QUOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quote: {
          author: action.payload.author,
          content: action.payload.content
        }
      };

    case GET_QUOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message
      };

    default:
      return state;
  }
}
