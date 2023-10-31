import React from "react";
import { styled } from "styled-components";

type ChatProps = {
  calendar: string;
  showCalendar: boolean;
};

const Calendar: React.FC<ChatProps> = ({ calendar, showCalendar }) => {
  return (
    <CalendarContainer>
      <CalendarWrapper>{calendar}</CalendarWrapper>
    </CalendarContainer>
  );
};
export default Calendar;

const CalendarContainer = styled.div`
  padding: 12px;
  width: 100px;
`;

const CalendarWrapper = styled.div`
  padding: 8px;
  justify-content: center;
  border-radius: 16px;
  opacity: 0.6;
  background: #33333a;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;
