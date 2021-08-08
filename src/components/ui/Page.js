import styled from "styled-components";
import paper from "../../assets/paper-white.jpg"

const StyledPage = styled.div`
  min-height: 100vh;
  background-image: url(${paper});
  background-size: cover;
  width: 49.3%;
`;

const Page = (props) => {
  return ( <StyledPage>{props.children}</StyledPage> );
}
 
export default Page;