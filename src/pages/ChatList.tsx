import React from "react";
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
  const profileClicked = () => {
    navigate("/my-profile");
  };
  return (
    <PageHeader
      leftIcon={<Friends onClick={friendsIconClicked} />}
      rightIcon1={<Search />}
      rightIcon2={
        <Profile img="img/profile.jpg" size="2.4rem" onClick={profileClicked} />
      }
    />
  );
}
