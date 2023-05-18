import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    toggleMenu: (state) => {
      console.log(state);
      state.isMenuOpen = !state.isMenuOpen;
      console.log("fs");
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
