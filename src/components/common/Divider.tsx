import React from "react";
import styled from "styled-components";
import { deviderState } from "../../state/deviderState";

interface DividerProps {
  state: string;
  addClass?: string;
}

export default function Divider({ state, addClass }: DividerProps) {
  return <DividerWrapper state={state} addClass={addClass} />;
}

const DividerWrapper = styled.div<DividerProps>`
  width: ${(props) =>
    props.state === deviderState.SHORT ? "33.5rem" : "37.5rem"};
  height: ${(props) =>
    props.state === deviderState.LONGTHICK ? "0.2rem" : "0.1rem"};
  background-color: ${(props) => props.theme.colors.gray6};
  ${(props) => props.addClass}
`;
