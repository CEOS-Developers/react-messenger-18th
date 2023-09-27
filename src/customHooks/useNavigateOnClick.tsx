import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface ChatState {
  state: {
    chatRoomTitle: string;
    img: string;
    name: string;
  };
}

export const useNavigateOnClick = () => {
  const navigate = useNavigate();

  const handleClick = (route: string, state?: ChatState) => {
    navigate(String(route), state);
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return {
    navigateTo: handleClick,
    navigateBack,
  };
};
