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
  // 전역 변수 구독
  const isUser1 = useRecoilValue(isUser1State);
  const user1Message = useRecoilValue(user1MessageState);
  const user2Message = useRecoilValue(user2MesasgeState);

  // user1Message와 user2Message를 합친 후 시간을 기준으로 정렬
  console.log([...user1Message, ...user2Message]);
  const combinedMessages = [...user1Message, ...user2Message].sort((a, b) => {
    const timeA = a.time;
    const timeB = b.time;
    if (timeA < timeB) return -1;
    if (timeA > timeB) return 1;
    return 0;
  });



  // 정렬된 메시지 리스트에 user 속성 추가
  const sortedMessagesWithUser = combinedMessages.map((message) => {
    const user = user1Message.find(
      (userMessage) => userMessage.id === message.id
    )
      ? "User 1"
      : "User 2";
    return {
      time: message.time,
      text: message.text,
      id: message.id,
      user: user,
    };
  });

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

        {sortedMessagesWithUser.map((el) => {
          if (isUser1)
            return el.user === "User 1" ? (
              <ChatBubbleBlue text={el.text} time={el.time} key={el.id} />
            ) : (
              <ChatBubbleWhite text={el.text} time={el.time} key={el.id} />
            );
          else
            return el.user === "User 1" ? (
              <ChatBubbleWhite text={el.text} time={el.time} key={el.id} />
            ) : (
              <ChatBubbleBlue text={el.text} time={el.time} key={el.id} />
            );
        })}

        <Space height="42px" />
      </Flex>
    </Flex>
  );
}

export default ChatArea;
