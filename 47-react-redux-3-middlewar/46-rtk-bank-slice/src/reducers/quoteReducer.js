import { createSlice } from '@reduxjs/toolkit';

const QUOTE = 'quote';
const quoteState = {
  text: 'WINTER IS COMING...',
};

const quoteSlice = createSlice({
  name: QUOTE,
  initialState: quoteState,
  reducers: {
    putQuote(quote, action) {
      quote.text = action.payload;
    },
  },
});

export const { putQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
