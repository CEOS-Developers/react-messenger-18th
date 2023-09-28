import { ChatRoomData } from "./getChatRoomData";

export const setChatRoomData = (key: string, data: ChatRoomData[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};
