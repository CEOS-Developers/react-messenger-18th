import React from "react";
import ChatItem from "../../moleclues/chat/ChatItem";
import { Flex } from "../../atom/Flex";
import { Text } from "../../atom/Text";
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
import { dummyChatList, dummyContactList } from "../../../assets/\bdummyList";
import { Space } from "../../atom/Space";

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
  const filterChatList = dummyChatList.filter((item) =>
    item.includes(userInput)
  );
  const filterContactList = dummyContactList.filter((item) =>
    item.name.includes(userInput)
  );
  return (
    <>
      {isSearch ? (
        <Flex gap="21" direction="column">
          <Flex direction="column" gap="15" width="335px" margin="0 auto">
            <Space height="4px" />
            <Text weight="600" padding="0px 0px 0px 3px">
              친구
            </Text>
            <Flex>
              {filterContactList.map((item) => (
                <Flex direction="column" align="center">
                  <Flex
                    color="mainBlue"
                    width="47px"
                    height="48px"
                    align="center"
                    justify="center"
                    margin="4px"
                    radius="4px"
                  >
                    <Text color="white" weight="700" font="Lato">
                      {item.name[0]}
                    </Text>
                  </Flex>
                  <Text size="14px">{item.name}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex direction="column" gap="15" width="335px" margin="0 auto">
            <Text weight="600">채팅방</Text>
            {filterChatList.map((item) => (
              <ChatItem
                id={"이현진" ? 1 : 2}
                name={item}
                lastMessage={
                  item == "이현진" ? lastMessageRoom1 : lastMessageRoom2
                }
                count={item == "이현진" ? count1 : count2}
              ></ChatItem>
            ))}
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
