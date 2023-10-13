export interface ChatRoomData {
  img?: string;
  name?: string;
  chatText: string;
  file?: string;
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
