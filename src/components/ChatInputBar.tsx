import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import PlusIcon from '../static/PlusIcon';
import SmileIcon from '../static/SmileIcon';
import HashIcon from '../static/HashIcon';
import SendIcon from '../static/SendIcon'; // SendIcon import

const ChatInputBar = () => {
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

  const handleIconClick = () => {
    console.log('보내기');
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
          <Button onClick={handleIconClick}>
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
  width: 19rem;
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
  padding: 12px;
`;

export default ChatInputBar;
