import styled from "styled-components";
import SpellHeadings from "./SpellHeadings";
import Spell from "./Spell";
import spells from "../../lib/default-spells";

const SpellContainer = styled.div`
  display: grid;
  grid-template-columns: ${(p) => p.columns || "33.3% 33.3% 33.3%"};
  margin: 1rem 0.7rem;
  grid-gap: 5px 0;
`;

const HEADINGS = ["Level","Name","Range"];

const SpellList = (props) => {

  return (
    <SpellContainer columns="20% 50% 30%">
      <SpellHeadings key="heading" headings={HEADINGS}/>
      {spells.map((spell) => {
        return <Spell key={spell.index} level={spell.level} name={spell.name} range={spell.range} />
      })}
    </SpellContainer>
  );
};

export default SpellList;
