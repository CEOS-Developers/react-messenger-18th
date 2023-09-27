export interface TMessage {
  id: number;
  fromUserId: number;
  toUserId: number;
  profileImage?: string | null;
  text: string;
  time: string;
  isRead: boolean;
  likeCount: number;
}

export interface TUser {
  id: number;
  name: string;
  proifleImage?: string | null;
}
