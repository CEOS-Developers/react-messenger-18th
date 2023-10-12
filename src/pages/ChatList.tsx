import React, { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Friends } from "../icons/friends.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import Profile from "../components/profile/Profile";
import styled from "styled-components";
import useChatListStateChange from "../customHooks/chatlist/useChatListStateChange";
import { chatListBtnState, chatListState } from "../state/chatListState";
import Divider from "../components/common/Divider";
import { dividerState } from "../state/dividerState";
import Star from "../icons/star/Star";
import theme from "../styles/theme";
import ChatListBox, {
  ChatListBoxProps,
} from "../components/chatList/ChatListBox";
import { mainChat, subChat } from "../data/chatListData";
import SearchBar from "../components/friendList/SearchBar";
import { SearchBarWrapper } from "./FriendsList";
import { searchByName } from "../customHooks/useSearchByName";
import { useNavigate } from "react-router-dom";

interface TextWrapperProps {
  $isClicked: boolean;
  $addClass?: string | null;
}

export default function ChatList() {
  const navigate = useNavigate();
  const { changeState, subHeaderState } = useChatListStateChange();
  const [searchText, setSearchText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchedMainChat = searchByName<ChatListBoxProps>(mainChat, searchText);
  const searchedSubChat = searchByName<ChatListBoxProps>(subChat, searchText);
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
                  navigate(`/chatroom/main/${chat.id}`, {
                    state: {
                      chatRoomTitle: chat.name,
                      img: chat.img,
                      name: chat.name,
                      chatRoomState: "main",
                      chatRoomId: chat.id,
                    },
                  })
                }
              />
            ))}
            {searchedMainChat.length > 0 && searchedSubChat.length > 0 ? (
              <Divider
                state={dividerState.SHORT}
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
                  navigate(`/chatroom/sub/${chat.id}`, {
                    state: {
                      chatRoomTitle: chat.name,
                      img: chat.img,
                      name: chat.name,
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

const SubHeader = styled.div<{ $onlySubChat: boolean }>`
  position: relative;
  height: 5rem;
  display: flex;
  margin-bottom: ${(props) => (props.$onlySubChat ? "0.4rem" : null)};
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
