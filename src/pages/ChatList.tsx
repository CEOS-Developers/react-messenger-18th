import React from "react";
import styled from "styled-components";
import PageHeader from "../components/header/PageHeader";
import { ReactComponent as Friends } from "../icons/friends.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import Profile from "../components/profile/Profile";
import { useNavigate } from "react-router-dom";

export default function ChatList() {
  const navigate = useNavigate();
  const friendsIconClicked = () => {
    navigate("/friends-list");
  };
  return (
    <ChatListWrapper>
      <PageHeader
        leftIcon={<Friends onClick={friendsIconClicked} />}
        rightIcon1={<Search />}
        rightIcon2={<Profile img="img/profile.jpg" size="2.4rem" />}
      />
    </ChatListWrapper>
  );
}

const ChatListWrapper = styled.div`
  ${(props) => props.theme.fontStyles.headLine1};
  height: 73.7rem;
  padding: 0 2rem;
`;
