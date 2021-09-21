import { useEffect, useState } from "react";
import styled from "styled-components";

//clear filter on click
//use state and set filterValue to '' on click
//Filter by level should create a dropdown for levels cantrip-9th

const SpellListFilter = (props) => {
  const { filterSpells } = props;

  const [filterNameValue, setFilterNameValue] = useState("");
  const [filterLevelValue, setFilterLevelValue] = useState("");

  //will run whenever any of the dependencies change, need to memoize filterSpells (useCallback)
  //Should run whenever the filters are changed so that spell list is filtered by both values
  //Whenever either of the values change
  useEffect(() => {
    filterSpells({ name: filterNameValue, level: filterLevelValue });
  }, [filterSpells, filterNameValue, filterLevelValue]);

  const handleFilterChange = (event) => {
    if (event.target.id === "name") {
      setFilterNameValue(event.target.value);
    } else if (event.target.id === "level") {
      setFilterLevelValue(event.target.value);
    }
    //Should then run the useEffect to filter
  };

  const handleFilterFocus = (event) => {
    if (event.target.id === "name") {
      setFilterNameValue("");
    } else if (event.target.id === "level") {
      setFilterLevelValue("");
    }
    //Should then run the useEffect to filter
  };

  return (
    <SpellFilterWrapper>
      <Input
        id="level"
        list="levels"
        placeholder="Filter spells by level..."
        type="text"
        onChange={handleFilterChange}
        onFocus={handleFilterFocus}
        value={filterLevelValue}
      />
      <datalist id="levels">
        <option value="Cantrip" />
        <option value="1st" />
        <option value="2nd" />
        <option value="3rd" />
        <option value="4th" />
        <option value="5th" />
        <option value="6th" />
        <option value="7th" />
        <option value="8th" />
        <option value="9th" />
      </datalist>
      <Input
        autoComplete="off"
        id="name"
        placeholder="Filter spells by name..."
        type="text"
        onChange={handleFilterChange}
        onFocus={handleFilterFocus}
        value={filterNameValue}
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
