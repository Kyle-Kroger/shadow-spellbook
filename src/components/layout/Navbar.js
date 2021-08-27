import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

import { spellbookModeActions } from "../../store/spellbook-mode-slice";

const NavBar = (props) => {
  const loc = useLocation();
  const hist = useHistory();
  const { pathname } = loc;

  const isDelete = useSelector((state) => state.spellbookMode.isDelete);
  const isCasting = useSelector((state) => state.spellbookMode.isCasting);
  const dispatch = useDispatch();

  const navHandler = (navTo) => {
    hist.push(navTo);
  };

  //reruns whenever any dependency changes therfore runs whenever casting tab or delete tab are clicked
  //This makes it impossible for isDelete or isCasting to be true if not on the show-spells page
  useEffect(() => {
    if (isDelete && pathname !== "/show-spells") {
      dispatch(spellbookModeActions.toggleIsDelete());
    }
    if (isCasting && pathname !== "/show-spells") {
      dispatch(spellbookModeActions.toggleIsCasting());
    }
  }, [isDelete, isCasting, pathname, dispatch]);

  const toggleDelete = () => {
    dispatch(spellbookModeActions.toggleIsDelete());
  };

  const toggleCasting = () => {
    dispatch(spellbookModeActions.toggleIsCasting());
  };

  return (
    <Nav>
      <ul>
        <ListItem
          onClick={() => navHandler("/show-spells")}
          activePage={pathname === "/show-spells"}
        >
          View Spells
        </ListItem>
        <ListItem
          onClick={() => navHandler("/add-spell")}
          activePage={pathname === "/add-spell"}
        >
          Add Spell
        </ListItem>
        <ListItem onClick={toggleDelete} activeAction={isDelete}>
          Delete Spell
        </ListItem>
        <ListItem onClick={toggleCasting} activeAction={isCasting}>
          Cast Spell
        </ListItem>
        <ListItem>Take Long Rest</ListItem>
      </ul>
    </Nav>
  );
};

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
  bottom: 1rem;
  z-index: 1;
  text-align: center;
  color: ${(p) => p.theme.altColor};
  background-color: ${(p) => p.theme.purple};
  margin: 0 0.5rem;
  margin-bottom: -1.7rem;
  padding: 0.5rem 0.3rem;
  padding-top: 1.7rem;
  box-shadow: 3px 10px 15px 5px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 5px 5px;
  border: 1px solid ${(p) => p.theme.mainColor};
  border-top: 0px solid transparent;
  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    bottom: 0;
  }

  ${(p) =>
    p.activePage &&
    css`
      color: blue;
      background-color: lightblue;
      bottom: 0;
    `}

  ${(p) =>
    p.activeAction &&
    css`
      color: green;
      background-color: pink;
      bottom: 0;

      &:hover {
        background-color: red;
      }
    `}
`;

export default NavBar;
