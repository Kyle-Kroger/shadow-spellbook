import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  color: ${(props) => props.theme.altColor};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  border-bottom: 3px solid ${props => props.theme.altColor};
  box-shadow: 0 15px 15px 5px rgba(0, 0, 0, 0.4);

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
