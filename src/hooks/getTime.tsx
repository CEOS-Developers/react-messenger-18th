import dayjs from "dayjs";
// 원하는 포맷에 따라 현재 시간을 return
export function getTime(format: string) {
  const currentTime = dayjs().format(format);
  return currentTime;
}
