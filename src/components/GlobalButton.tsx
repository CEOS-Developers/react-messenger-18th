import Icon from "pages/chatroom/icon";
import React, { ReactElement, MouseEvent, useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

interface GlobalButtonProps {
  customType:
    | "friendsearch"
    | "chatsearch"
    | "chatroomsearch"
    | "friend"
    | "chat"
    | "mypage"; // 타입을 정의
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  customType,
}: GlobalButtonProps): ReactElement => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    // URL이 해당 customType과 일치하면 버튼을 활성화
    if (
      (customType === "friendsearch" &&
        window.location.pathname === "/friendsearch") ||
      (customType === "chatsearch" &&
        window.location.pathname === "/chatsearch") ||
      (customType === "chatroomsearch" &&
        window.location.pathname === "/chatroomsearch") ||
      (customType === "friend" && window.location.pathname === "/") ||
      (customType === "chat" && window.location.pathname === "/chat") ||
      (customType === "mypage" && window.location.pathname === "/mypage")
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [customType]);

  const handleButtonClick = () => {
    if (customType === "friend") {
      navigate("/");
    } else if (customType === "chat") {
      navigate("/chat");
    } else if (customType === "friendsearch") {
      navigate("/friendsearch");
    } else if (customType === "chatsearch") {
      navigate("/chatsearch");
    } else if (customType === "chatroomsearch") {
      navigate("/chatroomsearch");
    } else if (customType === "mypage") {
      navigate("/mypage");
    }
  };

  return (
    <StyledButton button-type={customType} onClick={handleButtonClick}>
      {(customType === "friendsearch" ||
        customType === "chatsearch" ||
        customType === "chatroomsearch") && (
        <Icon size={28} icon="search" color={active ? "#1263DC" : "#B8B7CA"} />
      )}
      {customType === "friend" && (
        <Icon size={36} icon="friend" color={active ? "#1263DC" : "#B8B7CA"} />
      )}
      {customType === "chat" && (
        <Icon size={36} icon="chat" color={active ? "#1263DC" : "#B8B7CA"} />
      )}
      {customType === "mypage" && (
        <Icon size={36} icon="mypage" color={active ? "#1263DC" : "#B8B7CA"} />
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
