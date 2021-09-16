import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SpellList from "../components/spell-list/SpellList";
import SpellListFilter from "../components/spell-list/SpellListFilter";
import Page from "../components/ui/Page";
import PageCover from "../components/ui/PageCover";

import {spellListActions} from "../store/spell-list-slice";
import initSpells from "../lib/default-spells";

const ShowSpells = (props) => {
  const dispatch = useDispatch();
  const spells = useSelector(state => state.spellList.spellList);
  const [filteredSpells, setFilteredSpells] = useState([]);
  useEffect(() => {
    dispatch(spellListActions.replaceSpellList(initSpells));
    setFilteredSpells(spells);
  }, [dispatch, spells]);

  const FilterSpells = (filterBy = 'name', filterValue = '') => {
    let newSpellList;
    if(filterValue.trim() === '') {
      newSpellList = spells;
    }
    else {
      newSpellList = spells.filter(spell => {
        let re = new RegExp(`${filterValue}`, 'i');
        return spell.name.search(re) !== -1;
      });
    }
    setFilteredSpells(newSpellList);
  };

  return (
    <Fragment>
      <SpellListFilter FilterSpells={FilterSpells}/>
      <PageCover>
        <Page>
          <SpellList spells={filteredSpells}/>
        </Page>
        <Page>
          Here are some more spells
        </Page>
      </PageCover>
    </Fragment>
  );
};

export default ShowSpells;
