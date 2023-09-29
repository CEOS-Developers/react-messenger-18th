import React from "react";
import styled, { css } from "styled-components";
import { color } from "../assets/styles/color";
import { useSender } from "../assets/SenderContext";

interface ChattingItemProps {
  message: string;
  sender: string;
}

function ChattingItem({ message, sender }: ChattingItemProps) {
  const { sender: contextSender } = useSender();
  const isMe = sender === contextSender;
  return (
    <ChattingItemContainer sender={sender} isMe={isMe}>
      <ChattingItemContent isMe={isMe}>{message}</ChattingItemContent>
    </ChattingItemContainer>
  );
}

export default ChattingItem;

const ChattingItemContainer = styled.div<{ sender: string; isMe: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isMe ? "flex-end" : "flex-start")};
`;

const ChattingItemContent = styled.div<{ isMe: boolean }>`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 10px;
  max-width: 70%;
  margin: 4px 0;

  border-radius: 20px;
  background: ${(props) => (props.isMe ? color.gray1 : color.white)};

  ${(props) =>
    !props.isMe &&
    css`
      border: 1px solid ${color.gray2};
    `}
`;
