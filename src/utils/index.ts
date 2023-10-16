import { TMessage } from 'types';
import userData from 'data/userData.json';

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

export const convertTimeFormatForChatRoom = (date: string) => {
  const dateObj = new Date(date);

  let converted = '';
  if (
    new Date().getFullYear() === dateObj.getFullYear() &&
    new Date().getMonth() === dateObj.getMonth() &&
    new Date().getDate() === dateObj.getDate()
  ) {
    let hour = Math.floor(dateObj.getHours() / 12);
    const amFlag = dateObj.getHours() / 12 < 1;
    if (hour === 0) {
      hour = 12;
    }

    converted = `${amFlag ? '오전' : '오후'} ${hour}:${dateObj.getDate()}`;
    return converted;
  }
  if (new Date().getFullYear() > dateObj.getFullYear()) {
    converted = converted.concat(`${dateObj.getFullYear()}`);
  }
  converted = converted.concat(
    `${dateObj.getMonth() + 1}/${dateObj.getDate()}`
  );

  return converted;
};

export const convertDayDateFormat = (date: string) => {
  const dateObj = new Date(date);
  const day = daySelector[dateObj.getDay()];
  const month = monthSelector[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${day}, ${month} ${year}`;
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
