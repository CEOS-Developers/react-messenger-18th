import { styled } from "styled-components";
import Chat from "./Chat";
import React, { useEffect, useRef } from "react";

type InchatListProps = {
  chat: Array<{ value: string; id: number; sender: string; date: string }>;
};

const InchatList: React.FC<InchatListProps> = ({ chat }) => {
  const chatListRef = useRef<HTMLDivElement>(null);

  // chat 배열이 업데이트될 때 스크롤을 맨 아래로 이동
  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <Wrapper>
      <Container ref={chatListRef} id="chat-container">
        {chat.map((message, index) => (
          <Chat
            value={message.value}
            id={message.id}
            sender={message.sender}
            date={message.date}
            key={message.id}
            showDate={
              index === chat.length - 1 || message.date !== chat[index + 1].date
            }
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default InchatList;
const Wrapper = styled.div`
  height: 605px;
`;

const Container = styled.div`
  position: fixed;
  width: 375px;
  height: 605px;
  overflow: auto;
  display: flex;
  /* justify-content: flex-end; */
  align-items: flex-end;
  flex-direction: column;
  bottom: 90px;
  > * {
    &:first-child {
      margin-top: auto !important;
    }
  }
`;
