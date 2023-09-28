import React from "react";
import { styled } from "styled-components";

const StatusBar = () => {
  return (
    <Container>
      <img src={"/img/status_bar.png"} alt="status_bar" />
    </Container>
  );
};

export default StatusBar;

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
