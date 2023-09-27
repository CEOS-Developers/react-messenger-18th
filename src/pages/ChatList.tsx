import React from "react";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Friends } from "../icons/friends.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import Profile from "../components/profile/Profile";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";
import styled from "styled-components";
import useChatListStateChange from "../customHooks/useChatListStateChange";
import { chatListBtnState, chatListState } from "../state/chatListState";

interface ChatListStateProps {
  isClicked: boolean;
}

export default function ChatList() {
  const { navigateTo } = useNavigateOnClick();
  const { changeState, subHeaderState } = useChatListStateChange();
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
        {chatListBtnState.map((btnState) => (
          <SubHeaderTextWrapper
            key={btnState.text}
            isClicked={subHeaderState === btnState.state ? true : false}
          >
            <span onClick={() => changeState(btnState.state)}>
              {btnState.text}
            </span>
          </SubHeaderTextWrapper>
        ))}
      </SubHeader>
    </>
  );
}

const SubHeader = styled.div`
  padding: 0 2rem;
  height: 5rem;
  display: flex;
`;

const SubHeaderTextWrapper = styled.div<ChatListStateProps>`
  span {
    color: ${(props) =>
      props.isClicked
        ? props.theme.colors.mainColor
        : props.theme.colors.gray4};
    ${(props) => props.theme.fontStyles.body1}
    cursor: pointer;
  }
  border-bottom: ${(props) =>
    props.isClicked ? `0.2rem solid ${props.theme.colors.mainColor}` : null};
  ${(props) => props.theme.fontStyles.body1};
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
`;
