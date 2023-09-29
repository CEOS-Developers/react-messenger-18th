import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import PlusIcon from '../static/PlusIcon';
import SmileIcon from '../static/SmileIcon';
import HashIcon from '../static/HashIcon';
import SendIcon from '../static/SendIcon'; // SendIcon import

interface InputInfo {
  inputText: string;
  setInputText: (text: string) => void;
}

const ChatInputBar: React.FC<InputInfo> = ({ inputText, setInputText }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    if (inputRef.current) {
      if (inputRef.current.value.trim() !== '') {
        setInputFocused(true);
      } else {
        setInputFocused(false);
      }
    }
  };

  const handleSubmit = () => {
    if (inputRef.current) {
      const newText = inputRef.current.value.trim(); // 입력값에서 앞뒤 공백을 제거
      if (newText) {
        setInputText(newText); // 유효한 입력값을 상위 컴포넌트로 업데이트
        inputRef.current.value = ''; // 입력 필드 초기화
      } else {
        // 유효하지 않은 입력값에 대한 처리를 추가할 수 있습니다.
        console.log('유효하지 않은 입력값');
      }
    }
  };

  return (
    <Wrapper>
      <PlusIcon />
      <InputBox>
        <Input
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <SmileIcon />
        {isInputFocused ? (
          <Button onClick={handleSubmit}>
            <SendIcon />
          </Button>
        ) : (
          <HashIcon />
        )}
      </InputBox>
    </Wrapper>
  );
};

const Button = styled.button`
  border: none;
  outline: none;
  padding: 0px;
  margin: 0px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

const Input = styled.input`
  width: 75%;
  border: none;
  outline: none;
  background-color: ${theme.colors.g2};
  margin-left: 11px;
  margin-top: 1px;
  margin-bottom: 1px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
  height: 2.25rem;
  border-radius: 1rem;
  border: 0.24px solid ${theme.colors.g4};
  background: ${theme.colors.g2};
  padding-right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export default ChatInputBar;
