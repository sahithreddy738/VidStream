import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addSuggestionsCache: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addSuggestionsCache } = serachSlice.actions;

export default serachSlice.reducer;
