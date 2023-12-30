import { createSlice } from "@reduxjs/toolkit";

interface IContent {
  isOpen: boolean;
}

const initialState: IContent = {
  isOpen: false,
};

const contentSlice = createSlice({
  name: "content-slice",
  initialState,
  reducers: {
    toggoleIsOpenRed: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default contentSlice.reducer;
export const { toggoleIsOpenRed } = contentSlice.actions;
