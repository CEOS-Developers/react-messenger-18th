import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import TopContainer from "../components/TopContainer";
import ChattingContents from "../components/ChattingContents";
import ChatInput from "../components/ChatInput";

function ChattingRoom() {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  useEffect(() => {
    if (message.trim() !== "") {
      setChatHistory((prevHistory) => [...prevHistory, message]);
    }
  }, [message]);

  const handleInput = (inputMessage: string) => {
    setMessage(inputMessage);
  };
  return (
    <div>
      <TopContainer />
      <ChatInput />
    </div>
  );
}

export default ChattingRoom;
