import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
  },
});

export const { incrementCount, decrementCount } = counterSlice.actions;
export default counterSlice.reducer;
