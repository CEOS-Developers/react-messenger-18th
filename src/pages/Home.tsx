import React from "react";
import styled from "styled-components";
import PageHeader from "../components/header/PageHeader";
import { ReactComponent as Friends } from "../icons/friends.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import Profile from "../components/profile/Profile";

export default function Home() {
  return (
    <HomeWrapper>
      <PageHeader
        leftIcon={<Friends />}
        rightIcon1={<Search />}
        rightIcon2={<Profile img="img/profile.jpg" size="2.4rem" />}
      />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  ${(props) => props.theme.fontStyles.headLine1};
  height: 73.7rem;
  padding: 0 2rem;
`;
