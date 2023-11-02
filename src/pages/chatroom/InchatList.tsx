import { styled } from "styled-components";
import Chat from "./Chat";
import React, { useEffect, useRef } from "react";
import Calendar from "./Calendar";

type InchatListProps = {
  currentUser: { id: number; name: string };
  chat: Array<{
    value: string;
    id: number;
    sender: string;
    date: string;
    calendar: string;
  }>;
};

const determineShowProfileImage = (
  chat: Array<{ value: string; sender: string; date: string }>,
  index: number
) => {
  let displayProfile = false;
  if (index !== 0) {
    const prevSender = chat[index - 1].sender;
    if (prevSender !== chat[index].sender) displayProfile = true;
  } else displayProfile = true;
  return displayProfile;
};

const determineshowDate = (
  chat: Array<{ sender: string; date: string }>,
  index: number
) => {
  let displayTime = true;
  if (index !== chat.length - 1) {
    const nextSender = chat[index + 1].sender;
    if (nextSender === chat[index].sender) {
      const nextTimeValue = chat[index + 1].date;
      if (nextTimeValue === chat[index].date) displayTime = false;
    }
  }
  return displayTime;
};

const determineCalendar = (
  chat: Array<{ sender: string; calendar: string }>,
  index: number
) => {
  let displayDate = false;
  if (index !== chat.length - 1) {
    const nextDate = chat[index + 1].calendar;
    if (nextDate !== chat[index].calendar) {
      displayDate = true;
    }
  }

  return displayDate;
};

const InchatList: React.FC<InchatListProps> = ({ currentUser, chat }) => {
  const chatListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <InChatListContainer>
      <InChatListWrapper ref={chatListRef} id="chat-container">
        {chat.map((message, index) => (
          <React.Fragment key={message.id}>
            {index === 0 || determineCalendar(chat, index) ? (
              <Wrapper>
                <Calendar calendar={message.calendar} />
              </Wrapper>
            ) : null}
            <Chat
              value={message.value}
              id={message.id}
              sender={message.sender}
              date={message.date}
              key={message.id}
              showDate={determineshowDate(chat, index)}
              currentUser={currentUser}
              showProfileImage={determineShowProfileImage(chat, index)}
            />
          </React.Fragment>
        ))}
      </InChatListWrapper>
    </InChatListContainer>
  );
};

export default InchatList;

const InChatListContainer = styled.div`
  padding: 0px 16px;
`;

const InChatListWrapper = styled.div`
  height: 610px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 12px 0px;
`;
