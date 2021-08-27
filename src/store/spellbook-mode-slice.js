import { createSlice } from "@reduxjs/toolkit";

const initialState = {isDelete: false, isCasting: false};

const spellbookModeSlice = createSlice({
  name: "spellbookMode",
  initialState,
  reducers: {
    toggleIsDelete(state) {
      state.isDelete = !state.isDelete;
      if(state.isDelete) {
        state.isCasting = false;
      }
    },
    toggleIsCasting(state) {
      state.isCasting = !state.isCasting;
      if(state.isCasting) {
        state.isDelete = false;
      }
    }
  }
});

export const spellbookModeActions = spellbookModeSlice.actions;
export default spellbookModeSlice.reducer;