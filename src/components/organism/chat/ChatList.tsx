import React from "react";
import ChatItem from "../../moleclues/chat/ChatItem";
import { Flex } from "../../atom/Flex";

function ChatList() {
  return (
    <Flex direction="column" gap="16" margin="16px 0px 0px" height="623px">
      <ChatItem id={1} name={"이현진"}/>
      <ChatItem id={2} name={"김종완"}/>
    </Flex>
  );
}

export default ChatList;
