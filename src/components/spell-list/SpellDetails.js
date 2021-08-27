import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

const SpellDetails = (props) => {
  const {
    index,
    desc,
    higher_level,
    range,
    components,
    duration,
    concentration,
    casting_time,
    level,
    save,
  } = props.spell;

  const { visible } = props;

  //allows for css transitions to trigger on start up
  //Will render the component with false values then switch to true values
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, [])

  const spellProperties = [
    { label: "level", val: level },
    { label: "casting time", val: casting_time },
    { label: "range", val: range },
    { label: "components", val: components },
    { label: "duration", val: duration },
    { label: "attack/save", val: save },
  ];

  const createSpellProperties = () => {
    return spellProperties.map((property) => {
      return (
        <SpellPropertyWrap key={property.label}>
          <SpellPropertyLabel>{property.label}</SpellPropertyLabel>
          <SpellPropertyValue>
            {concentration && property.label === "duration"
              ? "Concentration: "
              : ""}
            {property.val}
          </SpellPropertyValue>
        </SpellPropertyWrap>
      );
    });
  };

  return (
    <SpellDetailsContainer visible={visible} render={render}>
      <SpellPropertiesContainer>
        {createSpellProperties()}
      </SpellPropertiesContainer>
      <SpellDivider />
      <SpellDescContainer>
        {desc.map((text) => {
          return <p key={"need a key for the paras"}>{text}</p>;
        })}
        <p>{higher_level}</p>
      </SpellDescContainer>
    </SpellDetailsContainer>
  );
};

const SpellDetailsContainer = styled.div`
  grid-column: 1 / 4;
  border: 2px solid black;
  margin-bottom: -8px;
  opacity: ${p => p.render ? 1 : 0};
  height: 100%;
  overflow: hidden;
  transition: opacity 2s linear 0.5s, height 0.5s;

  ${(p) =>
    p.visible === "unmounting" &&
    css`
      opacity: 0;
      height: 0;
      transition: opacity 2s, height 0.1s linear 2s;
    `}
`;

const SpellPropertiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SpellPropertyWrap = styled.div`
  flex: 33.3%;
`;

const SpellPropertyLabel = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;
  display: block;
`;

const SpellPropertyValue = styled.div`
  display: block;
`;

const SpellDivider = styled.div`
  margin: 1.5rem auto;
  height: 3px;
  width: 80%;
  background-color: ${(p) => p.theme.mainColor};
`;

const SpellDescContainer = styled.div`
  & p {
    margin: 1rem 0.5rem;
  }
  & p:last-child {
    padding-bottom: 0.5rem;
  }
`;

export default SpellDetails;
