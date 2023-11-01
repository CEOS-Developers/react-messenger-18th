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
import { useRecoilState, useRecoilValue } from "recoil";
import { userInputState, isSearchState } from "../../../recoil/atom";
import { Text } from "../../atom/Text";
import { dummyChatList, dummyContactList } from "../../../assets/\bdummyList";

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
    room1SortedMessages[room1SortedMessages.length - 1]?.text;
  const lastMessageRoom2 =
    room2SortedMessages[room2SortedMessages.length - 1]?.text;
  // user1 (정인영) 입장에서 각각의 채팅방에서 읽지 않은 메시지의 개수 count1, count2
  let count1 = 0;
  let count2 = 0;
  // 마지막 채팅방에서 자신의 메시지가 마지막일 경우에는 읽지 않은 카운트에서 제외
  if (!isUser1InFirstRoom) {
    room1SortedMessages.forEach((obj) => {
      {
      }
      if (!obj.isRead) count1 += 1;
    });
  }
  if (!isUser1InSecondRoom) {
    room2SortedMessages.forEach((obj) => {
      if (!obj.isRead) count2 += 1;
    });
  }
  const isSearch = useRecoilValue(isSearchState);
  const userInput = useRecoilValue(userInputState);
  const filterdChatList = dummyChatList.filter((item) =>
    item.includes(userInput)
  );

  return (
    <>
      {isSearch ? (
        <Flex direction="column" gap="21px">
          <Flex>
            <Text>친구</Text>
            <Flex></Flex>
          </Flex>
          <Flex>
            <Text>채팅방</Text>
          </Flex>
        </Flex>
      ) : (
        <Flex direction="column" gap="16" margin="16px 0px 0px" height="623px">
          <ChatItem
            id={1}
            name={"이현진"}
            lastMessage={lastMessageRoom1}
            count={count1}
          />
          <ChatItem
            id={2}
            name={"김종완"}
            lastMessage={lastMessageRoom2}
            count={count2}
          />
        </Flex>
      )}
    </>
  );
}

export default ChatList;
