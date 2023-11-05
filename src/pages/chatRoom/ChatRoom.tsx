import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';
import ChatRoomBody from 'pages/chatRoom/ChatRoomBody';
import ChatRoomFooter from 'pages/chatRoom/ChatRoomFooter';
import ChatRoomHeader from 'pages/chatRoom/ChatRoomHeader';
import styled from 'styled-components';
import { TMessage } from 'types';

const ChatRoom = () => {
  const { id }: { id?: string } = useParams(); // 채팅의 대상
  const user = useUserStore((state) => state.user); // 채팅앱의 주체

  const messages = useMessageStore((state) => state.messages);

  const setMessages = useMessageStore((state) => state.setMessages);
  const toggleIsRead = useMessageStore((state) => state.toggleIsRead);

  const navigate = useNavigate();

  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user.id === Number(id)) {
      navigate('/chat');
    }
  }, [id, navigate, user.id]);

  // 유저 페이지 전환될 때 메시지에에 대한 읽음처리하도록
  useEffect(() => {
    if (user.id !== Number(id)) {
      messages.forEach((message, idx) => {
        if (
          message.fromUserId === Number(id) &&
          message.toUserId === user.id &&
          !message.isRead // 읽지 않은 메시지가 있으면 읽음표시 하도록
        )
          toggleIsRead(idx);
      });
    }
  }, [id, messages, toggleIsRead, user.id]);

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

export default ChatRoom;

// ############### 디자인 ###############

const ChatRoomContainer = styled.div`
  height: 100%;
  background-color: var(--Blue);
  display: flex;
  flex-direction: column;
`;
