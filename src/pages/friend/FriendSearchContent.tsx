import { styled } from "styled-components";
import FriendItem from "./FriendItem";
import dummyFriendNames from "dummyFriendNames.json";
import { ChangeEvent, useState } from "react";

const FriendSearchContent = () => {
  const [userInput, setUserInput] = useState("");
  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <Container>
      <FriendSearchContainer>
        <InputBox
          name="search"
          placeholder="검색"
          onChange={getValue}
          value={userInput}
        />
      </FriendSearchContainer>
      <FriendContainer>
        {dummyFriendNames
          .filter((friend) => friend.name.includes(userInput))
          .map((filteredFriend, index) => (
            <FriendItem key={index} name={filteredFriend.name} />
          ))}
      </FriendContainer>
    </Container>
  );
};

export default FriendSearchContent;
const FriendSearchContainer = styled.div`
  padding: 8px 16px 6px 16px;
  align-items: center;
  flex-direction: column;
`;

const FriendContainer = styled.div`
  height: 550px;
  overflow: auto;
`;

const Container = styled.div`
  height: 610px;
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
