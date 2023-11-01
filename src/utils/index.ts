import { TMessage } from 'types';
import userData from 'data/userData.json';
import { include } from 'utils/search';

const daySelector = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const monthSelector = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// 채팅버블 시간 formatting
export const convertTimeFormat = (date: string) => {
  const dateObj = new Date(date);
  let amPm = 'AM';
  let hour = dateObj.getHours();
  if (hour > 12) {
    hour -= 12;
    amPm = 'PM';
  }
  if (hour === 0) hour = 12;
  return `${hour}:${String(dateObj.getMinutes()).padStart(2, '0')} ${amPm}`;
};

// 채팅목록 시간 formatting
export const convertTimeFormatForChatRoom = (date: string) => {
  const dateObj = new Date(date);

  let converted = '';
  if (
    new Date().getFullYear() === dateObj.getFullYear() &&
    new Date().getMonth() === dateObj.getMonth() &&
    new Date().getDate() === dateObj.getDate()
  ) {
    let hour = dateObj.getHours() % 12;
    const amFlag = dateObj.getHours() < 12;
    if (hour === 0) {
      hour = 12;
    }

    converted = `${amFlag ? '오전' : '오후'} ${hour}:${String(
      dateObj.getMinutes()
    ).padStart(2, '0')}`;
    return converted;
  }
  if (new Date().getFullYear() > dateObj.getFullYear()) {
    converted = converted.concat(`${dateObj.getFullYear()}`);
  }
  converted = converted.concat(
    `${dateObj.getMonth() + 1}/${String(dateObj.getDate()).padStart(2, '0')}`
  );

  return converted;
};

// 채팅방 날짜 formatting
export const convertDayDateFormat = (originalDate: string) => {
  const dateObj = new Date(originalDate);
  const day = daySelector[dateObj.getDay()];
  const month = monthSelector[dateObj.getMonth()];
  const date = dateObj.getDate();

  return `${day}, ${month} ${date}`;
};

export const checkIsNextDay = (date1: string, date2: string) => {
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);
  if (
    dateObj1.getFullYear() === dateObj2.getFullYear() &&
    dateObj1.getMonth() === dateObj2.getMonth() &&
    dateObj1.getDate() === dateObj2.getDate()
  )
    return false;
  return true;
};

// 채팅목록 구성을 위한 각 유저와의 마지막 메시지 구하기
export const getLastMessages = (id: number, messages: TMessage[]) => {
  const lastMessages: TMessage[] = [];
  const checkFirst = Array(userData.data.length + 1).fill(0);

  [...messages].reverse().forEach((message) => {
    if (message.fromUserId === id || message.toUserId === id) {
      const opponent =
        message.fromUserId === id ? message.toUserId : message.fromUserId;

      if (!checkFirst[opponent]) {
        lastMessages.push(message);
        checkFirst[opponent] = 1;
      }
    }
  });

  return lastMessages;
};

// 검색된 유저 목록
export const getSearchedUsers = (userId: number, query: string) => {
  const storedUserData = userData.data.filter(
    (e) => e.id !== userId && include(e.name, query)
  );
  // 유저 데이터가 초기 상태에서 변경되어 localStorage에 저장되어 있다면 해당 데이터로 교체
  for (let i = 0; i < storedUserData.length; i += 1) {
    const data = localStorage.getItem(`user_${storedUserData[i].id}`);
    if (data) {
      storedUserData[i] = JSON.parse(data);
    }
  }

  // 사전순 정렬
  storedUserData.sort((a, b) => {
    if (a.name < b.name) return -1;
    else return 1;
  });

  return storedUserData;
};
