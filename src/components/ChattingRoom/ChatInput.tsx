import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { color } from "../../assets/styles/color";
import { useSender } from "../../assets/SenderContext";
//data
import { useRecoilValue } from "recoil";
import { chatArrayState } from "../../assets/recoil/recoil";
//components
import ChattingItem from "./ChattingItem";

//img
import mic from "../../assets/images/mic.svg";
import photo from "../../assets/images/photo.svg";
import sticker from "../../assets/images/sticker.svg";

import camera from "../../assets/images/camera.svg";
import sendingbtn from "../../assets/images/sendingbtn.svg";

function ChattingInput({ friendId }: { friendId: number }) {
  const { sender, setSender } = useSender();
  const [inputMessage, setInputMessage] = useState("");

  const chatArray = useRecoilValue(chatArrayState);
  const chattingId: number = friendId - 1;

  const [messages, setMessages] = useState<
    { text: string; sender: number; timestamp: string }[]
  >(() => {
    const storedMessages = localStorage.getItem(`chatMessages${friendId}`);
    return storedMessages
      ? JSON.parse(storedMessages)
      : chatArray[chattingId].chatList;
  });

  // 제출시 실행되는 함수
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputBoxRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        sender: sender,
        timestamp: new Date().toString(),
      };
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  const handleSendButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit(e);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    localStorage.setItem(`chatMessages${friendId}`, JSON.stringify(messages));
  }, [messages, friendId]);

  // 전송버튼 팝업
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  // 엔터로 전송, shift+엔터로 줄바꿈
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  //줄 바뀌면 textarea 높이 같이 증가
  const autoAdjustTextarea = (element: HTMLTextAreaElement) => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  // //시간 계산 관련 코드
  const [isDateMessage, setIsDateMessage] = useState<boolean>(false);

  const handleIsDate = (
    message: { text: string; sender: number; timestamp: string },
    index: number
  ) => {
    const timestamp = new Date(message.timestamp);
    if (index === 0) {
      setIsDateMessage(true);
    } else if (index > 0) {
      const prevMessage = messages[index - 1];
      const prevTimestamp = new Date(prevMessage.timestamp);

      const timeDifference = timestamp.getTime() - prevTimestamp.getTime();

      if (timeDifference >= 60 * 60 * 1000) {
        // 1시간 이상 차이
        const hours = timestamp.getHours();
        const minutes = timestamp.getMinutes();
        const amOrPm = hours < 12 ? "오전" : "오후";
        const newDate = `${amOrPm} ${hours % 12}:${minutes}`;
        setIsDateMessage(true);
        return newDate;
      } else if (timeDifference >= 24 * 60 * 60 * 1000) {
        // 1일 이상 차이
        const month = timestamp.getMonth() + 1;
        const day = timestamp.getDate();
        const hours = timestamp.getHours();
        const minutes = timestamp.getMinutes();
        const amOrPm = hours < 12 ? "오전" : "오후";
        const newDate = `${month}월 ${day}일 ${amOrPm} ${
          hours % 12
        }:${minutes}`;
        setIsDateMessage(true);
        return newDate;
      } else {
        setIsDateMessage(false);
        return null; // 시간 차이가 1시간 미만, 1일 미만인 경우
      }
    }
  };

  return (
    <>
      <Container ref={containerRef}>
        {messages.map((message, index) => (
          <ChattingItem
            key={index}
            message={message.text}
            sender={message.sender}
            isLastItem={
              index === messages.length - 1 ||
              (index < messages.length - 1 &&
                message.sender !== messages[index + 1].sender)
            }
            timestamp={message.timestamp}
            isDateMessage={isDateMessage}
          />
        ))}
      </Container>
      <InputContainer onSubmit={handleSubmit}>
        <InputDiv>
          <CameraIcon src={camera} />
          <InputBox
            placeholder="메세지 보내기..."
            onFocus={(e) => {
              handleInputFocus();
              autoAdjustTextarea(e.target);
            }}
            onBlur={handleInputBlur}
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
              autoAdjustTextarea(e.target);
            }}
            onKeyDown={handleKeyDown}
            ref={inputBoxRef}
          />
          {isFocused ? (
            <SendButton onClick={handleSendButtonClick}>
              <SendBtnIcon src={sendingbtn} />
            </SendButton>
          ) : (
            <IconDiv>
              <Icon src={mic} />
              <Icon src={photo} />
              <Icon src={sticker} />
            </IconDiv>
          )}
        </InputDiv>
      </InputContainer>
    </>
  );
}

export default ChattingInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 375px;
  height: 672px;
  flex-shrink: 0;
  gap: 8px;
  padding: 16px 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputContainer = styled.form`
  position: absolute;
  bottom: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #fff;

  width: 352px;
  max-height: 110px;
  flex-shrink: 0;

  border-radius: 20px;
  padding: 4px;
  border: 1px solid ${color.grey2};
`;

const CameraIcon = styled.img`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  margin: 0 4px;
`;

const InputDiv = styled.form`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const InputBox = styled.textarea`
  color: ${color.black};
  width: 100%;
  min-height: 42px;
  max-height: 102px;
  resize: none;
  border: none;
  outline: none;
  word-break: break-all;

  font-family: "Pretendard-Regular";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &::placeholder {
    color: ${color.grey3};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const IconDiv = styled.div`
  display: flex;
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
