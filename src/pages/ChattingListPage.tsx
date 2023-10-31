import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { color } from "../assets/styles/color";

//components
import SearchingBar from "../components/common/SearchingBar";
import MemoBox from "../components/ChattingList/MemoBox";
import ChatListItem from "../components/ChattingList/ChatListItem";

//bar
import bars from "../assets/images/bars.svg";
import status from "../assets/images/status.svg";

function ChattingListPage() {
  return (
    <Container>
      <StatusBar src={status} />
      <SearchingBar />
      <MemoContainer>
        <MemoBox />
        <MemoBox />
        <MemoBox />
        <MemoBox />
        <MemoBox />
        <MemoBox />
      </MemoContainer>
      <Guide>
        <span className="message">메세지</span>
        <span className="request">요청</span>
      </Guide>
      <ChatListContainer>
        <ChatListItem />
        <ChatListItem />
      </ChatListContainer>
      <Bar src={bars} />
    </Container>
  );
}

export default ChattingListPage;

const Container = styled.div`
  background-color: #fff;
`;

const StatusBar = styled.img`
  width: 375px;
  height: 44px;
`;

const MemoContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  margin-left: 6px;

  width: 375px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Guide = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 18px 0 15px;

  .message {
    color: ${color.black};
    font-size: 13px;
    font-weight: 600;
  }

  .request {
    color: ${color.grey3};
    font-size: 13px;
    font-weight: 500;

    cursor: pointer;
  }
`;

const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const Bar = styled.img`
  width: 375px;
  height: 34px;
`;
