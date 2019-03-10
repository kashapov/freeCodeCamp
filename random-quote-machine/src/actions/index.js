import { FETCH_QUOTES, NEW_QUOTE } from "../constants";

export const fetchQuotes = () => dispatch => {
  fetch(
    "https://raw.githubusercontent.com/kashapov/freeCodeCamp/Random-Quote-Machine/random-quote-machine/src/utils/quotes.json"
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then(data => {
      dispatch({ type: FETCH_QUOTES, payload: data.quotes });
    })
    .catch(error => {
      console.log(error);
    });
};

export const newQuote = randomNo => {
  return {
    type: NEW_QUOTE,
    payload: randomNo
  };
};
