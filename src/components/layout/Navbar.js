import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  left: 45%;
  right: 5%;
  width: 50%;

  & ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

const ListItem = styled.li`
  flex: 1 1 auto;
  position: relative;
  text-align: center;
  color: ${(p) => p.theme.altColor};
  background-color: ${p => p.active ? 'white' : '#5e425e'};
  margin: 0 0.5rem;
  margin-bottom: ${p => p.active ? '-1.5rem' : '0'};
  padding: 0.5rem 0.3rem;
  padding-top: ${p => p.active ? '1.5rem' : '0.5rem'};
  box-shadow: 3px 10px 15px 5px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 5px 5px;
  border: 1px solid ${(p) => p.theme.mainColor};
  border-top: 0px solid transparent;

  &:hover {
    padding-top: 1.5rem;
    margin-bottom: -1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.altColor};
  display: inline-block;

  &.${(p) => p.activeClassName} {
    color: blue;
  }
`;

const NavBar = (props) => {
  const loc = useLocation();
  console.log(loc.pathname);
  return (
    <Nav>
      <ul>
        <ListItem active={loc.pathname === '/show-spells'}>
          <StyledNavLink to="/show-spells" activeClassName="active">
            View Spells
          </StyledNavLink>
        </ListItem>
        <ListItem active={loc.pathname === '/add-spell'}>
          <StyledNavLink to="/add-spell" activeClassName="active">
            Add Spell
          </StyledNavLink>
        </ListItem>
        <ListItem>Delete Spell</ListItem>
        <ListItem>Cast Spell</ListItem>
        <ListItem>Take Long Rest</ListItem>
      </ul>
    </Nav>
  );
};

export default NavBar;
