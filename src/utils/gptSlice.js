import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearchComponent: false,
    suggestedMovies: null
  },
  reducers: {
    toggleShowGptSearchComponent: (state, _action) => {
      state.showGptSearchComponent = !state.showGptSearchComponent;
    },
    addSuggestedMovie: (state, _action) => {
      state.suggestedMovies = _action.payload;
    }
  }
})

export default gptSlice.reducer;

export const { toggleShowGptSearchComponent, addSuggestedMovie } = gptSlice.actions;