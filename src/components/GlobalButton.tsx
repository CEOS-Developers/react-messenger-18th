import Icon from "pages/chatroom/icon";
import React, { ReactElement, MouseEvent, useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

interface GlobalButtonProps {
  customType: "search" | "friend" | "chat" | "mypage"; // 타입을 정의
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  customType,
}: GlobalButtonProps): ReactElement => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    // URL이 해당 customType과 일치하면 버튼을 활성화
    if (
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
    } else if (customType === "mypage") {
      navigate("/mypage");
    }
  };

  return (
    <StyledButton button-type={customType} onClick={handleButtonClick}>
      {customType === "search" && <Icon size={28} icon="search" />}
      {customType === "friend" && (
        <Icon size={36} icon="friend" color={active ? "blue" : "#B8B7CA"} />
      )}
      {customType === "chat" && (
        <Icon size={36} icon="chat" color={active ? "blue" : "#B8B7CA"} />
      )}
      {customType === "mypage" && (
        <Icon size={36} icon="mypage" color={active ? "blue" : "#B8B7CA"} />
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
