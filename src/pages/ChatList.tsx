import React, { useState } from "react";
import PageHeader from "@common/components/layout/Header/PageHeader";
import { ReactComponent as Friends } from "@common/icons/friends.svg";
import { ReactComponent as Search } from "@common/icons/search.svg";
import Profile from "@features/user/components/Profile/Profile";
import styled from "styled-components";
import Divider from "@common/components/ui/divider/Divider";
import Star from "@common/icons/star/Star";
import theme from "@styles/theme";
import ChatListBox from "@features/chat/components/ChatListBox/ChatListBox";
import {
  defaultMainChatList,
  defaultSubChatList,
} from "@features/chat/constants/default-chatlist";
import SearchBar from "@common/components/ui/searchbar/SearchBar";
import { SearchBarWrapper } from "./FriendsList";
import { searchByName } from "@common/utils/search/searchByName";
import { useNavigate } from "react-router-dom";
import { chatRoomState } from "@features/chat/state/chatroom-state";
import { DIVIDER_TYPE } from "@common/constants/divider-type";
import { CHATROOM_TYPE } from "@common/constants/chatroom-type";

const SHOW_LIST_STATE = ["그룹", "개인"];

export default function ChatList() {
  const navigate = useNavigate();
  const [showListState, setShowListState] = useState(SHOW_LIST_STATE[0]);
  const [searchText, setSearchText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchedMainChat = searchByName<chatRoomState>(
    defaultMainChatList,
    searchText
  );
  const searchedSubChat = searchByName<chatRoomState>(
    defaultSubChatList,
    searchText
  );
  return (
    <>
      <PageHeader
        leftIcon={<Friends onClick={() => navigate("/friends-list")} />}
        rightIcon1={
          <Search onClick={() => setShowSearchBar((prev) => !prev)} />
        }
        rightIcon2={
          <Profile
            $img="/img/profile.jpg"
            $size="2.4rem"
            onClick={() => navigate("/my-profile")}
            $addClass="margin-left:1.2rem;"
          />
        }
      />
      {showSearchBar ? (
        <SearchBarWrapper>
          <SearchBar search={[searchText, setSearchText]} />
        </SearchBarWrapper>
      ) : null}
      <SubHeader
        $onlySubChat={
          searchedMainChat.length === 0 && searchedSubChat.length > 0
        }
      >
        {SHOW_LIST_STATE.map((showState, index) => (
          <SubHeaderTextWrapper
            key={showState}
            $isClicked={showListState === showState ? true : false}
            $addClass={
              showState === SHOW_LIST_STATE[0] ? "margin-left:2rem;" : null
            }
          >
            <span onClick={() => setShowListState(SHOW_LIST_STATE[index])}>
              {showState}
            </span>
          </SubHeaderTextWrapper>
        ))}
        <Divider
          state={DIVIDER_TYPE.LONGTHICK}
          $addClass="position:absolute; bottom:0;"
        />
      </SubHeader>
      {showListState === SHOW_LIST_STATE[0] && (
        <ChatLists>
          <MainChats>
            {searchedMainChat.length > 0 ? (
              <MainChatsHeader>
                <Star color={theme.colors.gray3} size="2rem" />
                <span>주요 채팅</span>
              </MainChatsHeader>
            ) : null}
            {searchedMainChat.map((chat) => (
              <ChatListBox
                key={chat.id}
                img={chat.img}
                name={chat.name}
                message={chat.message}
                icon={
                  <Star
                    color={theme.colors.mainColor}
                    size="2.4rem"
                    addStyle={{ marginBottom: "0.2rem" }}
                  />
                }
                onClick={() =>
                  navigate(`/chatroom/${CHATROOM_TYPE.MAIN}/${chat.id}`, {
                    state: {
                      chatRoomTitle: chat.name,
                      img: "/img/default.jpg",
                      people: chat.people,
                      name: "전윤수",
                      chatRoomState: CHATROOM_TYPE.MAIN,
                      chatRoomId: chat.id,
                    },
                  })
                }
              />
            ))}
            {searchedMainChat.length > 0 && searchedSubChat.length > 0 ? (
              <Divider
                state={DIVIDER_TYPE.SHORT}
                $addClass={`background-color:${theme.colors.gray5}; margin:0.8rem 0;`}
              />
            ) : null}
            {searchedSubChat.map((chat) => (
              <ChatListBox
                key={chat.id}
                img={chat.img}
                name={chat.name}
                message={chat.message}
                onClick={() =>
                  navigate(`/chatroom/${CHATROOM_TYPE.SUB}/${chat.id}`, {
                    state: {
                      chatRoomTitle: chat.name,
                      img: "/img/default.jpg",
                      people: chat.people,
                      name: "전윤수",
                      chatRoomState: CHATROOM_TYPE.SUB,
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

const SubHeader = styled.div<{ $onlySubChat: boolean }>`
  position: relative;
  height: 5rem;
  display: flex;
  margin-bottom: ${(props) => (props.$onlySubChat ? "0.4rem" : null)};
`;

const SubHeaderTextWrapper = styled.div<{
  $isClicked: boolean;
  $addClass?: string | null;
}>`
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
  display: flex;
  align-items: center;
  margin: 2rem 0rem 0.8rem 0;
  span {
    color: ${(props) => props.theme.colors.gray2};
    ${(props) => props.theme.fontStyles.body2};
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 0.4rem;
  }
`;
