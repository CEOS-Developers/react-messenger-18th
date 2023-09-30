import React, { useState } from "react";
import styled from "styled-components";
import cameraIcon from "../../assets/images/Camera.svg";
import appStoreIcon from "../../assets/images/App-Store.svg";
import dictationIcon from "../../assets/images/Dictation.svg";

//채팅 입력받는 component

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        // 입력값이 공백인 경우 예외 처리
        onSend(inputValue);
      }
      // 입력값 초기화
      setInputValue("");
    }
  };

  return (
    <BottomBarContainer>
      <Camera src={cameraIcon} alt="camera Icon" />
      <AppStore src={appStoreIcon} alt="camera Icon" />
      <InputContainer>
        <Input
          autoFocus
          placeholder="Send Messages..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInputEnter}

          //한글 입력의 경우: 마지막 단어가 input으로 들어가는 에러 방지하기 위해
        />
        <Dictation src={dictationIcon} alt="dictation icon" />
      </InputContainer>
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.38rem;
  position: relative;
  width: 100%;
  height: 2.5rem;
  position: fixed;
  bottom: 2.125rem;
  margin-bottom: 0.81rem;
`;

const Camera = styled.img`
  width: 1.92713rem;
  height: 1.51313rem;
  margin-left: 1.06rem;
`;

const AppStore = styled.img`
  width: 2.18363rem;
  height: 1.58331rem;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 1.03rem;
  height: 2.125rem;
  border: 1px solid var(--gray-3);
  outline: none;
  padding-left: 0.84rem;
  border-radius: 1.875rem;
  resize: none;
  word-break: break-all;
  &:focus {
    box-shadow: none;
  }
`;

const InputContainer = styled.span`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const Dictation = styled.img`
  width: 1.6875rem;
  height: 1.6875rem;
  position: absolute; //input fiield 안에 위치
  right: 1.25rem;
`;

export default ChatInput;
