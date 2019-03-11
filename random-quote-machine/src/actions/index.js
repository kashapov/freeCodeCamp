import { FETCH_QUOTES, NEW_QUOTE } from "../constants";

export const fetchQuotes = () => dispatch => {
  const apiUrl =
    "https://raw.githubusercontent.com/kashapov/freeCodeCamp/Random-Quote-Machine/random-quote-machine/src/utils/quotes.json";

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Could not fetch ${apiUrl}, received ${response.status}`
        );
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

export const newQuote = randomNum => {
  return {
    type: NEW_QUOTE,
    payload: randomNum
  };
};
