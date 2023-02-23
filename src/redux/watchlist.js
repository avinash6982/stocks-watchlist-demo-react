import { createSlice } from "@reduxjs/toolkit";

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {},
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
  },
});

export const { setModules } = watchlistSlice.actions;

export default watchlistSlice.reducer;
