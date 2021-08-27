import styled from "styled-components";
import paper from "../../assets/paper-white.jpg"

const Page = styled.div`
  min-height: 100vh;
  background-image: url(${paper});
  background-size: cover;
  width: 50%;
  margin: 0 auto;
  box-shadow: inset 0px 0px 40px 5px rgba(0,0,0,0.6);
`;
 
export default Page;