import React from "react";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Friends } from "../icons/friends.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import Profile from "../components/profile/Profile";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";
import styled from "styled-components";
import useChatListStateChange from "../customHooks/chatlist/useChatListStateChange";
import { chatListBtnState, chatListState } from "../state/chatListState";
import Divider from "../components/common/Divider";
import { dividerState } from "../state/dividerState";
import Star from "../icons/star/Star";
import theme from "../styles/theme";
import ChatListBox from "../components/chatList/ChatListBox";
import { mainChat, subChat } from "../data/chatListData";

interface TextWrapperProps {
  $isClicked: boolean;
  $addClass?: string | null;
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
            $img="/img/profile.jpg"
            $size="2.4rem"
            onClick={() => navigateTo("/my-profile")}
            $addClass="margin-left:1.2rem;"
          />
        }
      />
      <SubHeader>
        {chatListBtnState.map((btnState) => (
          <SubHeaderTextWrapper
            key={btnState.text}
            $isClicked={subHeaderState === btnState.state ? true : false}
            $addClass={
              btnState.state === chatListState.GROUP
                ? "margin-left:2rem;"
                : null
            }
          >
            <span onClick={() => changeState(btnState.state)}>
              {btnState.text}
            </span>
          </SubHeaderTextWrapper>
        ))}
        <Divider
          state={dividerState.LONGTHICK}
          $addClass="position:absolute; bottom:0;"
        />
      </SubHeader>
      {subHeaderState === chatListState.GROUP && (
        <ChatLists>
          <MainChats>
            <MainChatsHeader>
              <Star color={theme.colors.gray3} size="2rem" />
              <span>주요 채팅</span>
            </MainChatsHeader>
            {mainChat.map((chat) => (
              <ChatListBox
                key={chat.id}
                img={chat.img}
                mainText={chat.mainText}
                subText={chat.subText}
                icon={
                  <Star
                    color={theme.colors.mainColor}
                    size="2.4rem"
                    addStyle={{ marginBottom: "0.2rem" }}
                  />
                }
                onClick={() =>
                  navigateTo(`/chatroom/main/${chat.id}`, {
                    state: {
                      chatRoomTitle: chat.mainText,
                      img: chat.img,
                      name: chat.mainText,
                      chatRoomState: "main",
                      chatRoomId: chat.id,
                    },
                  })
                }
              />
            ))}
            <Divider state={dividerState.SHORT} $addClass="margin:0.8rem 0;" />
            {subChat.map((chat) => (
              <ChatListBox
                key={chat.id}
                img={chat.img}
                mainText={chat.mainText}
                subText={chat.subText}
                onClick={() =>
                  navigateTo(`/chatroom/sub/${chat.id}`, {
                    state: {
                      chatRoomTitle: chat.mainText,
                      img: chat.img,
                      name: chat.mainText,
                      chatRoomState: "sub",
                      chatRoomId: chat.id,
                    },
                  })
                }
              />
            ))}
          </MainChats>
        </ChatLists>
      )}
    </>
  );
}

const SubHeader = styled.div`
  position: relative;
  height: 5rem;
  display: flex;
`;

const SubHeaderTextWrapper = styled.div<TextWrapperProps>`
  span {
    color: ${(props) =>
      props.$isClicked
        ? props.theme.colors.mainColor
        : props.theme.colors.gray4};
    ${(props) => props.theme.fontStyles.body1}
    cursor: pointer;
  }
  border-bottom: ${(props) =>
    props.$isClicked ? `0.2rem solid ${props.theme.colors.mainColor}` : null};
  ${(props) => props.theme.fontStyles.body1};
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  ${[(props) => props.$addClass]}
`;

const ChatLists = styled.div`
  padding: 0 2rem;
`;

const MainChats = styled.div``;

const MainChatsHeader = styled.div`
  height: 5.2rem;
  display: flex;
  align-items: center;
  span {
    color: ${(props) => props.theme.colors.gray2};
    ${(props) => props.theme.fontStyles.body2};
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 0.4rem;
  }
`;
