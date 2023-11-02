import React from "react";
import { styled } from "styled-components";

type ChatProps = {
  calendar: string;
};

const Calendar: React.FC<ChatProps> = ({ calendar }) => {
  return (
    <CalendarContainer>
      <CalendarWrapper>{calendar}</CalendarWrapper>
    </CalendarContainer>
  );
};
export default Calendar;

const CalendarContainer = styled.div`
  width: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarWrapper = styled.div`
  width: 100px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  opacity: 0.6;
  background: #33333a;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;
