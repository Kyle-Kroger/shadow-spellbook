import styled from "styled-components";
import paper from "../../assets/paper-white.jpg";

const Card = styled.div`
  padding: ${(props) => props.padding};
  box-shadow: 0 15px 15px 5px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 10px 10px;
  background-image: url(${paper});
  background-size: cover;
  color: ${(props) => props.theme.mainColor};
`;

const PaperCard = (props) => {
  return (
    <Card
      className={props.className}
      padding={props.padding || "1rem"}
    >
      {props.children}
    </Card>
  );
};

export default PaperCard;
