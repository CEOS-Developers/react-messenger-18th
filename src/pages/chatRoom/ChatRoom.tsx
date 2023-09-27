import ChatRoomBody from 'pages/chatRoom/ChatRoomBody';
import ChatRoomFooter from 'pages/chatRoom/ChatRoomFooter';
import ChatRoomHeader from 'pages/chatRoom/ChatRoomHeader';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import chatData from 'data/chatData.json';
import { TMessage } from 'types';
import { useParams } from 'react-router-dom';

const ChatRoom = () => {
  const { id }: { id?: string } = useParams();

  const [messages, setMessages] = useState<TMessage[]>(
    chatData.data.filter(
      (message) =>
        (message.fromUserId === 1 && message.toUserId === Number(id)) ||
        (message.fromUserId === Number(id) && message.toUserId === 1)
    )
  );

  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#93aad4');
  }, []);

  return (
    <ChatRoomContainer>
      <ChatRoomHeader headerRef={headerRef} />
      <ChatRoomBody messages={messages} bodyRef={bodyRef} />
      <ChatRoomFooter
        bodyRef={bodyRef}
        headerRef={headerRef}
        sendMessage={(message: string) => {
          const newMessage: TMessage = {
            id: message.length,
            toUserId: 2,
            fromUserId: 1,
            profileImage: null,
            text: message,
            time: new Date().toISOString(),
            isRead: false,
            likeCount: 0,
          };
          setMessages((state) => [...state, newMessage]);
        }}
      />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  height: 100%;
  background-color: ${ChatRoomBackgroundColor};
  display: flex;
  flex-direction: column;
`;

export default ChatRoom;
