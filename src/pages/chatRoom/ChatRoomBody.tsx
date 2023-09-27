import EachMessage from 'pages/chatRoom/EachMessage';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import { TMessage } from 'types';
import { checkIsNextDay } from 'utils';

interface ChatRoomBodyProps {
  // dummy에 타입 적용
  messages: TMessage[];
  bodyRef: React.RefObject<HTMLDivElement>;
}

const ChatRoomBody = ({ messages, bodyRef }: ChatRoomBodyProps) => {
  const { id }: { id?: string } = useParams();

  const setMessages = useMessageStore((state) => state.setMessages);

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  let before = '';

  // 더블클리 이벤트 헨들러
  const handleDoubleClickMessage = (messageId: number) => {
    const newMessages = [...messages];
    // 더블 클릭된 메시지의 index 찾기
    const clickedIdx = newMessages.findIndex(
      (message) => message.id === messageId
    );

    if (user.likedMessages.includes(messageId)) {
      // 현재 유저가 이미 좋아한 메시지라면 좋아요 취소
      newMessages[clickedIdx].likeCount -= 1;
      setMessages(newMessages);
      setUser({
        ...user,
        likedMessages: user.likedMessages.filter((id) => id !== messageId),
      });
    } else {
      // 이미 좋아요한 메시지가 아니라면 좋아요
      newMessages[clickedIdx].likeCount += 1;
      setMessages(newMessages);
      setUser({ ...user, likedMessages: [...user.likedMessages, messageId] });
    }
  };

  // 채팅방 스크롤 아래로
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current?.scrollHeight;
    }
  }, [bodyRef, messages]);

  return (
    <ChatRoomBodyContainer ref={bodyRef}>
      {messages.map((message) => {
        const isNextDay = checkIsNextDay(before, message.time);
        before = message.time;
        return (
          <EachMessage
            key={`${message.id}${message.text}`}
            message={message}
            isOwnMessage={Number(id) === message.toUserId}
            isNextDay={isNextDay}
            handleDoubleClickMessage={handleDoubleClickMessage.bind(
              null,
              message.id
            )}
          />
        );
      })}
    </ChatRoomBodyContainer>
  );
};

export default ChatRoomBody;

// ############### 디자인 ###############

const ChatRoomBodyContainer = styled.div`
  background-color: ${ChatRoomBackgroundColor};
  padding: 0 8px;
  flex-grow: 1;
  max-height: 100%;
  overflow-y: auto;
`;
