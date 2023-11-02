import React, { useState, useEffect } from "react";
import styled from "styled-components";

//data
import { useRecoilValue } from "recoil";
import { userArrayState, chatArrayState } from "../assets/recoil/recoil";
import { color } from "../assets/styles/color";

//components
import SearchingBar from "../components/common/SearchingBar";
import MemoBox from "../components/ChattingList/MemoBox";
import ChatListItem from "../components/ChattingList/ChatListItem";

//bar
import bars from "../assets/images/bars.svg";
import status from "../assets/images/status.svg";

function ChattingListPage() {
  const userArray = useRecoilValue(userArrayState);
  const chatArray = useRecoilValue(chatArrayState);

  return (
    <Container>
      <StatusBar src={status} />
      <SearchingBar />
      <MemoContainer>
        {userArray.map((user) => (
          <MemoBox key={user.id} user={user} />
        ))}
      </MemoContainer>
      <Guide>
        <span className="message">메세지</span>
        <span className="request">요청</span>
      </Guide>
      <ChatListContainer>
        {chatArray.map((chatting) => (
          <ChatListItem key={chatting.chattingId} chatting={chatting} />
        ))}
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
  width: 375px;
  margin-bottom: 16px;
  margin-left: 6px;
  gap: 27px;

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
