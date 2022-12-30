

import { createSlice } from "@reduxjs/toolkit";

export const dropDownSlice = createSlice({
  name: "dropdown",
  initialState: {
    dropdownVal:"Prompt generation"
  },
  reducers: {
    prompt: (state) => {
      state.dropdownVal = "Prompt generation";
    },
    img_gen: (state) => {
      state.dropdownVal = "Image generation";
    },
    upscale: (state) => {
      state.dropdownVal = "Image upscaling";
    },
    
  }
});

// Action creators are generated for each case reducer function
export const { prompt, img_gen, upscale } = dropDownSlice.actions;

export default dropDownSlice.reducer;
