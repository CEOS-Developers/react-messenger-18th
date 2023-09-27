import EachMessage from 'pages/chatRoom/EachMessage';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import { TMessage } from 'types';
import { checkIsNextDay } from 'utils';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';

interface ChatRoomBodyProps {
  messages: TMessage[];
  bodyRef: React.RefObject<HTMLDivElement>;
}

const ChatRoomBody = ({ messages, bodyRef }: ChatRoomBodyProps) => {
  const { id }: { id?: string } = useParams();

  let before = '';

  const setMessages = useMessageStore((state) => state.setMessages);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const handleDoubleClickMessage = (messageId: number) => {
    const newMessages = [...messages];
    let clickedIdx = -1;
    newMessages.forEach((message, idx) => {
      if (message.id === messageId) {
        clickedIdx = idx;
        return;
      }
    });

    if (user.likedMessages.includes(messageId)) {
      newMessages[clickedIdx].likeCount -= 1;
      setMessages(newMessages);
      setUser({
        ...user,
        likedMessages: user.likedMessages.filter((id) => id !== messageId),
      });
    } else {
      newMessages[clickedIdx].likeCount += 1;
      setMessages(newMessages);
      setUser({ ...user, likedMessages: [...user.likedMessages, messageId] });
    }
  };

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

const ChatRoomBodyContainer = styled.div`
  background-color: ${ChatRoomBackgroundColor};
  padding: 0 8px;
  flex-grow: 1;
  max-height: 100%;
  overflow-y: auto;
`;

export default ChatRoomBody;
