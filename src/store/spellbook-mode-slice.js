import { createSlice } from "@reduxjs/toolkit";

export const SPELLBOOK_MODES = {DEFAULT: 0,
CAST: 1,
DELETE: 2,
SET_ACTIVE: 3
}

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