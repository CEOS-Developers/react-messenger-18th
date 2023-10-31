import React, { ReactNode } from "react";
import styled from "styled-components";

interface RoleButtonProps {
  children: ReactNode;
  addClass?: string;
}

export function RoleButton({ children, addClass }: RoleButtonProps) {
  return <RoleButtonWrapper $addClass={addClass}>{children}</RoleButtonWrapper>;
}

const RoleButtonWrapper = styled.button<{
  $addClass: string | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.mainColor};
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.body3};
    font-size: 1.2rem;
    font-weight: 500;
  }
  ${(props) => props.$addClass}
`;
