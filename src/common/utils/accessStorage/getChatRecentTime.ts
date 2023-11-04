export const getChatRecentTime = (key: string) => {
  const storedTime = localStorage.getItem(key);

  if (storedTime === null) {
    return null;
  }

  return storedTime;
};
