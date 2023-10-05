import React from "react";
import ChatHeader from "../organism/ChatHeader";
import ChatArea from "../organism/ChatArea";
import ChatMessageInput from "../organism/ChatMessageInput";

function ChatRoomTemplate() {
  return (
    <>
      <ChatHeader />
      <ChatArea />
      <ChatMessageInput />
    </>
  );
}

export default ChatRoomTemplate;
