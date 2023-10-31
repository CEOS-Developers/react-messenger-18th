import React from "react";
import styled from "styled-components";

interface HomeIndicatorProps {
  $bgColor: string | null;
}

export function HomeIndicator({ $bgColor }: HomeIndicatorProps) {
  return (
    <IndicatorWrapper $bgColor={$bgColor}>
      <BlackBar />
    </IndicatorWrapper>
  );
}

const IndicatorWrapper = styled.div<HomeIndicatorProps>`
  height: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgColor};
`;

const BlackBar = styled.div`
  width: 13.9rem;
  height: 0.5rem;
  border-radius: 10rem;
  background-color: ${(props) => props.theme.colors.black};
`;
