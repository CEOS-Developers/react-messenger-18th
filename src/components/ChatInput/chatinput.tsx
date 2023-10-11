import React, { useState } from "react";
import styled from "styled-components";
import cameraIcon from "../../assets/images/Camera.svg";
import appStoreIcon from "../../assets/images/App-Store.svg";
import dictationIcon from "../../assets/images/Dictation.svg";
import sendIcon from "../../assets/images/sendMessage.svg";
//채팅 입력받는 component

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  //여러줄 입력 위해 input=> textarea로 변경
  const handleInputEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        // 입력값이 공백인 경우 예외 처리
        onSend(inputValue);
      }
      // 입력값 초기화
      setIsInputFocused(false);
      setInputValue("");
    }
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setInputValue((prev) => prev + "\n");
    }
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      console.log("inputValue");
      onSend(inputValue);
    }
    setInputValue("");
  };

  const imageClick = () => {
    console.log("Click");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setIsInputFocused(e.target.value !== ""); // isInputFocused true로 설정
  };

  return (
    <BottomBarContainer>
      {!isInputFocused && <Camera src={cameraIcon} alt="camera Icon" />}
      {!isInputFocused && <AppStore src={appStoreIcon} alt="camera Icon" />}

      <InputContainer>
        <Input
          autoFocus
          placeholder="Send Messages..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputEnter}
          //한글 입력의 경우: 마지막 단어가 input으로 들어가는 에러 방지하기 위해
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          required
        />
        {isInputFocused ? (
          //handleSendClick 작동??
          <Send src={sendIcon} alt="send icon" onClick={handleSendClick} />
        ) : (
          <Dictation src={dictationIcon} alt="dictation icon" />
        )}
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
  margin-left: 1.38rem;
  /* margin-bottom: 0.81rem; */
`;

const Camera = styled.img`
  width: 1.92713rem;
  height: 1.51313rem;
  /* margin-left: 1.06rem; */
`;

const AppStore = styled.img`
  width: 2.18363rem;
  height: 1.58331rem;
`;

const Input = styled.textarea`
  width: 100%;
  font-family: "SF Pro Text";
  font-size: 0.9375rem;
  margin-right: 1.03rem;
  height: 2.125rem;
  border: 1px solid var(--gray-3);
  outline: none;
  padding-left: 0.84rem;
  border-radius: 1.875rem;
  resize: none;
  word-break: break-all;
  overflow-y: auto; //스크롤바
  padding-top: 0.5rem;
  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    display: flex;

    align-items: center;
  }

  padding-right: 2rem; //input 길어질때 방지 하기 위해
`;

const InputContainer = styled.span`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 90%;
`;

const Dictation = styled.img`
  width: 1.6875rem;
  height: 1.6875rem;
  position: absolute; //input fiield 안에 위치
  right: 1.25rem;
`;

const Send = styled.img`
  width: 1.6875rem;
  height: 1.6875rem;
  position: absolute; //input fiield 안에 위치
  right: 1.25rem;
  &:hover {
    cursor: pointer;
  }
`;

export default ChatInput;
