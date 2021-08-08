import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  background-color: ${(props) => props.theme.getMainColorA(0.7)};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  & p {
    margin: 0 4rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Footer Stuff</p>
    </StyledFooter>
  );
};

export default Footer;
