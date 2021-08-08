import styled from "styled-components";
import coverImage from "../../assets/black-leather.jpg";

const StyledPageCover = styled.div`
  background-image: url(${coverImage});
  background-size: cover;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 10px 10px 15px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
`;

const PageCover = (props) => {
  return ( <StyledPageCover>{props.children}</StyledPageCover> );
}
 
export default PageCover;