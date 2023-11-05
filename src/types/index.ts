export interface TMessage {
  id: number;
  fromUserId: number;
  toUserId: number;
  text: string;
  time: string;
  isRead: boolean;
  likeCount: number;
}

export interface TUser {
  id: number;
  name: string;
  profileImage: string | null;
  statusMessage: string | null;
  likedMessages: number[];
  github: string | null;
  behance: string | null;
  instagram: string | null;
}

export interface TChatRoomInfo {
  id: number;
  profileImage: string | null;
  userName: string;
  message: string;
  time: string;
}
