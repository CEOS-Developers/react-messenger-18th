import React from "react";
import styled from "styled-components";
import PageHeader from "../components/header/PageHeader";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import { ReactComponent as AddFriend } from "../icons/addfriend.svg";

export default function FriendsList() {
  return (
    <HomeWrapper>
      <PageHeader
        leftIcon={<Arrow />}
        title="친구"
        rightIcon1={<AddFriend />}
      />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  ${(props) => props.theme.fontStyles.headLine1};
  height: 73.7rem;
  padding: 0 2rem;
`;
