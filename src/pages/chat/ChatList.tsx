import ChatListBody from 'pages/chat/ChatListBody';
import ChatListHeader from 'pages/chat/ChatListHeader';
import styled from 'styled-components';

const ChatList = () => {
  return (
    <ChatListContainer>
      <ChatListHeader />
      <ChatListBody />
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  flex: 1;
  overflow: hidden;
  width: 100%;
  background-color: var(--Background-White);
  display: flex;
  flex-direction: column;
`;

export default ChatList;
