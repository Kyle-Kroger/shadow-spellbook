import styled from "styled-components";
import PaperCard from "../ui/PaperCard";

const Nav = styled.nav`
  position: relative;
  left: 55%;
  right: 5%;
  width: 40%;
  
  & ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  & ul li {
    flex: 1 1 auto;
    position: relative;
    text-align: center;
    
  }
  & ul li + li {
    @media (min-width: 768px) {
      border-left: solid 3px ${props => props.theme.purple};
    }
  }
`;

const NavBar = (props) => {
  return (
    <Nav>
      <PaperCard padding='0.7rem'>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </PaperCard>
    </Nav>
  );
};

export default NavBar;
