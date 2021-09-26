import { Fragment } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import paper from "../../assets/paper-white.jpg"

const Backdrop = props => {
  return (<StyledBackdrop onClick={props.onClick}/>)
}

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = (props) => {
  return <ModalWrapper>
    <ModalContent>{props.children}</ModalContent>
  </ModalWrapper>
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 20vh;
  left: 25%;
  width: 50%;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border: 3px solid ${p => p.theme.colors.main};
  border-radius: 10px;
  background-color: white;
  background-image: url(${paper});
  background-size: cover;
  z-index: 3000;
`;

const ModalContent = styled.div`
`;

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return ( <Fragment>
    {createPortal(<Backdrop onClick={props.close} />, portalElement)}
    {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment> );
}
 
export default Modal;