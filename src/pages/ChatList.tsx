import React from "react";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Friends } from "../icons/friends.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import Profile from "../components/profile/Profile";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";

export default function ChatList() {
  const { onClick: navigateFriendsList } = useNavigateOnClick({
    route: "/friends-list",
  });
  const { onClick: navigateMyProfile } = useNavigateOnClick({
    route: "/my-profile",
  });
  return (
    <PageHeader
      leftIcon={<Friends onClick={navigateFriendsList} />}
      rightIcon1={<Search />}
      rightIcon2={
        <Profile
          img="img/profile.jpg"
          size="2.4rem"
          onClick={navigateMyProfile}
        />
      }
    />
  );
}
