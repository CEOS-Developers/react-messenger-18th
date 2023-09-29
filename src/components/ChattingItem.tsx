import React from "react";
import styled from "styled-components";
import { color } from "../assets/styles/color";

interface ChattingItemProps {
  message: string;
}

function ChattingItem({ message }: ChattingItemProps) {
  return <Container>{message}</Container>;
}

export default ChattingItem;

const Container = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  border-radius: 20px;
  background: ${color.gray1};
`;
