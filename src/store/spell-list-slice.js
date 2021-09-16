import { createSlice } from "@reduxjs/toolkit";

//Each spell object in the spell list should have an active and cast property
//along with all the spell data to be displayed to the user
const initialState = {spellList: []};

const spellListSlice = createSlice({
  name: "SpellList",
  initialState,
  reducers: {
    //Used when fetching the spell list from the backend
    replaceSpellList(state, action) {
      state.spellList = action.payload;
    },
    //Used on long rest to reset all cast spells and set a new active spell
    resetSpellList(state, action) {},
    //Used to add a new spell to the list
    addSpell(state, action) {},
    //Used to remove a spell from the list
    deleteSpell(state, action) {},
    //Used to set the currently active spell randomly after a spell is cast
    //Maybe get all non cast spell ids, add them to an array and randomly select an element in that array?
    randomizeSpell(state, action) {},
    //Used to cast a spell, fading it from the list so that it cannot be cast again
    castSpell(state, action) {},
  }
});

export const spellListActions = spellListSlice.actions;
export default spellListSlice.reducer;