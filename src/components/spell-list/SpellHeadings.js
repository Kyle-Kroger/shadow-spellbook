import { Fragment } from "react-is";
import styled from "styled-components";
import { SpellProperty } from "./Spell";

const SpellHeading = styled(SpellProperty)`
  font-weight: bold;
  border-bottom: 2px solid black;
`;

const SpellHeadings = (props) => {
  return (
    <Fragment>
      {props.headings.map((heading) => {
        return <SpellHeading key={heading}>{heading}</SpellHeading>;
      })}
    </Fragment>
  );
};

export default SpellHeadings;
