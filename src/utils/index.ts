const daySelector = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
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
  return `${hour}:${dateObj.getMinutes()} ${amPm}`;
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
