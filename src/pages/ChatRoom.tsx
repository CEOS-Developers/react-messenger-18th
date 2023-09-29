import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ChatBox from '../components/ChatBox';

const ChatRoom = () => {
  return (
    <Wrapper>
      <ChatBox text={'배고파요'} color={'purple'} hasTail={true} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${theme.colors.white};
`;

export default ChatRoom;
