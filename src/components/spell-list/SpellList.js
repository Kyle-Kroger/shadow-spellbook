import styled from "styled-components";
import SpellHeadings from "./SpellHeadings";
import Spell from "./Spell";

const SpellContainer = styled.div`
  display: grid;
  grid-template-columns: ${(p) => p.columns || "33.3% 33.3% 33.3%"};
  margin: 1rem 0.7rem;
  grid-gap: 5px 0;
  min-height: 0;
  min-width: 0;
`;

const HEADINGS = ["Level","Name","Attack/Save"];

const SpellList = (props) => {

  return (
    <SpellContainer columns="20% 50% 30%">
      <SpellHeadings key="heading" headings={HEADINGS}/>
      {props.spells.map((spell) => {
        return <Spell key={spell.index} spell={spell} />
      })}
    </SpellContainer>
  );
};

export default SpellList;
