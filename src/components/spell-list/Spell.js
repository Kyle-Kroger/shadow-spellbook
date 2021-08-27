import { Fragment } from "react-is";
import styled from "styled-components";
import useDelayedUnmounting from "../../hooks/use-delayed-unmounting";
import SpellDetails from "./SpellDetails";

export const SpellProperty = styled.div`
  text-align: left;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  cursor: pointer;
  text-shadow: 3px 2px 5px ${(p) => (p.highlight ? "purple" : "grey")}; //highlight active spell??
  opacity: 1; //can fade spells that have been used
`;

const Spell = (props) => {
  const [state, show, hide] = useDelayedUnmounting();
  const {level, name, save} = props.spell;
  const spellClickedHandler = () => {
    state === 'mounted' ? hide() : show();
  };

  return (
    <Fragment>
      <SpellProperty onClick={spellClickedHandler}>{level}</SpellProperty>
      <SpellProperty onClick={spellClickedHandler}>{name}</SpellProperty>
      <SpellProperty onClick={spellClickedHandler}>{save}</SpellProperty>
      {state !== 'unmounted' && <SpellDetails spell={props.spell} visible={state}/>}
    </Fragment>
  );
};

export default Spell;
