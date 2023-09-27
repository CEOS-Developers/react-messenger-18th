import React from "react";
import styled from "styled-components";
import { ReactComponent as Like } from "../../icons/like.svg";

interface BubbleProps {
  chatText: string;
  file?: string;
  doubleClicked: boolean;
  time: string;
  isUser: boolean;
}

export default function Bubble({
  chatText,
  file,
  doubleClicked,
  time,
  isUser,
}: BubbleProps) {
  return (
    <BubbleWrapper $isUser={isUser}>
      <BubbleText>
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
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: ${(props) =>
      !props.$isUser ? "1rem 1.2rem 1rem 0" : "1rem 0 1rem 1.2rem"};
    border-color: transparent ${(props) => props.theme.colors.white};
    display: block;
    width: 0;
    z-index: 1;
    left: ${(props) => (!props.$isUser ? "-1.2rem" : null)};
    right: ${(props) => (props.$isUser ? "-1.2rem" : null)};
    top: 0;
  }
  p {
    ${(props) => props.theme.fontStyles.body1}
  }
`;

const BubbleText = styled.div`
  margin-bottom: 0.8rem;
`;

const BubbleFile = styled.div`
  padding: 0.8rem 1.2rem;
  border-radius: 0.2rem;
  border: 1px solid ${(props) => props.theme.colors.gray5};
  margin-bottom: 0.8rem;
  p {
    color: ${(props) => props.theme.colors.gray2};
    ${(props) => props.theme.fontStyles.body2}
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
  }
`;
