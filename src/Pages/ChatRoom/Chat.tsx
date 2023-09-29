import React from "react";
import { styled } from "styled-components";

type ChatProps = {
  value: string;
  id: number;
  sender: string;
  date: string;
  showDate: boolean;
  currentUser: { id: number; name: string };
};

const Chat: React.FC<ChatProps> = ({
  value,
  sender,
  date,
  showDate,
  currentUser,
}) => {
  const isCurrentUser = currentUser.name === sender;

  return (
    <ChatContainer isCurrentUser={isCurrentUser}>
      {isCurrentUser && showDate && <DateLeft>{date}</DateLeft>}
      <Content isCurrentUser={isCurrentUser}>{value}</Content>
      {!isCurrentUser && showDate && <DateRight>{date}</DateRight>}
    </ChatContainer>
  );
};
export default Chat;

const ChatContainer = styled.div<{ isCurrentUser: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isCurrentUser ? "flex-end" : "flex-start"};
  max-width: 216px;
  gap: 4px;

  ${(props) =>
    !props.isCurrentUser &&
    `
    margin-left: 0;
    margin-right: auto;
  `}
`;

const Content = styled.div<{ isCurrentUser: boolean }>`
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: ${(props) =>
    props.isCurrentUser ? "rgba(18, 99, 220, 1)" : "rgba(242, 241, 248, 1)"};
  color: ${(props) =>
    props.isCurrentUser ? "rgba(242, 241, 248, 1)" : "rgba(51, 51, 58, 1)"};
  font-weight: 400;
  padding: 8px 12px;
  margin-top: 4px;
`;

const DateLeft = styled.div`
  text-align: left;
  color: rgba(130, 128, 153, 1);
  font-weight: 400;
  font-size: 10px;
  margin-top: 22px;
`;

const DateRight = styled.div`
  text-align: right;
  color: rgba(130, 128, 153, 1);
  font-weight: 400;
  font-size: 10px;
  margin-top: 22px;
`;
