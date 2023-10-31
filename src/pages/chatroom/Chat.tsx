import React from "react";
import { styled } from "styled-components";

type ChatProps = {
  value: string;
  id: number;
  sender: string;
  date: string;
  showDate: boolean; // 메시지 날짜를 표시할지 여부를 결정하는 플래그
  currentUser: { id: number; name: string };
  showProfileImage: boolean;
};

const Chat: React.FC<ChatProps> = ({
  value,
  sender,
  date,
  showDate,
  currentUser,
  showProfileImage,
}) => {
  const isCurrentUser = currentUser.name === sender;

  return (
    <ChatContainer isCurrentUser={isCurrentUser}>
      {isCurrentUser && showDate && <DateLeft>{date}</DateLeft>}
      {!isCurrentUser && showProfileImage && (
        <ProfileIcon src={"/assets/profile.png"} alt="profile" />
      )}
      <Content
        isCurrentUser={isCurrentUser}
        showProfileImage={showProfileImage}
      >
        {value}
      </Content>
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
  ${(props) =>
    !props.isCurrentUser &&
    `
    margin-left: 0;
    margin-right: auto;
  `}
`;

const Content = styled.div<{
  isCurrentUser: boolean;
  showProfileImage: boolean;
}>`
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
  margin-left: ${(props) =>
    props.showProfileImage ? "0px" : !props.isCurrentUser ? "48px" : "0px"};
`;

const DateLeft = styled.div`
  text-align: left;
  color: rgba(130, 128, 153, 1);
  font-weight: 400;
  font-size: 10px;
  margin-top: 31%;
  padding-right: 4px;
  white-space: nowrap;
`;

const DateRight = styled.div`
  text-align: right;
  color: rgba(130, 128, 153, 1);
  font-weight: 400;
  font-size: 10px;
  margin-top: 22px;
  padding-left: 4px;
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 8px;
`;
