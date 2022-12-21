import { createSlice } from '@reduxjs/toolkit';
//import { PayloadAction } from '@reduxjs/toolkit';
import { fetchQuoteAction } from '../actionFunctions/quoteAction';

const defaultQuote = {
  text: 'Winter is coming...',
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState: defaultQuote,
  reducers: {
    // putQuote(quote, action: PayloadAction<string>) {
    //   quote.text = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuoteAction.pending, (state) => {
        state.text = 'Loading...';
      })
      .addCase(fetchQuoteAction.fulfilled, (state, action) => {
        state.text = action.payload;
      })
      .addCase(fetchQuoteAction.rejected, (state) => {
        state.text = 'Error';
      });
  },
});

// export const { putQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
