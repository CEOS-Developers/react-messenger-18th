export interface userInterface {
  id: number;
  userName: string;
  userID: string;
  profileImage: string;
  memo: string;
}

export interface chatInterface {
  text: string;
  sender: number;
}

export interface chattingInterface {
  chattingId: number;
  users: number[];
  chatList: chatInterface[];
}
