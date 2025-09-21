import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJokes = createAsyncThunk("api/jokes/", async () => {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?type=single&amount=10"
  );
  const data = await response.json();
  return data;
});

export const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    jokeData: {},
    isLoading: false,
    isError: false,
    error: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJokes.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.error = {};
    });
    builder.addCase(fetchJokes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
    });

    builder.addCase(fetchJokes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jokeData = action.payload;
    });
  },
});

export default jokeSlice.reducer;
