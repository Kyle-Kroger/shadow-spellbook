import styled from "styled-components";

import Modal from "./Modal";

const YesNoPrompt = (props) => {
  const {message, yesFunc, noFunc} = props;
  return (
    <Modal close={noFunc}>
      <Wrapper>
        <Message>{message}</Message>
        <ButtonWrapper>
          <Button onClick={yesFunc}>Yes</Button>
          <Button onClick={noFunc}>No</Button>
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
  color: ${p => p.theme.colors.alt};
  background-color: ${p => p.theme.colors.purple};
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.highlight};
  }
`;

export default YesNoPrompt;
