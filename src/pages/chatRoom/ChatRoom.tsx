import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';
import ChatRoomBody from 'pages/chatRoom/ChatRoomBody';
import ChatRoomFooter from 'pages/chatRoom/ChatRoomFooter';
import ChatRoomHeader from 'pages/chatRoom/ChatRoomHeader';
import styled from 'styled-components';
import userData from 'data/userData.json';
import { TUser, TMessage } from 'types';
import { ChatRoomBackgroundColor } from 'styles/global.style';

const typedUserData: TUser[] = userData.data;

const ChatRoom = () => {
  const { id }: { id?: string } = useParams(); // 채팅의 대상
  const user = useUserStore((state) => state.user); // 채팅앱의 주체
  const setUser = useUserStore((state) => state.setUser);

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

  // week3에만 해당되는 기능, 접속된 채팅방에 따라 현재의 유저 정보를 변경시켜줌
  // useEffect(() => {
  //   const key = `user_${(Number(id) % 2) + 1}`; // 지금은 유저가 두 명으로 한정되어 있으니깐
  //   const storedUser = localStorage.getItem(key);
  //   // localStorage에 데이터가 있으면 해당 데이터 사용, 아니면 dummy 사용
  //   setUser(storedUser ? JSON.parse(storedUser) : typedUserData[key]);
  // }, [id, setUser]);

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

  useEffect(() => {
    // 모바일로 접속시 페이지 최상단 부분 색상 적용
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', ChatRoomBackgroundColor);
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

export default ChatRoom;

// ############### 디자인 ###############

const ChatRoomContainer = styled.div`
  height: 100%;
  background-color: var(--Blue);
  display: flex;
  flex-direction: column;
`;
