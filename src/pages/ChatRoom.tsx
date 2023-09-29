import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ChatBox from '../components/ChatBox';
import Header from '../components/Header';
import ProfileSmallIcon from '../static/ProfileSmallIcon';
import ChatInputBar from '../components/ChatInputBar';

const ChatRoom = () => {
  return (
    <Wrapper>
      <Header />
      <ProfileSmallIcon />
      <ChatBox text={'배고파요'} hasTail={false} />
      <ChatInputBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${theme.colors.white};
`;

export default ChatRoom;
