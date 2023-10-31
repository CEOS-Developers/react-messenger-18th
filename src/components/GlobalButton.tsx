import Icon from "pages/chatroom/icon";
import React, { ReactElement, MouseEvent } from "react";
import { styled } from "styled-components";

interface GlobalButtonProps {
  text: string;
  customType: "search" | "friend" | "chat" | "mypage"; // 타입을 정의
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  text,
  customType,
  onClick,
}: GlobalButtonProps): ReactElement => {
  return (
    <StyledButton
      className={["GlobalButton", `GlobalButton_${customType}`].join(" ")}
      button-type={customType}
      onClick={onClick}
    >
      {customType === "search" && <Icon size={28} icon="search" />}
      {customType === "friend" && (
        <Icon size={36} icon="friend" color="#B8B7CA" />
      )}
      {customType === "chat" && <Icon size={36} icon="chat" color="#B8B7CA" />}
      {customType === "mypage" && (
        <Icon size={36} icon="mypage" color="#B8B7CA" />
      )}
    </StyledButton>
  );
};
export default GlobalButton;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
