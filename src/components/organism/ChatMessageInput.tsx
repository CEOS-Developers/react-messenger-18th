import React from "react";
import ChatInput from "../moleclues/ChatInput";
import BottomLine from "../moleclues/BottomLine";
import { Space } from "../atom/Space";

function ChatMessageInput() {
  return (
    <>
      <ChatInput />
      <Space height="5px" />
      <BottomLine />
    </>
  );
}

export default ChatMessageInput;
