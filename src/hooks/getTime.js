// getTime.js
import dayjs from "dayjs";

export function getTime(format) {
  const currentTime = dayjs().format(format);
  return currentTime;
}
