import { configureStore } from "@reduxjs/toolkit";
import spellListReducer from "./spell-list-slice";

const store = configureStore({
  reducer: {spellList: spellListReducer},
});

export default store;