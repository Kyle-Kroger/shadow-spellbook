import { Fragment, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import useDelayedUnmounting from "../../hooks/use-delayed-unmounting";

import SpellDetails from "./SpellDetails";
import Prompt from "../ui/YesNoPrompt";
import { spellListActions } from "../../store/spell-list-slice";
import { SPELLBOOK_MODES } from "../../store/spellbook-mode-slice";

export const SpellProperty = styled.div`
  text-align: left;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  cursor: pointer;
  text-shadow: 3px 2px 5px ${(p) => (p.highlight ? "purple" : "grey")}; //highlight active spell??
  opacity: ${(p) => (p.fade ? 0.5 : 1)};
`;

const Spell = (props) => {
  const { index, level, name, save, isCast, isActive } = props.spell;

  const [state, show, hide] = useDelayedUnmounting();
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.spellbookMode.currentMode);
  const [showCastPrompt, setShowCastPrompt] = useState(false);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);

  const spellClickedHandler = () => {
    //check state of the book, else is default: show spell descriptions
    if (currentMode === SPELLBOOK_MODES.CAST) {
      setShowCastPrompt(true);
    } else if (currentMode === SPELLBOOK_MODES.DELETE) {
      setShowDeletePrompt(true);
    } else if (currentMode === SPELLBOOK_MODES.SET_ACTIVE) {
      //Need to figure out what to do if the user navigates away without an active spell set
    } else {
      state === "mounted" ? hide() : show();
    }
  };

  const closeCastPrompt = () => {
    setShowCastPrompt(false);
  };

  const castConfirmPrompt = () => {
    dispatch(spellListActions.castSpell(index));
    setShowCastPrompt(false);
  };

  const closeDeletePrompt = () => {
    setShowDeletePrompt(false);
  };

  const deleteConfirmPrompt = () => {
    dispatch(spellListActions.deleteSpell(index));
    setShowDeletePrompt(false);
  };

  const castMessage = `Would you like to cast ${name}?`;
  const castPrompt = (
    <Prompt
      message={castMessage}
      noFunc={closeCastPrompt}
      yesFunc={castConfirmPrompt}
    ></Prompt>
  );

  const deleteMessage = `Are you certain you want to permanently delete ${name} from the spellbook? This action is irreversible`;
  const deletePrompt = (
    <Prompt
      message={deleteMessage}
      noFunc={closeDeletePrompt}
      yesFunc={deleteConfirmPrompt}
    ></Prompt>
  );

  return (
    <Fragment>
      {showCastPrompt && castPrompt}
      {showDeletePrompt && deletePrompt}
      <SpellProperty
        activate={isActive}
        fade={isCast}
        onClick={spellClickedHandler}
      >
        {level}
      </SpellProperty>
      <SpellProperty
        activate={isActive}
        fade={isCast}
        onClick={spellClickedHandler}
      >
        {name}
      </SpellProperty>
      <SpellProperty
        activate={isActive}
        fade={isCast}
        onClick={spellClickedHandler}
      >
        {save}
      </SpellProperty>
      {state !== "unmounted" && (
        <SpellDetails spell={props.spell} visible={state} />
      )}
    </Fragment>
  );
};

export default Spell;
