import { Fragment, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import useDelayedUnmounting from "../../hooks/use-delayed-unmounting";

import SpellDetails from "./SpellDetails";
import { SPELLBOOK_MODES } from "../../store/spellbook-mode-slice";
import SpellPrompt from "./SpellPrompt";

const Spell = (props) => {
  const { index, level, name, save, isCast, isActive } = props.spell;

  const [state, show, hide] = useDelayedUnmounting();
  const currentMode = useSelector((state) => state.spellbookMode.currentMode);
  const [showPrompt, setShowPrompt] = useState(false);

  const spellClickedHandler = () => {
    //check state of the book, else is default: show spell descriptions
    if (currentMode === SPELLBOOK_MODES.CAST) {
      //if the spell is already cast should not be able to cast it
      //Either make nothing happen on click or a another prompt to let the user know that the spell has already been cast
      setShowPrompt(true);
    } else if (currentMode === SPELLBOOK_MODES.DELETE) {
      setShowPrompt(true);
    } else if (currentMode === SPELLBOOK_MODES.SET_ACTIVE) {
      //Need to figure out what to do if the user navigates away without an active spell set
      setShowPrompt(true);
    } else {
      state === "mounted" ? hide() : show();
    }
  };

  const spellPrompt = (
    <SpellPrompt
      spellName={name}
      spellIndex={index}
      action={currentMode}
      onClose={() => {
        setShowPrompt(false);
      }}
    />
  );

  return (
    <Fragment>
      {showPrompt && spellPrompt}
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

export const SpellProperty = styled.div`
  text-align: left;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  cursor: pointer;
  text-shadow: 3px 2px 5px ${(p) => (p.activate ? "purple" : "grey")}; //highlight active spell??
  opacity: ${(p) => (p.fade ? 0.5 : 1)};
`;

export default Spell;
