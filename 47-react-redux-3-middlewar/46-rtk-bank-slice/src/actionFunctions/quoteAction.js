import { putQuote } from '../reducers/quoteReducer';

export const fetchQuoteAction = () => {
  return (dispatch) => {
    dispatch(putQuote('Pending....'));
    fetch('https://api.kanye.rest/')
      .then((response) => response.json())
      .then((body) => dispatch(putQuote(body.quote)))
      .catch((e) => dispatch(e));
  };
};
