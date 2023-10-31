import { CHATROOM_TYPE, MAJOR_TYPE } from "@common/constants";

export const defaultDesignerList = [
  {
    id: 0,
    img: "/img/default.jpg",
    name: "전윤수",
    message: "세오스 화이팅!",
    majorIn: MAJOR_TYPE.DESIGNER,
    group: {
      id: 0,
      name: "CEOS 18기 펫뷸러스",
      state: CHATROOM_TYPE.MAIN,
    },
  },
  {
    id: 1,
    img: "/img/nightview.jpg",
    name: "최윤서",
    message: "디자인 화이팅~!!",
    majorIn: MAJOR_TYPE.DESIGNER,
    group: {
      id: 1,
      name: "기업적디자인스튜디오(1)",
      state: CHATROOM_TYPE.MAIN,
    },
  },
  {
    id: 2,
    img: "/img/wolf.jpg",
    name: "이다인",
    message: "상태메세지",
    majorIn: MAJOR_TYPE.DESIGNER,
    group: {
      id: 1,
      name: "2022-1 사이드프로젝트",
      state: CHATROOM_TYPE.SUB,
    },
  },
];

export const defaultDeveloperList = [
  {
    id: 0,
    img: "/img/tottenham.jpg",
    name: "김진호",
    message: "프론트 화이팅~!!",
    majorIn: MAJOR_TYPE.FRONTEND,
    group: {
      id: 1,
      name: "기업적디자인스튜디오(1)",
      state: CHATROOM_TYPE.MAIN,
    },
  },
  {
    id: 1,
    img: "/img/beer.jpg",
    name: "김지원",
    message: "상태메세지",
    majorIn: MAJOR_TYPE.FRONTEND,
    group: {
      id: 0,
      name: "2022-2 사이드프로젝트",
      state: CHATROOM_TYPE.SUB,
    },
  },
];
