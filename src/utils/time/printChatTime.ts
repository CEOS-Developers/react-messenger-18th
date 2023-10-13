export const printChatTime = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  let timeFormat = "오전";
  let formattedHour = hour;

  if (hour >= 12) {
    timeFormat = "오후";
    formattedHour = hour - 12;
  }

  return `${timeFormat} ${formattedHour}:${minute < 10 ? "0" : ""}${minute}`;
};
