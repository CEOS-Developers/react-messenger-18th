import { ChatDetailState } from "@features/chat";

export const setChatRoomData = (key: string, data: ChatDetailState[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};
