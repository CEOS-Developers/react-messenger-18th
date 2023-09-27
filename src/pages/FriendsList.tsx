import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/header/PageHeader";
import { ReactComponent as Arrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as AddFriend } from "../icons/addfriend.svg";

export default function FriendsList() {
  const navigate = useNavigate();
  const arrowIconClicked = () => {
    navigate(-1);
  };
  return (
    <PageHeader
      leftIcon={<Arrow onClick={arrowIconClicked} />}
      title="친구"
      rightIcon1={<AddFriend />}
    />
  );
}
