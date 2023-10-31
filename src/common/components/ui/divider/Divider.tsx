import React from "react";
import styled from "styled-components";
import { DIVIDER_TYPE } from "@common/constants";

interface DividerProps {
  state: string;
  $addClass?: string;
}

export function Divider({ state, $addClass }: DividerProps) {
  return <DividerWrapper state={state} $addClass={$addClass} />;
}

const DividerWrapper = styled.div<DividerProps>`
  width: ${(props) =>
    props.state === DIVIDER_TYPE.SHORT ? "33.5rem" : "37.3rem"};
  height: ${(props) =>
    props.state === DIVIDER_TYPE.LONGTHICK ? "0.2rem" : "0.1rem"};
  background-color: ${(props) => props.theme.colors.gray6};
  ${(props) => props.$addClass}
`;
