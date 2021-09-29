import styled from "styled-components";

import Modal from "./Modal";

const OkayPrompt = (props) => {
  const { message, onClose: handleClose } = props;

  return (
    <Modal>
      <Wrapper>
        <Message>{message}</Message>
        <ButtonWrapper>
          <Button onClick={handleClose}>Okay</Button>
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Message = styled.h4``;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  min-width: 120px;
  margin: 10px;
  padding: 10px;
  color: ${(p) => p.theme.colors.alt};
  background-color: ${(p) => p.theme.colors.purple};
  border: 1px solid ${(p) => p.theme.colors.main};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.highlight};
  }
`;

export default OkayPrompt;
