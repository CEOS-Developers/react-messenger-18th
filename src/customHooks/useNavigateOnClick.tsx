import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateOnClick = () => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(String(route));
  };

  return {
    navigateTo: handleClick,
  };
};
