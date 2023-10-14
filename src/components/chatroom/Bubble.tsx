import React from "react";
import styled from "styled-components";
import { ReactComponent as Like } from "../../icons/heart.svg";
import { ChatWrapperProps } from "./ChatWrapper";

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
}: Partial<ChatWrapperProps> & { isUser: boolean }) {
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
    <>
      <BubbleWrapper $isUser={isUser} onDoubleClick={bubbleDoubleClicked}>
        <BubbleText $isUser={isUser} $file={file}>
          <p>{chatText}</p>
        </BubbleText>
        {file ? (
          <BubbleFile>
            <p>{file}</p>
          </BubbleFile>
        ) : null}
      </BubbleWrapper>
      <BottomText $isUser={isUser}>
        {!isUser ? (
          <Time>
            <span>{time}</span>
            {doubleClicked ? (
              <LikeIcon $isUser={isUser}>
                <Like />
                <span>1</span>
              </LikeIcon>
            ) : null}
          </Time>
        ) : null}
        {isUser ? (
          <Time>
            {doubleClicked ? (
              <LikeIcon $isUser={isUser}>
                <Like />
                <span>1</span>
              </LikeIcon>
            ) : null}
            <span>{time}</span>
          </Time>
        ) : null}
      </BottomText>
    </>
  );
}

const BubbleWrapper = styled.div<{ $isUser: boolean }>`
  padding: 0.8rem 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: ${(props) => (!props.$isUser ? "1.2rem" : null)};
  margin-right: ${(props) => (props.$isUser ? "1.2rem" : null)};
  margin-bottom: 0.4rem;
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

const BubbleText = styled.div<{ $isUser: boolean; $file?: string }>`
  display: flex;
  justify-content: ${(props) => (props.$isUser ? "flex-end" : null)};
  margin-bottom: ${(props) => (props.$file ? "0.8rem" : null)};
  p {
    ${(props) => props.theme.fontStyles.body1};
    font-weight: 400;
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

const BottomText = styled.div<{ $isUser: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
  height: 2rem;
  margin-bottom: 1.2rem;
  margin-left: ${(props) => (!props.$isUser ? "1.2rem" : null)};
  margin-right: ${(props) => (props.$isUser ? "1.2rem" : null)};
`;

const LikeIcon = styled.div<{ $isUser: boolean }>`
  position: absolute;
  left: ${(props) => (props.$isUser ? "-4.3rem" : null)};
  right: ${(props) => (!props.$isUser ? "-4.3rem" : null)};
  background-color: ${(props) => props.theme.colors.mainColorLight};
  border-radius: 5.4rem;
  padding: 0.2rem 0.6rem;
  width: 3.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => (props.$isUser ? "0.8rem" : null)};
  margin-left: ${(props) => (!props.$isUser ? "0.8rem" : null)};
  span {
    margin-left: 0.2rem;
    ${(props) => props.theme.fontStyles.body4};
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme.colors.mainColor};
  }
`;

const Time = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  span {
    color: ${(props) => props.theme.colors.gray3};
    ${(props) => props.theme.fontStyles.body3}
    font-size:1.2rem;
    line-height: 1.8rem;
  }
`;
