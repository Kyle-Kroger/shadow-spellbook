import styled from "styled-components";

const ArrowButton = (props) => {
  return (
    <ArrowWrapper>
      <Arrow left={props.left}/>
    </ArrowWrapper>
  );
};
const ArrowWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transform: scale(0.3);
`;
const Arrow = styled.div`
  position: relative;
  top: 50%;
  width: 72px;
  height: 10px;
  background-color: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 60%;
    height: 10px;
    right: ${p => p.left ? 0 : '-8px'};
    left: ${p => p.left ? '-8px' : 'auto'};
    background-color: white;
  }

  &:after {
    top: ${p => p.left ? '12px' : '-12px'};
    transform: rotate(45deg);
  }

  &:before {
    top: ${p => p.left ? '-12px' : '12px'};
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: rotate(-45deg);
  }
`;

//to switch the direction of the arrow: invert the top on the berfore and after
//switch the right property to left in the after, before

export default ArrowButton;
