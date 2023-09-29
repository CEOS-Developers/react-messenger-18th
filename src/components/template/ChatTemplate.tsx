import React from "react";
import ChatHeader from "../organism/ChatHeader";
import ChatArea from "../organism/ChatArea";
import ChatMessageInput from "../organism/ChatMessageInput";

function ChatTemplate() {
  return (
    <>
      <ChatHeader />
      <ChatArea />
      <ChatMessageInput />
    </>
  );
}

export default ChatTemplate;
