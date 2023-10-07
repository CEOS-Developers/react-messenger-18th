import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Arrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as AddFriend } from "../icons/addfriend.svg";
import styled from "styled-components";
import SearchBar from "../components/friendList/SearchBar";
import Divider from "../components/common/Divider";
import { dividerState } from "../state/dividerState";
import MajorHeader from "../components/friendList/MajorHeader";

export default function FriendsList() {
  const navigate = useNavigate();
  const arrowIconClicked = () => {
    navigate(-1);
  };
  return (
    <>
      <PageHeader
        leftIcon={<Arrow onClick={arrowIconClicked} />}
        title="친구"
        rightIcon1={<AddFriend />}
      />
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <Divider state={dividerState.LONGTHICK} />
    </>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
`;
