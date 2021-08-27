import styled from "styled-components";

const ToolBar = (props) => {
  return ( <StyledToolbar>Future Toolbar</StyledToolbar> );
}

const StyledToolbar = styled.div`
  margin: 3.5rem auto 0 auto;
  width: 80%;
  height: 3rem;
  background-color: ${p => p.theme.altColor};
  text-align: center;
`;
 
export default ToolBar;