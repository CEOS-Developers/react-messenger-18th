import React from "react";
import styled from "styled-components";

export default function HomeIndicator() {
  return (
    <IndicatorWrapper>
      <BlackBar />
    </IndicatorWrapper>
  );
}

const IndicatorWrapper = styled.div`
  height: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlackBar = styled.div`
  width: 13.9rem;
  height: 0.5rem;
  border-radius: 10rem;
  background-color: ${(props) => props.theme.colors.black};
`;
