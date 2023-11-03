//style
import styled from "styled-components";
import "../../style/color.css";
import { Body2, Caption2 } from "../../style/font";
import { ReactComponent as Liked } from "../../assets/icons/Liked.svg";
//components
import { chatBubbleTime } from "../../utils/dateForm";
import { LikeButton } from "./LikeButton";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { chatListByIdState } from "../../recoil/state";

interface ChatBubbleProps {
  isMyChat: boolean;
  message: string;
  chatDate: string;
  isLiked: number;
  index: number;
  roomId: number;
}
function ChatBubble(props: ChatBubbleProps) {
  const [likeToggle, setLikeToggle] = useState(false);
  //좋아요 정보 변경
  const [chatList, setChatList] = useRecoilState(
    chatListByIdState(props.roomId)
  );
  //더블클릭 시 좋아요 이벤트
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLikeToggle(!likeToggle);
  };
  const handleLikeClick = () => {
    const copy = [...chatList];
    if (chatList[props.index].like === 0) {
      copy[props.index] = {
        ...copy[props.index],
        like: 1,
      };
    } else if (chatList[props.index].like === 1) {
      copy[props.index] = {
        ...copy[props.index],
        like: 0,
      };
    }
    setChatList(copy);
    setLikeToggle(!likeToggle);
  };

  return (
    <ChatBubbleContainer
      isMyChat={props.isMyChat}
      onDoubleClick={handleDoubleClick}
    >
      <div className="chatWrapper">
        <Caption2 className="writeTime" color="var(--gray-4)">
          {chatBubbleTime(props.chatDate)}
        </Caption2>
        <ChatBox isMyChat={props.isMyChat}>
          {chatList[props.index].like === 1 ? (
            <MessageLike isMyChat={props.isMyChat} />
          ) : null}
          <ChatText isMyChat={props.isMyChat}>{props.message}</ChatText>
        </ChatBox>
      </div>
      {likeToggle ? (
        <div onClick={handleLikeClick}>
          <LikeButton isMyChat={props.isMyChat} isLiked={props.isLiked} />
        </div>
      ) : null}
    </ChatBubbleContainer>
  );
}
//user 쪽 채팅과 상대방쪽 채팅 props로 구분
const ChatBubbleContainer = styled.div<{ isMyChat: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMyChat ? "flex-end" : "flex-start")};
  .chatWrapper {
    display: flex;
    flex-direction: ${(props) => (props.isMyChat ? "row" : "row-reverse")};
    align-items: flex-end;
    gap: 0.3125rem;
    position: relative;
  }
  .writeTime {
    margin-bottom: 0.625rem;
  }
  /*더블클릭 선택 막기*/
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
`;
const ChatBox = styled.div<{ isMyChat: boolean }>`
  background-color: ${(props) =>
    props.isMyChat ? "var(--green)" : "var(--gray-1)"};
  max-width: 16.8125rem;
  width: fit-content;
  position: relative;
  word-break: break-all;
  border-radius: 1.5rem;
  margin: ${(props) =>
    props.isMyChat
      ? "0.625rem 1.25rem 0.625rem 0"
      : "0.625rem 0 0.625rem 1.25rem"};
`;
const ChatText = styled(Body2)<{ isMyChat: boolean }>`
  color: ${(props) => (props.isMyChat ? "var(--gray-1)" : "var(--gray-7)")};
  padding: 0.625rem 1.25rem;
`;
const MessageLike = styled(Liked)<{ isMyChat: boolean }>`
  position: absolute;
  ${(props) => (props.isMyChat ? "left:-0.1rem" : "right:-0.1rem")};
  bottom: 0rem;
  width: 1.25rem;
  height: 1.25rem;
`;
export default ChatBubble;
