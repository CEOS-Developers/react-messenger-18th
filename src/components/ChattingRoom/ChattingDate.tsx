import React from "react";
import styled from "styled-components";
import { color } from "../../assets/styles/color";

interface DateItemProps {
  date: string;
  isDateMessage: boolean;
}

function ChattingDate({ date, isDateMessage }: DateItemProps) {
  if (isDateMessage) {
    return <DateContainer>{date}</DateContainer>;
  }
  return null;
}

export default ChattingDate;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 12px;
  color: ${color.grey3};
`;
