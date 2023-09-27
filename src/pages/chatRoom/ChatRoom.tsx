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
import userData from 'data/userData.json';
import { TUser } from 'types';

const typedUserData: {
  [key: string]: TUser;
} = userData;

const ChatRoom = () => {
  const { id }: { id?: string } = useParams();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const messages = useMessageStore((state) => state.messages);
  const setMessages = useMessageStore((state) => state.setMessages);

  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const key = `user_${(Number(id) % 2) + 1}`;
    const storedUser = localStorage.getItem(key);
    setUser(storedUser ? JSON.parse(storedUser) : typedUserData[key]);
  }, [id, setUser]);

  useEffect(() => {
    if (user.id !== Number(id)) {
      setMessages(
        messages.map((message) => {
          if (
            message.fromUserId === Number(id) &&
            message.toUserId === user.id &&
            !message.isRead
          )
            return { ...message, isRead: true };
          return message;
        })
      );
    }
  }, [id, messages, setMessages, user.id]);

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
            isRead: false,
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
