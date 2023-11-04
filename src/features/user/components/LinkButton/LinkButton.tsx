import React, { ReactNode } from "react";
import styled from "styled-components";

interface LinkButtonProps {
  width: string;
  height: string;
  radius?: string;
  icon: ReactNode;
  children: ReactNode;
  onClick: () => void;
  addClass?: string;
}

export function LinkButton({
  width,
  height,
  radius,
  icon,
  children,
  onClick,
  addClass,
}: LinkButtonProps) {
  return (
    <LinkBtnWrapper
      $width={width}
      $height={height}
      $radius={radius}
      onClick={onClick}
      $addClass={addClass}
    >
      {icon}
      {children}
    </LinkBtnWrapper>
  );
}

const LinkBtnWrapper = styled.button<{
  $width: string;
  $height: string;
  $radius: string | undefined;
  $addClass: string | undefined;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$radius};
  ${(props) => props.$addClass}
`;
