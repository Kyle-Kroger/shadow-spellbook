import { configureStore } from "@reduxjs/toolkit";
import spellListReducer from "./spell-list-slice";
import spellbookModeReducer from "./spellbook-mode-slice"

const store = configureStore({
  reducer: {spellList: spellListReducer, spellbookMode: spellbookModeReducer},
});

export default store;