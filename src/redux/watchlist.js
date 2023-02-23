import { createSlice } from "@reduxjs/toolkit";

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWatchlist: (state, action) => {
      console.warn(state);
      state.items = [...state.items, action.payload];
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item["1. symbol"] !== action.payload
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
