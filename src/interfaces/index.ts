// indicates main user interface
export interface IUserData {
  id: number; // 유저 아이디
  name: string; // 유저 이름
  imgSrc: string; // 유저 프로필 사진
}

export interface IChatData {
  from: 1 | 2; // 1 : 본인, 2 : 상대방
  like: boolean; // 좋아요 여부
  content: string; // 채팅 내용
  createdAt: string; // 채팅 시간
}

export interface IChatRoomData {
  id: number; // 채팅방 아이디
  partner: IUserData; // 채팅 상대방
  chatData: IChatData[]; // 채팅 데이터
  lastChat: string; // 마지막 채팅
}
