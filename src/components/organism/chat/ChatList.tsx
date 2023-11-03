import React, { useEffect } from "react";
import ChatItem from "../../moleclues/chat/ChatItem";
import { Flex } from "../../atom/Flex";
import { Text } from "../../atom/Text";
import {
  firstRoomState,
  lastMessage1State,
  lastMessage2State,
  secondRoomState,
  unReadCount1State,
  unReadCount2State,
  userAMessageState,
  userBMesasgeState,
  userCMessageState,
  userDMesasgeState,
} from "../../../recoil/atom";
import { sortMessagesByTime } from "../../../hooks/sortMessageByTime";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userInputState, isSearchState } from "../../../recoil/atom";
import { dummyChatList, dummyContactList } from "../../../assets/\bdummyList";
import { Space } from "../../atom/Space";
import SearchContainer from "../../moleclues/SearchContainer";
import { ChatMessages } from "../chatroom/ChatArea";

function ChatList() {
  //  userA~userD 채팅방 1 , 채팅방 2의 주체들 
  const userAMessage: ChatMessages = useRecoilValue(userAMessageState);
  const userBMessage: ChatMessages = useRecoilValue(userBMesasgeState);
  const userCMessage : ChatMessages= useRecoilValue(userCMessageState);
  const userDMessage: ChatMessages = useRecoilValue(userDMesasgeState);
  // 각 채팅방마다 마지막 메시지 세팅
  const setLastMessage1 = useSetRecoilState(lastMessage1State);
  const setLastMessage2 = useSetRecoilState(lastMessage2State);
  // 각 채팅방마다 읽지 않은 메시지 개수 갱신
  const setUnReadCountRoom1 = useSetRecoilState(unReadCount1State);
  const setUnReadCountRoom2  = useSetRecoilState(unReadCount2State);
  // 채팅방의 주체가 자신 (정인영) 인지 여부
  const isUser1InFirstRoom : boolean= useRecoilValue(firstRoomState);
  const isUser1InSecondRoom : boolean= useRecoilValue(secondRoomState);
  // 각각의 방마다 시간대별로 정렬된 메시지
  const room1SortedMessages : ChatMessages = sortMessagesByTime([
    ...userAMessage,
    ...userBMessage,
  ]);
  const room2SortedMessages : ChatMessages= sortMessagesByTime([
    ...userCMessage,
    ...userDMessage,
  ]);
  // 각각의 방마다의 마지막 메시지
  const lastMessageRoom1 =
    room1SortedMessages[room1SortedMessages.length - 1]?.text;
  
  const lastMessageRoom2 =
    room2SortedMessages[room2SortedMessages.length - 1]?.text;
  
  // 채팅방의 주체 (정인영) 입장에서 각각의 채팅방에서 읽지 않은 메시지의 개수 count1, count2
  let count1 = 0;
  let count2 = 0;
  // 마지막 채팅방에서 자신의 메시지가 마지막일 경우에는 읽지 않은 카운트에서 제외
  if (!isUser1InFirstRoom) {
    room1SortedMessages.forEach((obj) => {
      if (!obj.isRead) count1 += 1;
    });
  }
  if (!isUser1InSecondRoom) {
    room2SortedMessages.forEach((obj) => {
      if (!obj.isRead) count2 += 1;
    });
  }

  const isSearch = useRecoilValue(isSearchState);
  useEffect(()=>{
    setLastMessage1(lastMessageRoom1);
    setLastMessage2(lastMessageRoom2);
    setUnReadCountRoom1(count1);
    setUnReadCountRoom2(count2);
  },[]);

  return (
    <>
      {isSearch ? (
        <SearchContainer />
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
