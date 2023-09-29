import React from "react";
import styled from "styled-components";
import userIcon from "../../assets/images/User.svg";

interface MessageProps {
  sender: string;
  content: string;
  nowUser: string;
  showIcon: boolean;
}

const Message: React.FC<MessageProps> = ({
  sender,
  content,
  nowUser,
  showIcon,
}) => {
  return (
    <MessageContainer sender={sender} nowUser={nowUser}>
      {showIcon && <UserIconShow src={userIcon} />}
      <MessageItem
        sender={sender}
        content={content}
        nowUser={nowUser}
        showIcon={showIcon}
      >
        <span>{content}</span>
      </MessageItem>
    </MessageContainer>
  );
};

const MessageContainer = styled.div<{ sender: string; nowUser: string }>`
  display: flex;
  align-items: center;
  margin: 0.44rem 0;
  gap: 0.44rem;
  max-width: 100%;
  flex-direction: ${(props) =>
    props.sender === props.nowUser ? "row-reverse" : "row"};
  //왼, 오른쪽 기준 나누기
`;

const MessageItem = styled.div<{
  sender: string;
  content: string;
  nowUser: string;
  showIcon: boolean;
}>`
  /* width: 100%; */
  padding: 0.7rem;
  border-radius: 1.25rem;
  margin-right: 0.69rem;
  background-color: ${({ sender, nowUser }) =>
    sender === nowUser ? "var(--blue)" : "rgba(118, 118, 128, 0.12)"};
  color: ${({ sender, nowUser }) =>
    sender === nowUser ? "#FFFFFF" : "#000000"};
  text-align: ${({ sender, nowUser }) =>
    sender === nowUser ? "right" : "left"};
  margin-left: ${(msg) =>
    !msg.showIcon && msg.sender !== msg.nowUser ? "3.75rem" : "0.69rem"};
  // showIcon가 false인 경우 margin-left를 한방에 설정
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: normal;
  box-sizing: border-box;
  word-break: break-all;
`;

const UserIconShow = styled.img`
  width: 2.06244rem;
  height: 2.06238rem;
  margin-left: 1rem;
`;

export default Message;
