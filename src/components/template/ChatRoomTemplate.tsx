import React from "react";
import ChatHeader from "../organism/chatroom/ChatHeader";
import ChatArea from "../organism/chatroom/ChatArea";
import ChatMessageInput from "../organism/chatroom/ChatMessageInput";

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
