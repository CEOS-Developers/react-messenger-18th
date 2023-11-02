import { styled } from "styled-components";
import FriendItem from "./FriendItem";

import dummyFriendNames from "dummyFriendNames.json";

const FriendContent = () => {
  return (
    <FriendContainer>
      {dummyFriendNames.map((friend, index) => (
        <FriendItem key={index} name={friend.name} />
      ))}
    </FriendContainer>
  );
};

export default FriendContent;

const FriendContainer = styled.div`
  height: 578px;
  overflow: auto;
`;
