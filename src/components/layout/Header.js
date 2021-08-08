import { Fragment } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  color: ${(props) => props.theme.altColor};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.getMainColorA(0.7)};
  border-bottom: 10px solid ${props => props.theme.purple};
  box-shadow: 0 15px 15px 5px rgba(0, 0, 0, 0.4);

  & h1,
  h3 {
    margin: 1rem;
    padding: 1rem 10%;
  }
`;

const Header = () => {
  return (
    <Fragment>
      <StyledHeader>
        <h1>The Shadow Grimoire</h1>
        <h3>A tool to manage your spells</h3>
      </StyledHeader>
    </Fragment>
  );
};

export default Header;
