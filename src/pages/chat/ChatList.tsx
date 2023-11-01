import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PageHeader, SearchBar, Divider } from "@common/components";
import { DIVIDER_TYPE, CHATROOM_TYPE } from "@common/constants";
import { searchByName } from "@common/utils/search";
import { ReactComponent as Friends } from "@common/icons/friends.svg";
import { ReactComponent as Search } from "@common/icons/search.svg";
import Star from "@common/icons/star/Star";
import theme from "@styles/theme";
import { Profile } from "@features/user";
import {
  ChatListBox,
  groupChatRoomState,
  defaultGroupChatList,
} from "@features/chat";

const SHOW_LIST_STATE = ["그룹", "개인"];

export function ChatList() {
  const navigate = useNavigate();
  const [showListState, setShowListState] = useState(SHOW_LIST_STATE[0]);
  const [searchText, setSearchText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchedGroupChat = searchByName<groupChatRoomState>(
    defaultGroupChatList,
    searchText
  );
  const filterSearchedGroupChat = (type: string) => {
    return searchedGroupChat.filter((groupChat) => groupChat.type === type);
  };
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
        <SearchBar search={[searchText, setSearchText]} />
      ) : null}
      <SubHeader
        $onlySubChat={
          filterSearchedGroupChat(CHATROOM_TYPE.MAIN).length === 0 &&
          filterSearchedGroupChat(CHATROOM_TYPE.SUB).length > 0
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
        <GroupChatLists>
          {filterSearchedGroupChat(CHATROOM_TYPE.MAIN).length > 0 ? (
            <MainChatsHeader>
              <Star color={theme.colors.gray3} size="2rem" />
              <span>주요 채팅</span>
            </MainChatsHeader>
          ) : null}
          {filterSearchedGroupChat(CHATROOM_TYPE.MAIN).map((chat) => (
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
          {filterSearchedGroupChat(CHATROOM_TYPE.MAIN).length > 0 &&
          filterSearchedGroupChat(CHATROOM_TYPE.SUB).length > 0 ? (
            <Divider
              state={DIVIDER_TYPE.SHORT}
              $addClass={`background-color:${theme.colors.gray5}; margin:0.8rem 0;`}
            />
          ) : null}
          {filterSearchedGroupChat(CHATROOM_TYPE.SUB).map((chat) => (
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
        </GroupChatLists>
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
  border-bottom: ${(props) =>
    props.$isClicked ? `0.2rem solid ${props.theme.colors.mainColor}` : null};
  ${(props) => props.theme.fontStyles.body1};
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  span {
    color: ${(props) =>
      props.$isClicked
        ? props.theme.colors.mainColor
        : props.theme.colors.gray4};
    ${(props) => props.theme.fontStyles.body1}
    cursor: pointer;
  }
  ${[(props) => props.$addClass]};
`;

const GroupChatLists = styled.div`
  padding: 0 2rem;
`;

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
