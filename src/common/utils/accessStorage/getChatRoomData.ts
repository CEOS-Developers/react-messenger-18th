import { ChatDetailState } from "@features/chat";

export const getChatRoomData = (key: string): ChatDetailState[] | [] => {
  const storedData = localStorage.getItem(key);

  if (storedData === null) {
    return [];
  }

  return JSON.parse(storedData);
};
