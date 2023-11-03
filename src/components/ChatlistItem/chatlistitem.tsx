// ChatListItem.tsx
import styled from "styled-components";

//images
import groupIcon from "../../assets/images/Group.svg";
import rightarrowIcon from "../../assets/images/rightarrowIcon.svg";
interface Message {
  id: number;
  sender: string;
  content: string;
  showIcon: boolean;
  timestamp: string; //메시지 보내는 시간 정보 추가
  unread?: boolean; // 읽지 않은 메시지인지 여부를 나타내는 속성 추가
}
interface User {
  id: number;
  name: string;
}

interface ChatListItemProps {
  key: number;
  user: User;
  lastMessage: Message | null;
  onClick: () => void;
}
function formatTimestamp(isoString?: string) {
  if (!isoString) return "No last message";

  const date = new Date(isoString);
  date.setHours(0, 0, 0, 0);

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 날짜 차이에 따른 문자열 반환
  //오늘은 시간 정보, 전날은 "어제", 그 전날은 '~일전'으로 반환해줌
  if (diffDays === 0) {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strHours = hours < 10 ? `0${hours}` : `${hours}`;
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${strHours}:${strMinutes} ${ampm}`;
  } else if (diffDays === 1) {
    return "어제";
  } else {
    return `${diffDays}일 전`;
  }
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  user,
  lastMessage,
  onClick,
}) => {
  return (
    <ChatlistItem onClick={onClick}>
      {lastMessage?.unread && <UnreadIndicator />}
      <GroupIcon src={groupIcon} />
      <ChatlistData>
        <ChatlistDataTitle>
          <Name>{user.name}</Name>
          <TimeContainer>
            <Time>{formatTimestamp(lastMessage?.timestamp)}</Time>
            <img src={rightarrowIcon} />
          </TimeContainer>
        </ChatlistDataTitle>
        <LastMessage>{lastMessage?.content || ""}</LastMessage>
      </ChatlistData>
    </ChatlistItem>
  );
};

const ChatlistItem = styled.div`
  width: 100%;
  height: 5.25rem;
  display: flex;
  padding: 0.81rem 1.56rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 5.1rem;
    right: 0;
    bottom: 0;
    border-bottom: 1px solid var(--gray-1);
  }
`;

const Time = styled.div`
  font-family: "SF Pro Text";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--gray-1);
`;
const ChatlistData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0.87rem;
`;
const ChatlistDataTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const TimeContainer = styled.div`
  display: flex;
`;
const UnreadIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 50%;
  background-color: var(--blue);
`;
const GroupIcon = styled.img`
  margin-left: 0.2rem;
`;
const Name = styled.span`
  font-family: "SF Pro Text";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const LastMessage = styled.div`
  /* width: 17.25rem; */
  height: 2.25rem;
  color: var(--gray-1);
  font-family: "SF Pro Text";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default ChatListItem;
