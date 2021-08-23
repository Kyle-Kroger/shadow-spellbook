import { Fragment } from "react-is";
import styled from "styled-components";

export const SpellProperty = styled.div`
  text-align: left;
  padding: 0.5rem;
  text-shadow: 3px 2px 5px ${(p) => (p.highlight ? "purple" : "grey")}; //highlight active spell??
  opacity: 1; //can fade spells that have been used
`;

const Spell = (props) => {
  const {level, name, range} = props;

  return (
    <Fragment>
      <SpellProperty>{level}</SpellProperty>
      <SpellProperty>{name}</SpellProperty>
      <SpellProperty>{range}</SpellProperty>
    </Fragment>
  );
};

export default Spell;
