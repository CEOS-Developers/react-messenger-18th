import React, { useEffect, useRef } from "react";
import { Flex } from "../../atom/Flex";
import ChatBubbleBlue from "../../moleclues/chatroom/ChatBubbleBlue";
import ChatBubbleWhite from "../../moleclues/chatroom/ChatBubbleWhite";
import { Space } from "../../atom/Space";
import { useRecoilValue } from "recoil";
import {
  firstRoomState,
  secondRoomState,
  userAMessageState,
  userBMesasgeState,
  userCMessageState,
  userDMesasgeState,
} from "../../../recoil/atom";
import dayjs from "dayjs";
import { sortMessagesByTime } from "../../../hooks/sortMessageByTime";
import { useParams } from "react-router-dom";

export interface ChatMessage {
  time: string;
  id: string;
  text: string;
}
type ChatMessages = ChatMessage[];

function ChatArea() {
  const params = useParams();
  // useRecoilValue가 하나의 훅이어서 곧바로 조건부 할당이 불가능하기 때문에 전역변수를 모두 구독해줘야함
  const isUser1InFirstRoom = useRecoilValue(firstRoomState);
  const isUser1InSecondRoom = useRecoilValue(secondRoomState);
  const userA: ChatMessages = useRecoilValue(userAMessageState);
  const userB: ChatMessages = useRecoilValue(userBMesasgeState);
  const userC: ChatMessages = useRecoilValue(userCMessageState);
  const userD: ChatMessages = useRecoilValue(userDMesasgeState);
  // roomID에 따라 isUser1 (메시지 보내는 주체의 본인 여부) , user1Message (본인이 보낸 메시지), user2Message (상대가 보낸 메시지)에 할당하는 전역변수의 값을 다르게 할당
  const isUser1 =
    params.roomID === "1" ? isUser1InFirstRoom : isUser1InSecondRoom;
  const user1Message = params.roomID === "1" ? userA : userC;
  const user2Message = params.roomID === "1" ? userB : userD;

  // user1Message와 user2Message를 합친 후 시간을 기준으로 정렬
  const combinedMessages = sortMessagesByTime([
    ...user1Message,
    ...user2Message,
  ]);

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
      isRead: message.isRead,
    };
  });

  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // 메시지가 추가될 때마다 스크롤을 아래로 이동
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [sortedMessagesWithUser]);

  return (
    <Flex color="chatBackground" bordercolor="offWhite">
      <Flex
        width="95%"
        height="639px"
        direction="column"
        gap="22"
        overflow="scroll"
        margin="0px 16px 0px"
        inputRef={chatContainerRef}
      >
        <Space height="25px" />

        {sortedMessagesWithUser.map((el) => {
          if (isUser1)
            return el.user === "User 1" ? (
              <ChatBubbleBlue
                text={el.text}
                time={dayjs(el.time).format("h:mm a")}
                key={el.id}
                isRead={el.isRead}
              />
            ) : (
              <ChatBubbleWhite
                text={el.text}
                time={dayjs(el.time).format("h:mm a")}
                key={el.id}
              />
            );
          else
            return el.user === "User 1" ? (
              <ChatBubbleWhite
                text={el.text}
                time={dayjs(el.time).format("h:mm a")}
                key={el.id}
              />
            ) : (
              <ChatBubbleBlue
                text={el.text}
                time={dayjs(el.time).format("h:mm a")}
                key={el.id}
                isRead={el.isRead}
              />
            );
        })}

        <Space height="42px" />
      </Flex>
    </Flex>
  );
}

export default ChatArea;
