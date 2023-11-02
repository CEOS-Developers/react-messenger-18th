import { styled } from "styled-components";
import dummyFriendNames from "dummyFriendNames.json";
import ChatListItem from "./ChatListItem";

const ChatContent = () => {
  return (
    <ChatListContainer>
      {dummyFriendNames.map((friend, index) => (
        <ChatListItem
          key={index}
          name={friend.name}
          content={friend.content}
          unread={friend.unread}
          date={friend.date}
        />
      ))}
    </ChatListContainer>
  );
};

export default ChatContent;

const ChatListContainer = styled.div`
  height: 608px;
  overflow: auto;
`;
