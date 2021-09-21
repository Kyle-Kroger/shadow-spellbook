import { Fragment, useEffect, useState, useCallback } from "react";
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

  const filterSpells = useCallback( (filters = {name:''}) => {
    let newSpellList = [...spells];
    for (const filter in filters) {
      const filterValue = filters[filter];
      let re = new RegExp(`${filterValue}`, 'i');
      newSpellList = newSpellList.filter(spell => spell[filter].search(re) !== -1)
    }
    setFilteredSpells(newSpellList);
  }, [spells]);

  return (
    <Fragment>
      <SpellListFilter filterSpells={filterSpells}/>
      <PageCover>
        <Page>
          <SpellList spells={filteredSpells.slice(0, Math.ceil(filteredSpells.length / 2))}/>
        </Page>
        <Page>
          <SpellList spells={filteredSpells.slice(Math.ceil(filteredSpells.length / 2 ))}/>
        </Page>
      </PageCover>
    </Fragment>
  );
};

export default ShowSpells;
