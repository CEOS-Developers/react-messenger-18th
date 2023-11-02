import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import dummyFriendNames from "dummyFriendNames.json";
import ChatListItem from "./ChatListItem";

const ChatFriendSearch = () => {
  const [userInput, setUserInput] = useState("");
  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <ChatFriendSearchContainer>
        <InputBox
          name="search"
          placeholder="검색"
          onChange={getValue}
          value={userInput}
        />
      </ChatFriendSearchContainer>
      <FriendChatContainer>
        {dummyFriendNames
          .filter(
            (friend) =>
              friend.name.includes(userInput) ||
              friend.content.includes(userInput)
          )
          .map((filteredFriend, index) => (
            <ChatListItem
              key={index}
              name={filteredFriend.name}
              content={filteredFriend.content}
              unread={filteredFriend.unread}
              date={filteredFriend.date}
            />
          ))}
      </FriendChatContainer>
    </div>
  );
};
export default ChatFriendSearch;

const ChatFriendSearchContainer = styled.div`
  padding: 8px 16px 6px 16px;
  align-items: center;
  flex-direction: column;
`;

const FriendChatContainer = styled.div`
  height: 523px;
  overflow: auto;
`;
const InputBox = styled.input`
  width: 319px;
  border: none;
  outline: none;
  border-radius: 16px;
  background: #f2f1f8;
  padding: 12px;
  align-items: center;
  flex-shrink: 0;
  color: #33333a;

  ::placeholder {
    color: #a4a2b7;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
  }
`;
