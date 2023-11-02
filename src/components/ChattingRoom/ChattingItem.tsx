import React from "react";
import styled, { css } from "styled-components";
import { color } from "../../assets/styles/color";
import { useSender } from "../../assets/SenderContext";

//data
import { useRecoilValue } from "recoil";
import { meAtom, chatArrayState } from "../../assets/recoil/recoil";

interface ChattingItemProps {
  message: string;
  sender: number;
  isLastItem: boolean;
}

function ChattingItem({ message, sender, isLastItem }: ChattingItemProps) {
  const { sender: contextSender } = useSender();
  const isMe = sender === contextSender;
  const currentUser = useRecoilValue(meAtom);
  return (
    <ChattingItemContainer sender={sender} isMe={isMe}>
      {isMe ? (
        <></>
      ) : isLastItem ? (
        <UserImg src={currentUser.profileImage} />
      ) : (
        <NoneImg />
      )}
      <ChattingItemContent isMe={isMe}>{message}</ChattingItemContent>
    </ChattingItemContainer>
  );
}

export default ChattingItem;

const ChattingItemContainer = styled.div<{ sender: number; isMe: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.isMe ? "flex-end" : "flex-start")};
`;

const ChattingItemContent = styled.div<{ isMe: boolean }>`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 10px;
  max-width: 70%;
  margin: 4px 12px;

  border-radius: 20px;
  background: ${(props) => (props.isMe ? color.grey1 : color.white)};

  ${(props) =>
    !props.isMe &&
    css`
      border: 1px solid ${color.grey2};
    `}
`;

const UserImg = styled.img`
  display: flex;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  margin: 0 0 4px 15px;
`;

const NoneImg = styled.div`
  display: flex;
  width: 26px;
  height: 26px;

  margin: 0 0 4px 15px;
`;
