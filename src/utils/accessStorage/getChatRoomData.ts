export interface ChatRoomData {
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
