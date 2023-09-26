import React from "react";
import StatusBar from "../moleclues/StatusBar";
import ChatNav from "../moleclues/ChatNav";
import { Flex } from "../atom/Flex";

function ChatHeader() {
  return (
    <Flex
      direction="column"
      gap="14"
      height="90px"
      justify="center"
      borderColor="offWhite"
    >
      <StatusBar />
      <ChatNav />
    </Flex>
  );
}

export default ChatHeader;
