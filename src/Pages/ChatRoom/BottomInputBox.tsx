import React from "react";
import { styled } from "styled-components";

const BottomInputBox = () => {
  return (
    <Container>
      <img src={"/img/BottomInputBoxDefault.png"} alt="BottomInputBox" />
    </Container>
  );
};

export default BottomInputBox;

const Container = styled.div`
  position: fixed;
  bottom: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
