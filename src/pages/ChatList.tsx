import React from "react";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Friends } from "../icons/friends.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import Profile from "../components/profile/Profile";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";
import styled from "styled-components";

export default function ChatList() {
  const { navigateTo } = useNavigateOnClick();
  return (
    <>
      <PageHeader
        leftIcon={<Friends onClick={() => navigateTo("/friends-list")} />}
        rightIcon1={<Search />}
        rightIcon2={
          <Profile
            img="img/profile.jpg"
            size="2.4rem"
            onClick={() => navigateTo("my-profile")}
          />
        }
      />
      <SubHeader>
        <SubHeaderTextWrapper>
          <span>그룹</span>
        </SubHeaderTextWrapper>
        <SubHeaderTextWrapper>
          <span>개인</span>
        </SubHeaderTextWrapper>
      </SubHeader>
    </>
  );
}

const SubHeader = styled.div`
  padding: 0 2rem;
  height: 5rem;
  background-color: wheat;
  display: flex;
`;

const SubHeaderTextWrapper = styled.div`
  span {
    color: ${(props) => props.theme.colors.mainColor};
    ${(props) => props.theme.fontStyles.body1}
  }
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
`;
