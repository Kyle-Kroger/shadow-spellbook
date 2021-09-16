import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  color: ${p => p.theme.colors.alt};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  border-bottom: 3px solid ${props => props.theme.colors.alt};
  position: relative;
  z-index: 10;
  
  & h1,
  h3 {
    margin: 1rem;
    padding: 0.2rem 10%;
  }
`;

const Header = () => {
  return (
      <StyledHeader>
        <h1>The Shadow Grimoire</h1>
        <h3>Login</h3>
      </StyledHeader>
  );
};

export default Header;
