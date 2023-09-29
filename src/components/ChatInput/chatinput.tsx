import React, { useState } from "react";
import styled from "styled-components";
import cameraIcon from "../../assets/images/Camera.svg";
import bottomBar from "../../assets/images/LightBottomBar.svg";
import appStoreIcon from "../../assets/images/App-Store.svg";
import dictationIcon from "../../assets/images/Dictation.svg";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend(inputValue);
      setInputValue("");
    }
  };

  return (
    <BottomBarContainer>
      <Camera src={cameraIcon} alt="camera Icon" />
      <AppStore src={appStoreIcon} alt="camera Icon" />
      <Input
        placeholder="Send Messages..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // onChange={handleInputChange}
        onKeyDown={handleInputEnter}
      />
      <Dictation src={dictationIcon} alt="dictation Icon" />
      {/* <BottomBarIcon src={bottomBar} alt="bottom bar Icon" /> */}
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.38rem;
  position: relative;
  width: 22.3125rem;
  height: 2.5rem;
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

const BottomBarIcon = styled.img`
  width: 23.4375rem;
  height: 2.125rem;
  position: absolute;
  bottom: 0;
`;

const Dictation = styled.img`
  width: 1.6875rem;
  height: 1.6875rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid var(--gray-3);
  outline: none;
  padding-left: 0.84rem;
  border-radius: 1.875rem;
  resize: none;

  &:focus {
    box-shadow: none;
  }
`;

export default ChatInput;
