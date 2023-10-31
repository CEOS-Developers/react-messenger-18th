import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import TopContainer from "../components/ChattingRoom/TopContainer";
import ChatInput from "../components/ChattingRoom/ChatInput";

//bar
import bars from "../assets/images/bars.svg";
import status from "../assets/images/status.svg";

function ChattingRoom() {
  return (
    <Container>
      <StatusBar src={status} />
      <TopContainer />
      <ChatInput />
      <Bar src={bars} />
    </Container>
  );
}

export default ChattingRoom;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const StatusBar = styled.img`
  width: 375px;
  height: 44px;
`;

const Bar = styled.img`
  width: 375px;
  height: 34px;
`;
