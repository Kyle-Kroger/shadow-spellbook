import { Fragment, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import useDelayedUnmounting from "../../hooks/use-delayed-unmounting";

import SpellDetails from "./SpellDetails";
import Prompt from "../ui/YesNoPrompt";
import { spellListActions } from "../../store/spell-list-slice";

export const SpellProperty = styled.div`
  text-align: left;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  cursor: pointer;
  text-shadow: 3px 2px 5px ${(p) => (p.highlight ? "purple" : "grey")}; //highlight active spell??
  opacity: ${p => p.fade ? 0.5 : 1}; 
`;

const Spell = (props) => {
  const {index, level, name, save, isCast } = props.spell;

  const [state, show, hide] = useDelayedUnmounting();
  const dispatch = useDispatch();
  const isCasting = useSelector((state) => state.spellbookMode.isCasting);
  const isDeleting = useSelector((state) => state.spellbookMode.isDeleting);
  const [showPrompt, setShowPrompt] = useState(false);

  const spellClickedHandler = () => {
    //check state of the book, else is default: show spell descriptions
    if (isCasting) {
      setShowPrompt(true);
    } else if (isDeleting) {
    } else {
      state === "mounted" ? hide() : show();
    }
  };

  const closePrompt = () => {
    setShowPrompt(false);
  };

  const castConfirmPrompt = () => {
    dispatch(spellListActions.castSpell(index));
    setShowPrompt(false);
  };

  const castMessage = "Would you like to cast this spell?";
  const castPrompt = <Prompt message={castMessage} noFunc={closePrompt} yesFunc={castConfirmPrompt}></Prompt>;

  return (
    <Fragment>
      {showPrompt && castPrompt}
      <SpellProperty fade={isCast} onClick={spellClickedHandler}>{level}</SpellProperty>
      <SpellProperty fade={isCast} onClick={spellClickedHandler}>{name}</SpellProperty>
      <SpellProperty fade={isCast} onClick={spellClickedHandler}>{save}</SpellProperty>
      {state !== "unmounted" && (
        <SpellDetails spell={props.spell} visible={state} />
      )}
    </Fragment>
  );
};

export default Spell;
