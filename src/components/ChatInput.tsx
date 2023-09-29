import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { color } from "../assets/styles/color";
import { useSender } from "../assets/SenderContext";
import chatData from "../assets/data/chattingdata.json";

//components
import ChattingItem from "./ChattingItem";

//img
import mic from "../assets/images/mic.svg";
import photo from "../assets/images/photo.svg";
import sticker from "../assets/images/sticker.svg";

import camera from "../assets/images/camera.svg";
import sendingbtn from "../assets/images/sendingbtn.svg";

function ChattingInput() {
  const { sender, setSender } = useSender();
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    () => {
      const storedMessages = localStorage.getItem("chatMessages");
      return storedMessages ? JSON.parse(storedMessages) : chatData;
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        sender: sender,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  //전송버튼 팝업
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <Container sender={sender}>
        {messages.map((message, index) => (
          <ChattingItem
            key={index}
            message={message.text}
            sender={message.sender}
          />
        ))}
      </Container>
      <InputContainer onSubmit={handleSubmit}>
        <InputDiv isFocused={isFocused}>
          <CameraIcon src={camera} />
          <InputBox
            type="text"
            placeholder="메세지 보내기..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </InputDiv>
        {isFocused ? (
          <SendButton type="submit">
            <SendBtnIcon src={sendingbtn} />
          </SendButton>
        ) : (
          <IconDiv>
            <Icon src={mic} />
            <Icon src={photo} />
            <Icon src={sticker} />
          </IconDiv>
        )}
      </InputContainer>
    </>
  );
}

export default ChattingInput;

const Container = styled.div<{ sender: string }>`
  display: flex;
  flex-direction: column;

  width: 375px;
  height: 630px;
  flex-shrink: 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 352px;
  height: 41px;
  flex-shrink: 0;

  border-radius: 20px;
  padding-right: 2px;
  border: 1px solid ${color.gray2};
`;

const CameraIcon = styled.img`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  margin: 0 4px;
`;

const InputDiv = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.isFocused ? "80%" : "68%")};
`;

const InputBox = styled.input`
  color: ${color.black};
  width: 100%;
  border: none;
  outline: none;

  font-family: "Pretendard-Regular";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &::placeholder {
    color: ${color.gray3};
  }
`;

const IconDiv = styled.div`
  gap: 16px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  margin: 0 8px;
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SendBtnIcon = styled.img`
  width: 59px;
  height: 34px;
  flex-shrink: 0;
`;
