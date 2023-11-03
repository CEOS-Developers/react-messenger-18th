import { useState } from "react";
import TopInChat from "./TopInChat";
import user from "user.json";
import { styled } from "styled-components";
import InchatList from "./InchatList";

const ChatRoomSearch = () => {
  const [currentUser, setCurrentUser] = useState(user.users[0]);

  const changeUser = (targetId: number) => {
    if (targetId === 0) {
      setCurrentUser(user.users[1]);
    } else {
      setCurrentUser(user.users[0]);
    }
  };
  return (
    <div>
      <TopWrapper>
        <TopInChat currentUser={currentUser} changeUser={changeUser} />
      </TopWrapper>
      <img src="/assets/search_updown.svg" alt="home img" />
    </div>
  );
};

export default ChatRoomSearch;

const TopWrapper = styled.div`
  top: 38px;
`;
