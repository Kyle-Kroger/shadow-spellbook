import { createSlice } from "@reduxjs/toolkit";

export const SPELLBOOK_MODES = {
  DEFAULT: 0,
  CAST: 1,
  DELETE: 2,
  SET_ACTIVE: 3,
};

const initialState = {
  currentMode: SPELLBOOK_MODES.DEFAULT
};

const spellbookModeSlice = createSlice({
  name: "spellbookMode",
  initialState,
  reducers: {
    toggleMode(state, action) {
      //action.payload will be the number of the mode to switch to
      state.currentMode =
        state.currentMode === action.payload
          ? SPELLBOOK_MODES.DEFAULT
          : action.payload;
    },
  },
});

export const spellbookModeActions = spellbookModeSlice.actions;
export default spellbookModeSlice.reducer;
