import React from "react";
import ChatItem from "../../moleclues/chat/ChatItem";
import { Flex } from "../../atom/Flex";

function ChatList() {
  return (
    <Flex direction="column" gap="16" margin="16px 0px 0px" height="639px">
      <ChatItem />
      <ChatItem />
    </Flex>
  );
}

export default ChatList;
