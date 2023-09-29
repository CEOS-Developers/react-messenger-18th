import React from "react";
import styled from "styled-components";

interface ChattingContentsProps {
  chatHistory: string[];
  newMessage: string;
}

function ChattingContents({ chatHistory, newMessage }: ChattingContentsProps) {
  return <Container></Container>;
}

export default ChattingContents;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 375px;
  height: 630px;
  flex-shrink: 0;
`;
