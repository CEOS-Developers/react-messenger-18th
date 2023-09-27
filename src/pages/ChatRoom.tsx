import React from "react";
import PageHeader from "../components/common/PageHeader";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";
import { ReactComponent as LeftArrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Box } from "../icons/box.svg";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Divider from "../components/common/Divider";
import { dividerState } from "../state/dividerState";
import ChatWrapper from "../components/chatroom/ChatWrapper";
import Bubble from "../components/chatroom/Bubble";

export default function ChatRoom() {
  const { state } = useLocation();
  const { navigateBack } = useNavigateOnClick();
  return (
    <>
      <PageHeader
        leftIcon={<LeftArrow onClick={navigateBack} />}
        title={state.chatRoomTitle}
        rightIcon1={<Search />}
        rightIcon2={<Box style={{ marginLeft: "1.2rem" }} />}
      />
      <Divider state={dividerState.LONGTHICK} />
      <ChatContainer>
        <ChatWrapper
          img={state.img}
          name={state.name}
          chatText="이 내용 확인해주세요!"
          file="디자인파일_최종.png"
          doubleClicked={true}
          time="오후 3:32"
          isUser={false}
        />
        <ChatWrapper
          chatText="네 확인했습니다!"
          doubleClicked={true}
          time="오후 3:32"
          isUser={true}
        />
        <ChatWrapper
          img={state.img}
          name={state.name}
          chatText="넵 감사합니다~"
          doubleClicked={true}
          time="오후 3:33"
          isUser={false}
        />
      </ChatContainer>
    </>
  );
}

const ChatContainer = styled.div`
  height: 60.2rem;
  overflow: auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.gray7};
`;
