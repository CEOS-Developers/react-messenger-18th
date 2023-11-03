export const chatBubbleTime = (chatDate: string) => {
  const date = new Date(chatDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12 ? true : false;
  const hours12 = hours < 13 ? hours : hours - 12;
  return `${isAM ? "오전" : "오후"} ${hours12}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const checkDateChange = (date1: string, date2: string) => {
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);
  if (
    dateObj1.getFullYear() === dateObj2.getFullYear() &&
    dateObj1.getMonth() === dateObj2.getMonth() &&
    dateObj1.getDate() === dateObj2.getDate()
  ) {
    return false;
  }
  return true;
};

export const dateChangeFormat = (date: string) => {
  const dateObj = new Date(date);
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  return `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월${" "} 
  ${dateObj.getDate()}일 (${dayList[dateObj.getDay()]})`;
};

export const chatCardDateFormat = (date: string) => {
  const dateObj = new Date(date);
  const nowDate = new Date();
  if (
    // 같은 날일때 시간출력 (오전 00:00)
    dateObj.getFullYear() === nowDate.getFullYear() &&
    dateObj.getMonth() === nowDate.getMonth() &&
    dateObj.getDate() === nowDate.getDate()
  ) {
    return chatBubbleTime(dateObj.toString());
  } else if (
    // 어제일 때 어제 출력 (어제)
    dateObj.getFullYear() === nowDate.getFullYear() &&
    dateObj.getMonth() === nowDate.getMonth() &&
    dateObj.getDate() === nowDate.getDate() - 1
  ) {
    return `어제`;
  } else if (
    // 같은 해일 때 날짜 출력 (00월 00일)
    dateObj.getFullYear() === nowDate.getFullYear()
  ) {
    return `${dateObj.getMonth() + 1}월${" "}${dateObj.getDate()}일`;
  } else if (
    // 다른 해일 때 년도 포함 날짜 출력 (0000.00.00)
    dateObj.getFullYear() !== nowDate.getFullYear()
  ) {
    return `${dateObj.getFullYear()}.${" "}${dateObj.getMonth() + 1}.${" "} 
${dateObj.getDate()}`;
  }
};
