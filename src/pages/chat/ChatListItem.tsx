import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface ChatListItemProps {
  name: string;
  content: string;
  unread: number;
  date: string;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  name,
  content,
  unread,
  date,
}) => {
  return (
    <StyledLink to="/chatroom">
      <ChatFriendContainer>
        <FriendImg src={"/assets/profile.svg"} alt="profile" />
        <ChatFriendWrapper>
          <div>
            <FriendName>{name}</FriendName>
            <FriendChat>{content}</FriendChat>
          </div>
          <ChatInfo>
            {unread > 0 && <UnreadContent>{unread}</UnreadContent>}{" "}
            {/* unread 값이 0보다 큰 경우에만 UnreadContent를 렌더링 */}
            <DateContent>{date}</DateContent>
          </ChatInfo>
        </ChatFriendWrapper>
      </ChatFriendContainer>
    </StyledLink>
  );
};

export default ChatListItem;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ChatFriendContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  align-items: center;
`;

const ChatFriendWrapper = styled.div`
  display: flex;
  width: 279px;
  justify-content: space-between;
  align-items: flex-end;
`;
const FriendImg = styled.img`
  width: 52px;
  height: 52px;
`;

const FriendName = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  color: #33333a;
  padding-bottom: 4px;
`;
const FriendChat = styled.div`
  color: #828099;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;

const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 4px;
`;

const UnreadContent = styled.div`
  color: #ffffff;
  background-color: #1263dc;
  border-radius: 50%; /*원그리기*/
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 27px;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  display: inline-block;
`;
const DateContent = styled.div`
  color: #828099;
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;
