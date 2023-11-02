import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { PageHeader, Divider } from "@common/components";
import { DIVIDER_TYPE, USER_NAME } from "@common/constants";
import { getChatRoomData, setChatRoomData } from "@common/utils";
import { ReactComponent as LeftArrow } from "@common/icons/arrows/leftarrow.svg";
import { ReactComponent as Search } from "@common/icons/search.svg";
import { ReactComponent as Box } from "@common/icons/box.svg";
import { ReactComponent as Plus } from "@common/icons/plus.svg";
import { ReactComponent as Send } from "@common/icons/send.svg";
import {
  ChatWrapper,
  defaultChatRoomData,
  useChatHeaderClicked,
  useChatInputChanged,
} from "@features/chat";
import { useScrollToBottom } from "@common/hooks/useScrollToBottom";
import theme from "@styles/theme";
import { useSendBtnClicked } from "@features/chat/hooks/useSendBtnClicked";

export function ChatRoom() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const STORAGE_KEY = `chatroom${state.chatRoomState}${state.chatRoomId}`;
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
  const [chatData, setChatData] = useState([
    ...defaultChatRoomData(state),
    ...getChatRoomData(STORAGE_KEY),
  ]);
  const { headerClicked, toggleHeaderClicked } =
    useChatHeaderClicked(setChatData);
  const { chatText, setChatText, sendBtnState, setSendBtnState, inputChanged } =
    useChatInputChanged();
  const { ref, scrollToBottom } = useScrollToBottom<HTMLDivElement>();
  const { btnClicked } = useSendBtnClicked({
    chatText,
    sendBtnState,
    setChatText,
    setShouldScrollToBottom,
    setChatData,
  });
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      btnClicked();
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
        onClick={() => toggleHeaderClicked()}
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            inputChanged(event)
          }
          value={chatText}
          onKeyDown={handleKeyPress}
        />
        <SendBtnWrapper $active={sendBtnState} onClick={() => btnClicked()}>
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
