// handleKeyDown.js
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getTime } from "./getTime";
export function handleKeyDown(
  event,
  inputMessage,
  isUser1,
  setUser1Message,
  user1Message,
  setUser2Message,
  user2Message,
  setInputMessage
) {
  // 한글 입력시 두 번 입력 방지
  if (event.nativeEvent.isComposing) {
    return;
  }
  if (event.key === "Enter") {
    if (inputMessage.trim().length > 0) {
      const newMessage = {
        time: getTime("YYYY-MM-DD HH:mm:ss"),
        id: uuidv4(),
        text: inputMessage,
      };
      if (isUser1) {
        setUser1Message([...user1Message, newMessage]);
        localStorage.setItem("user1Message", JSON.stringify(user1Message));
      } else {
        setUser2Message([...user2Message, newMessage]);
        localStorage.setItem("user2Message", JSON.stringify(user2Message));
      }
      setInputMessage("");
    }
  }
}
