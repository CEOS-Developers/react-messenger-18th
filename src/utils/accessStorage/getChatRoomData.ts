export interface ChatRoomData {
  img?: string;
  name?: string;
  file?: string;
  chatText: string;
  doubleClicked: boolean;
  time: string;
  isUser: boolean;
}

export const getChatRoomData = (key: string): ChatRoomData[] | [] => {
  const storedData = localStorage.getItem(key);

  if (storedData === null) {
    return [];
  }

  return JSON.parse(storedData) || [];
};
