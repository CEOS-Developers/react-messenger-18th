import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//components
import TopContainer from "../components/ChattingRoom/TopContainer";
import ChatInput from "../components/ChattingRoom/ChatInput";

//bar
import status from "../assets/images/status.svg";

function ChattingRoom() {
  const { chat_id } = useParams();
  const friendId: number = parseInt(chat_id || "1", 10);
  return (
    <Container>
      <StatusBar src={status} />
      <TopContainer friendId={friendId} />
      <ChatInput friendId={friendId} />
    </Container>
  );
}

export default ChattingRoom;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  width: 375px;
  height: 812px;
`;

const StatusBar = styled.img`
  width: 375px;
  height: 44px;
`;

const Bar = styled.img`
  width: 375px;
  height: 34px;
`;
