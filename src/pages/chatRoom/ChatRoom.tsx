import ChatRoomBody from 'pages/chatRoom/ChatRoomBody';
import ChatRoomFooter from 'pages/chatRoom/ChatRoomFooter';
import ChatRoomHeader from 'pages/chatRoom/ChatRoomHeader';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import { TMessage } from 'types';
import { useParams } from 'react-router-dom';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';

const ChatRoom = () => {
  const { id }: { id?: string } = useParams();
  const { user } = useUserStore();

  const messages = useMessageStore((state) => state.messages);
  const setMessages = useMessageStore((state) => state.setMessages);

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
      <ChatRoomBody
        messages={messages.filter(
          (message) =>
            (message.fromUserId === user.id &&
              message.toUserId === Number(id)) ||
            (message.fromUserId === Number(id) && message.toUserId === user.id)
        )}
        bodyRef={bodyRef}
      />
      <ChatRoomFooter
        bodyRef={bodyRef}
        headerRef={headerRef}
        sendMessage={(message: string) => {
          const newMessage: TMessage = {
            id: messages.length,
            toUserId: Number(id),
            fromUserId: user.id,
            profileImage: null,
            text: message,
            time: new Date().toISOString(),
            isRead: true,
            likeCount: 0,
          };
          setMessages([...messages, newMessage]);
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
