import React, { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";
import { ReactComponent as LeftArrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Box } from "../icons/box.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";
import { ReactComponent as Send } from "../icons/send.svg";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Divider from "../components/common/Divider";
import { dividerState } from "../state/dividerState";
import ChatWrapper from "../components/chatroom/ChatWrapper";
import { getChatRoomData } from "../utils/accessStorage/getChatRoomData";
import { setChatRoomData } from "../utils/accessStorage/setChatRoomData";
import { useScrollToBottom } from "../customHooks/chatroom/useScrollToBottom";
import { printChatTime } from "../utils/printChatTime";

export default function ChatRoom() {
  const { state } = useLocation();
  const STORAGE_KEY = `chatroom${state.chatRoomState}${state.chatRoomId}`;
  const initialChatData = [
    {
      img: state.img,
      name: state.name,
      chatText: "이 내용 확인해주세요!",
      file: "디자인파일_최종.png",
      doubleClicked: true,
      time: "오후 3:32",
      isUser: false,
    },
    {
      chatText: "네 확인했습니다!",
      doubleClicked: true,
      time: "오후 3:32",
      isUser: true,
    },
    {
      img: state.img,
      name: state.name,
      chatText: "넵 감사합니다~",
      doubleClicked: true,
      time: "오후 3:33",
      isUser: false,
    },
  ];
  const { navigateBack } = useNavigateOnClick();
  const [chatText, setChatText] = useState("");
  const [chatData, setChatData] = useState(getChatRoomData(STORAGE_KEY));
  const { ref, scrollToBottom } = useScrollToBottom<HTMLDivElement>();
  const chatInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatText(event.target.value);
  };
  const sendBtnClicked = () => {
    setChatText("");
    setChatData((prev) => [
      ...prev,
      {
        chatText,
        doubleClicked: false,
        time: printChatTime(),
        isUser: true,
      },
    ]);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendBtnClicked();
    }
  };
  useEffect(() => {
    setChatRoomData(STORAGE_KEY, chatData);
    scrollToBottom();
  }, [STORAGE_KEY, chatData]);
  return (
    <>
      <PageHeader
        leftIcon={<LeftArrow onClick={navigateBack} />}
        title={state.chatRoomTitle}
        rightIcon1={<Search />}
        rightIcon2={<Box style={{ marginLeft: "1.2rem" }} />}
      />
      <Divider state={dividerState.LONGTHICK} />
      <ChatContainer ref={ref}>
        {initialChatData &&
          initialChatData.map((data, index) => (
            <ChatWrapper
              key={data.chatText + index}
              img={data.img}
              name={data.name}
              file={data.file}
              chatText={data.chatText}
              doubleClicked={data.doubleClicked}
              time={data.time}
              isUser={data.isUser}
            />
          ))}
        {chatData &&
          chatData.map((data, index) => (
            <ChatWrapper
              key={data.chatText + index}
              chatText={data.chatText}
              doubleClicked={data.doubleClicked}
              time={data.time}
              isUser={data.isUser}
              index={index}
              chatData={chatData}
              setChatData={setChatData}
            />
          ))}
      </ChatContainer>
      <ChatInputContainer>
        <Plus />
        <ChatInput
          placeholder="입력하세요"
          onChange={chatInputChanged}
          value={chatText}
          onKeyDown={handleKeyPress}
        />
        <SendBtnWrapper $active={chatText !== ""} onClick={sendBtnClicked}>
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
