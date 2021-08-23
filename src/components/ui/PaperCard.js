import styled from "styled-components";
import paper from "../../assets/paper-white.jpg";
import Card from "./Card"

const PaperCard = styled(Card)`
  border-radius: 0px 0px 10px 10px;
  background-image: url(${paper});
  background-size: cover;
  border: 2px solid ${(p) => p.theme.mainColor};
  border-top: 0px solid transparent;
`;

export default PaperCard;
