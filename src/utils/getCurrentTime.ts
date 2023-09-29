export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
