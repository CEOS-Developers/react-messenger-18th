import { styled } from "styled-components";
import dummyFriendNames from "dummyFriendNames.json";
import ChatListItem from "./ChatListItem";

const ChatContent = () => {
  return (
    <ChatListContainer>
      {dummyFriendNames.users.map((friend, index) => {
        if (index > 0) {
          // 두 번째 데이터부터 map 함수 적용
          return (
            <ChatListItem
              id={friend.id}
              name={friend.name}
              content={friend.content}
              unread={friend.unread}
              date={friend.date}
            />
          );
        }
        return null; // 첫 번째 데이터는 제외
      })}
    </ChatListContainer>
  );
};

export default ChatContent;

const ChatListContainer = styled.div`
  height: 610px;
  overflow: auto;
`;
