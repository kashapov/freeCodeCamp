import axios from "axios";

import {
  GET_QUOTE_REQUEST,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE
} from "../constants";
import { getRandomQuoteApiUrl } from "../config";

export const getQuote = () => dispatch => {
  dispatch({ type: GET_QUOTE_REQUEST });

  axios
    .get(`${getRandomQuoteApiUrl}`)
    .then(response =>
      dispatch({ type: GET_QUOTE_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: GET_QUOTE_FAILURE, payload: error }));
};
