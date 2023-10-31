import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { PageHeader, Divider } from "@common/components";
import { DIVIDER_TYPE } from "@common/constants";
import {
  getChatRoomData,
  setChatRecentTime,
  setChatRoomData,
  printChatTime,
} from "@common/utils";
import { ReactComponent as LeftArrow } from "@common/icons/arrows/leftarrow.svg";
import { ReactComponent as Search } from "@common/icons/search.svg";
import { ReactComponent as Box } from "@common/icons/box.svg";
import { ReactComponent as Plus } from "@common/icons/plus.svg";
import { ReactComponent as Send } from "@common/icons/send.svg";
import { ChatWrapper, defaultChatRoomData } from "@features/chat";
import { useScrollToBottom } from "@common/hooks/useScrollToBottom";
import theme from "@styles/theme";

export function ChatRoom() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const USER_NAME = "김현민";
  const STORAGE_KEY = `chatroom${state.chatRoomState}${state.chatRoomId}`;
  const CHAT_TIME_KEY = `chatroom${state.chatRoomState}${state.chatRoomId}time`;
  const [chatText, setChatText] = useState("");
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
  const [sendBtnState, setSendBtnState] = useState(false);
  const [headerClicked, setHeaderClicked] = useState(false);
  const [chatData, setChatData] = useState([
    ...defaultChatRoomData(state),
    ...getChatRoomData(STORAGE_KEY),
  ]);
  const { ref, scrollToBottom } = useScrollToBottom<HTMLDivElement>();
  const chatInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === "") {
      setSendBtnState(false);
    }
    if (event.target.value.trim() !== "") {
      setSendBtnState(true);
    }
    setChatText(event.target.value);
  };
  const pageHeaderClicked = () => {
    setHeaderClicked((prev) => !prev);
    setChatData((prevChatData) => {
      const updatedChatData = prevChatData.map((chatItem) => {
        return {
          ...chatItem,
          isUser: !chatItem.isUser,
        };
      });
      return updatedChatData;
    });
  };
  const sendBtnClicked = () => {
    if (!sendBtnState) {
      return;
    }
    setChatRecentTime(CHAT_TIME_KEY, printChatTime());
    setChatText("");
    setShouldScrollToBottom(true);
    setChatData((prev) => {
      if (prev[prev.length - 1].time === printChatTime()) {
        prev[prev.length - 1].time = null;
      }
      return [
        ...prev,
        {
          chatText: chatText.trim(),
          doubleClicked: false,
          time: printChatTime(),
          isUser: true,
        },
      ];
    });
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendBtnClicked();
    }
  };
  useEffect(() => {
    if (shouldScrollToBottom) {
      setSendBtnState(false);
      scrollToBottom();
    }
    setChatRoomData(STORAGE_KEY, chatData.slice(3));
  }, [STORAGE_KEY, chatData]);
  return (
    <>
      <PageHeader
        leftIcon={<LeftArrow onClick={() => navigate(-1)} />}
        title={!headerClicked ? state.chatRoomTitle : USER_NAME}
        people={state.people}
        rightIcon1={<Search />}
        rightIcon2={<Box style={{ marginLeft: "1.2rem" }} />}
        onClick={pageHeaderClicked}
      />
      <Divider state={DIVIDER_TYPE.LONGTHICK} />
      <ChatContainer ref={ref}>
        {chatData &&
          chatData.map((data, index) => (
            <ChatWrapper
              key={data.chatText + index}
              img={
                !data.isUser
                  ? headerClicked
                    ? "/img/profile.jpg"
                    : state.img
                  : undefined
              }
              name={
                !data.isUser
                  ? headerClicked
                    ? USER_NAME
                    : state.name
                  : undefined
              }
              file={data.file}
              chatText={data.chatText}
              doubleClicked={data.doubleClicked}
              time={data.time}
              isUser={data.isUser}
              index={index}
              chatData={chatData}
              setChatData={setChatData}
              setShouldScrollToBottom={setShouldScrollToBottom}
            />
          ))}
      </ChatContainer>
      <Divider
        state={DIVIDER_TYPE.LONGTHIN}
        $addClass={`background-color:${theme.colors.gray5}`}
      />
      <ChatInputContainer>
        <Plus />
        <ChatInput
          placeholder="채팅을 입력해주세요"
          onChange={chatInputChanged}
          value={chatText}
          onKeyDown={handleKeyPress}
        />
        <SendBtnWrapper $active={sendBtnState} onClick={sendBtnClicked}>
          <Send />
        </SendBtnWrapper>
      </ChatInputContainer>
    </>
  );
}

const ChatContainer = styled.div`
  height: 60.2rem;
  overflow: auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.gray7};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatInputContainer = styled.div`
  height: 7.3rem;
  padding: 1.2rem 2rem;
  background-color: ${(props) => props.theme.colors.gray6};
  display: flex;
  align-items: center;
`;

const ChatInput = styled.input`
  width: 25.5rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: none;
  margin: 0 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  ${(props) => props.theme.fontStyles.body3};
  font-size: 1.6rem;
`;

const SendBtnWrapper = styled.div<{ $active: boolean }>`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.mainColor : props.theme.colors.gray5};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
`;
