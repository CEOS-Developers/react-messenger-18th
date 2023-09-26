import EachMessage from 'pages/chatRoom/EachMessage';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import { TMessage } from 'types';
import { checkIsNextDay } from 'utils';

interface ChatRoomBodyProps {
  messages: TMessage[];
}
const ChatRoomBody = ({ messages }: ChatRoomBodyProps) => {
  const { id } = useParams();
  const roomBodyRef = useRef<HTMLDivElement>(null);

  let before = '';
  useEffect(() => {
    if (roomBodyRef.current) {
      roomBodyRef.current.scrollTop = roomBodyRef.current?.scrollHeight;
    }
  }, []);

  return (
    <ChatRoomBodyContainer ref={roomBodyRef}>
      {messages.map((message) => {
        const isNextDay = checkIsNextDay(before, message.time);
        before = message.time;
        return (
          <EachMessage
            key={`${message.id}${message.text}`}
            message={message}
            isOwnMessage={Number(id) === message.fromUserId}
            isNextDay={isNextDay}
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
