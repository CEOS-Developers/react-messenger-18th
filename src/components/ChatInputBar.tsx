import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import PlusIcon from '../static/PlusIcon';
import SmileIcon from '../static/SmileIcon';
import HashIcon from '../static/HashIcon';

const ChatInputBar = () => {
  return (
    <Wrapper>
      <PlusIcon />
      <InputBox>
        <input />
        <SmileIcon />
        <HashIcon />
      </InputBox>
    </Wrapper>
  );
};

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ChatInputBar;
