import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  userInputState,
  isSearchState,
  lastMessage1State,
  lastMessage2State,
  unReadCount1State,
  unReadCount2State,
} from "../../recoil/atom";
import { dummyChatList, dummyContactList } from "../../assets/dummyList";
import { Flex } from "../atom/Flex";
import { Text } from "../atom/Text";
import { Space } from "../atom/Space";
import ChatItem from "./chat/ChatItem";
function SearchContainer() {
  const userInput = useRecoilValue(userInputState);
  const filterChatList = dummyChatList.filter((item) =>
    item.includes(userInput)
  );
  const filterContactList = dummyContactList.filter((item) =>
    item.name.includes(userInput)
  );
  const lastMessageRoom1 = useRecoilValue(lastMessage1State);
  const lastMessageRoom2 = useRecoilValue(lastMessage2State);
  const unReadCountRoom1 = useRecoilValue(unReadCount1State);
  const unReadCountRoom2 = useRecoilValue(unReadCount2State);
  return (
    <>
      <Flex gap="21" direction="column">
        <Flex direction="column" gap="15" width="335px" margin="0 auto">
          <Space height="4px" />
          {filterContactList.length === 0 ? (
            <Text>결과가 없습니다.</Text>
          ) : (
            <>
              {" "}
              <Text weight="600" padding="0px 0px 0px 3px">
                친구
              </Text>
              <Flex>
                {filterContactList.map((item) => (
                  <Flex direction="column" align="center" key={item.name}>
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
            </>
          )}
        </Flex>
        {filterChatList.length === 0 ? (
          ""
        ) : (
          <Flex direction="column" gap="15" width="335px" margin="0 auto">
            <Text weight="600">채팅방</Text>
            {filterChatList.map((item) => (
              <ChatItem
                id={item === "이현진" ? 1 : 2}
                key={item}
                name={item}
                lastMessage={
                  item ==="이현진" ? lastMessageRoom1 : lastMessageRoom2
                }
                count={item === "이현진" ? unReadCountRoom1 : unReadCountRoom2}
              ></ChatItem>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default SearchContainer;
