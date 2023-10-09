import React from "react";
import styled from "styled-components";
import { ReactComponent as Like } from "../../icons/like.svg";
import { ChatRoomData } from "../../utils/accessStorage/getChatRoomData";

interface BubbleProps {
  chatText: string;
  file?: string;
  doubleClicked: boolean;
  time: string;
  isUser: boolean;
  index?: number;
  chatData?: ChatRoomData[] | [];
  setChatData?: React.Dispatch<React.SetStateAction<ChatRoomData[] | []>>;
  setShouldScrollToBottom?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Bubble({
  chatText,
  file,
  doubleClicked,
  time,
  isUser,
  index,
  chatData,
  setChatData,
  setShouldScrollToBottom,
}: BubbleProps) {
  const bubbleDoubleClicked = () => {
    if (
      index !== undefined &&
      chatData !== undefined &&
      setChatData !== undefined &&
      setShouldScrollToBottom !== undefined
    ) {
      const copyChatData = [...chatData];
      copyChatData[index].doubleClicked = !copyChatData[index].doubleClicked;
      setChatData(copyChatData);
      setShouldScrollToBottom(false);
      return;
    }
  };
  return (
    <BubbleWrapper $isUser={isUser} onDoubleClick={bubbleDoubleClicked}>
      <BubbleText $isUser={isUser}>
        <p>{chatText}</p>
      </BubbleText>
      {file ? (
        <BubbleFile>
          <p>{file}</p>
        </BubbleFile>
      ) : null}
      <BottomText>
        {doubleClicked ? (
          <LikeIcon>
            <Like />
          </LikeIcon>
        ) : null}
        <Time>
          <span>{time}</span>
        </Time>
      </BottomText>
    </BubbleWrapper>
  );
}

const BubbleWrapper = styled.div<{ $isUser: boolean }>`
  padding: 0.8rem 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: ${(props) => (!props.$isUser ? "1.2rem" : null)};
  margin-right: ${(props) => (props.$isUser ? "1.2rem" : null)};
  margin-bottom: 1.4rem;
  border-radius: 0.4rem;
  position: relative;
  max-width: 27.1rem;
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: ${(props) =>
      !props.$isUser ? "0 1.4rem 1.4rem 0" : "0 0 1.4rem 1.4rem"};
    border-color: transparent ${(props) => props.theme.colors.white};
    border-radius: ${(props) =>
      !props.$isUser ? "0.4rem 0 0 0" : "0 0.4rem 0 0"};
    display: block;
    width: 0;
    z-index: 1;
    left: ${(props) => (!props.$isUser ? "-1.2rem" : null)};
    right: ${(props) => (props.$isUser ? "-1.2rem" : null)};
    top: 0;
  }
`;

const BubbleText = styled.div<{ $isUser: boolean }>`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: ${(props) => (props.$isUser ? "flex-end" : null)};
  p {
    ${(props) => props.theme.fontStyles.body1};
    font-weight: 500;
  }
`;

const BubbleFile = styled.div`
  padding: 0.8rem 1.2rem;
  border-radius: 0.2rem;
  border: 1px solid ${(props) => props.theme.colors.gray5};
  margin-bottom: 0.8rem;
  p {
    color: ${(props) => props.theme.colors.gray2};
    ${(props) => props.theme.fontStyles.body2}
    font-size:1.4rem
  }
`;

const BottomText = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LikeIcon = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: 5.4rem;
  padding: 0.4rem 0.8rem;
  width: 3.2rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.8rem;
`;

const Time = styled.div`
  span {
    color: ${(props) => props.theme.colors.gray3};
    ${(props) => props.theme.fontStyles.body3}
    font-size:1.2rem;
    line-height: 1.8rem;
  }
`;
