import { createSlice } from "@reduxjs/toolkit";

const initialState = {isDeleting: false, isCasting: false};

const spellbookModeSlice = createSlice({
  name: "spellbookMode",
  initialState,
  reducers: {
    toggleIsDeleting(state) {
      state.isDeleting = !state.isDeleting;
      if(state.isDeleting) {
        state.isCasting = false;
      }
    },
    toggleIsCasting(state) {
      state.isCasting = !state.isCasting;
      if(state.isCasting) {
        state.isDeleting = false;
      }
    }
  }
});

export const spellbookModeActions = spellbookModeSlice.actions;
export default spellbookModeSlice.reducer;