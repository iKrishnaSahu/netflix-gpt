import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: 'app',
  initialState: {
    language: 'en'
  },
  reducers: {
    updateLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export default appConfigSlice.reducer;

export const { updateLanguage } = appConfigSlice.actions