import ChatRoomBody from 'pages/chatRoom/ChatRoomBody';
import ChatRoomFooter from 'pages/chatRoom/ChatRoomFooter';
import ChatRoomHeader from 'pages/chatRoom/ChatRoomHeader';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';

const ChatRoom = () => {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', '#93aad4');

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
