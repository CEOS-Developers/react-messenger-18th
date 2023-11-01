import { CHATROOM_TYPE } from "@common/constants";

export const defaultGroupChatList = [
  {
    id: 1,
    img: "/img/satellite.jpg",
    name: "기업적디자인스튜디오(1)",
    people: 19,
    message: "마지막 파일 체크해주세요!",
    type: CHATROOM_TYPE.MAIN,
  },
  {
    id: 0,
    img: "/img/flower.jpg",
    name: "2022-2 사이드프로젝트",
    people: 4,
    message: "다들 고생 많으셨어요!",
    type: CHATROOM_TYPE.SUB,
  },
  {
    id: 1,
    img: "/img/piano.jpg",
    name: "2022-1 사이드프로젝트",
    people: 5,
    message: "(이모티콘)",
    type: CHATROOM_TYPE.SUB,
  },
  {
    id: 0,
    img: "/img/cat.jpg",
    name: "CEOS 18기 펫뷸러스",
    people: 5,
    message: "세오스 톡방입니다~",
    type: CHATROOM_TYPE.MAIN,
  },
];
