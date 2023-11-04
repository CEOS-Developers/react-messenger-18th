import { styled } from "styled-components";
import FriendItem from "./FriendItem";
import dummyFriendNames from "dummyFriendNames.json";

const FriendContent = () => {
  return (
    <FriendContainer>
      {dummyFriendNames.users.map((friend, index) => {
        if (index > 0) {
          // 첫 번째 데이터를 제외
          return <FriendItem key={index} name={friend.name} />;
        }
        return null; // 첫 번째 데이터는 제외
      })}
    </FriendContainer>
  );
};

export default FriendContent;

const FriendContainer = styled.div`
  height: 610px;
  overflow: auto;
`;
