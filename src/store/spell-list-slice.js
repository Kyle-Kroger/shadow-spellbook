// {current} import in toolkit lets you see a current snapshot of the state allowing you to use console.log in your reducers
import { createSlice } from "@reduxjs/toolkit";

const initialState = {spellList: []};

//return an index for a randomly choosen active spell from all non-cast spells 
const getRandomActiveSpell = (spellList) => {
  //filter by non-cast spells

}

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

    //Permanently delete a spell from the list
    //needs to select a new active spell if the active spell is deleted
    deleteSpell(state, action) {},

    //fades a cast spell from the list. Setting the isCast to true changes the opacity in the spell component
    //If the spell is active should randomly select a new active spell
    castSpell(state, action) {
      for(const spell of state.spellList) {
        //check  what spell the passed in index (action.payload) matches
        if(spell.index === action.payload) {
          spell.isCast = true;
        }
      }
    },
  }
});

export const spellListActions = spellListSlice.actions;
export default spellListSlice.reducer;