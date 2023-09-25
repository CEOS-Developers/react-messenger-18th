import ChatRoomBody from 'pages/chatRoom/ChatRoomBody';
import ChatRoomFooter from 'pages/chatRoom/ChatRoomFooter';
import ChatRoomHeader from 'pages/chatRoom/ChatRoomHeader';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';

const ChatRoom = () => {
  return (
    <ChatRoomContainer>
      <ChatRoomHeader />
      <ChatRoomBody />
      <ChatRoomFooter />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  height: 100%;
  background-color: ${ChatRoomBackgroundColor};
`;

export default ChatRoom;
