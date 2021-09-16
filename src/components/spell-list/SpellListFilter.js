import { useState } from "react";
import styled from "styled-components";

//clear filter on click
//use state and set filterValue to '' on click
//Filter by level should create a dropdown for levels cantrip-9th

const SpellListFilter = (props) => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterNameChange = (event) => {
    setFilterValue(event.target.value);
    props.FilterSpells("name", event.target.value);
  };

  const handleFilterFocus = (event) => {
    setFilterValue('');
    props.FilterSpells("name", '');
  };

  return (
    <SpellFilterWrapper>
      <Input placeholder="Filter spells by level..." type="text" />
      <Input
        placeholder="Filter spells by name..."
        type="text"
        onChange={handleFilterNameChange}
        onFocus={handleFilterFocus}
        value={filterValue}
      />
    </SpellFilterWrapper>
  );
};

const SpellFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem auto;
  width: 90%;
  min-height: 3rem;
  background-color: transparent;
  border-radius: 5px;
  color: ${(p) => p.theme.colors.main};
  text-align: center;
  z-index: 0;

  & > * {
    color: ${(p) => p.theme.colors.alt};
  }
`;

const Input = styled.input`
  width: 45%;
  font-size: 1rem;
  background-color: ${(p) => p.theme.colors.purple};
  border-radius: 5px;
  border: 1px solid transparent;
  opacity: 0.9;
  border: 1px solid ${(p) => p.theme.colors.main};
  box-shadow: 3px 10px 15px 5px rgba(0, 0, 0, 0.4);

  &:focus {
    outline: none;
    background-color: ${(p) => p.theme.colors.highlight};
  }
`;

export default SpellListFilter;
