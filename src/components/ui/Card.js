import styled from "styled-components";

const Card = styled.div`
  padding: ${(props) => props.padding || '1rem'};
  box-shadow: 0 15px 15px 5px rgba(0, 0, 0, 0.4);
  color: ${(props) => props.theme.colors.alt};
`;

export default Card;