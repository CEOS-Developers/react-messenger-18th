import React, { ReactNode } from "react";
import styled from "styled-components";

interface ChipButtonProps {
  children: ReactNode;
  width: string;
  height: string;
  color: string;
  radius: string;
  fontStyle: string;
  addClass?: string;
}

export function ChipButton({
  children,
  width,
  height,
  color,
  radius,
  fontStyle,
  addClass,
}: ChipButtonProps) {
  return (
    <ChipBtnWrapper
      $width={width}
      $height={height}
      $color={color}
      $radius={radius}
      $fontStyle={fontStyle}
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
  $fontStyle: string;
  $addClass: string | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$color};
  border-radius: ${(props) => props.$radius};
  ${(props) => props.$fontStyle}
  ${(props) => props.$addClass}
`;
