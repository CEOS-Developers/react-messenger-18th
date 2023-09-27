import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface UseNavigateOnClickProps {
  route: string | number;
}

export const useNavigateOnClick = ({ route }: UseNavigateOnClickProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(String(route));
  }, [navigate, route]);

  return {
    onClick: handleClick,
  };
};
