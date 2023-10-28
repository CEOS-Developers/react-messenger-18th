import React from "react";
import ChatItem from "../../moleclues/chat/ChatItem";
import { Flex } from "../../atom/Flex";
import {
  firstRoomState,
  secondRoomState,
  userAMessageState,
  userBMesasgeState,
  userCMessageState,
  userDMesasgeState,
} from "../../../recoil/atom";
import { sortMessagesByTime } from "../../../hooks/sortMessageByTime";
import { useRecoilValue } from "recoil";

function ChatList() {
  const userAMessage = useRecoilValue(userAMessageState);
  const userBMessage = useRecoilValue(userBMesasgeState);
  const userCMessage = useRecoilValue(userCMessageState);
  const userDMessage = useRecoilValue(userDMesasgeState);
  const isUser1InFirstRoom = useRecoilValue(firstRoomState);
  const isUser1InSecondRoom = useRecoilValue(secondRoomState);
  const room1SortedMessages = sortMessagesByTime([
    ...userAMessage,
    ...userBMessage,
  ]);
  const room2SortedMessages = sortMessagesByTime([
    ...userCMessage,
    ...userDMessage,
  ]);
  const lastMessageRoom1 =
    room1SortedMessages[room1SortedMessages.length - 1].text;
  const lastMessageRoom2 =
    room2SortedMessages[room2SortedMessages.length - 1].text;
     
  return (
    <Flex direction="column" gap="16" margin="16px 0px 0px" height="623px">
      <ChatItem id={1} name={"이현진"} lastMessage={lastMessageRoom1} />
      <ChatItem id={2} name={"김종완"} lastMessage={lastMessageRoom2} />
    </Flex>
  );
}

export default ChatList;
