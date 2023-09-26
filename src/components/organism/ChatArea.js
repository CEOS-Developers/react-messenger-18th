import React from "react";
import { Flex } from "../atom/Flex";
import ChatBubbleBlue from "../moleclues/ChatBubbleBlue";
import ChatBubbleWhite from "../moleclues/ChatBubbleWhite";
import { Space } from "../atom/Space";
import { useRecoilValue } from "recoil";
import {
  isUser1State,
  user1MessageState,
  user2MesasgeState,
} from "../../recoil/atom.ts";

function ChatArea() {
  const isUser1 = useRecoilValue(isUser1State);
  const user1Message = useRecoilValue(user1MessageState);
  const user2Message = useRecoilValue(user2MesasgeState);

  // 로컬 스토리지에서 데이터꺼내오고
  // 시간상의 순서로, 객체 리스트를 Recoil에 저장함
  // 그리고 반복문에서는 객체 property에 따라서 랜더링 ChatArea

  const getDataFromLocal = () => {
    localStorage.getItem("");
  };

  return (
    <Flex color="chatBackground" borderBottom="1px" borderColor="offWhite">
      <Flex
        width="95%"
        height="639px"
        direction="column"
        gap="22"
        overflow="scroll"
        margin="0px 16px 0px"
      >
        <Space height="25px" />

        <ChatBubbleWhite />
        <ChatBubbleBlue />
        <ChatBubbleWhite />
        <ChatBubbleBlue />
        <ChatBubbleWhite />
        <ChatBubbleBlue />

        <Space height="42px" />
      </Flex>
    </Flex>
  );
}

export default ChatArea;
