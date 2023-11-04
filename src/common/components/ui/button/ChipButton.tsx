import React, { ReactNode } from "react";
import styled from "styled-components";

interface ChipButtonProps {
  children: ReactNode;
  width: string;
  height: string;
  color: string;
  radius: string;
  addClass?: string;
}

export function ChipButton({
  children,
  width,
  height,
  color,
  radius,
  addClass,
}: ChipButtonProps) {
  return (
    <ChipBtnWrapper
      $width={width}
      $height={height}
      $color={color}
      $radius={radius}
      $addClass={addClass}
    >
      {children}
    </ChipBtnWrapper>
  );
}

const ChipBtnWrapper = styled.button<{
  $width: string;
  $height: string;
  $color: string;
  $radius: string;
  $addClass: string | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$color};
  border-radius: ${(props) => props.$radius};
  ${(props) => props.$addClass}
`;
